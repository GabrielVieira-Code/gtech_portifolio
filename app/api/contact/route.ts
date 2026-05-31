import { NextRequest, NextResponse } from 'next/server'
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns'

interface ContactPayload {
  name: string
  email: string
  message: string
}

function validate(data: Partial<ContactPayload>): string | null {
  const { name, email, message } = data
  if (!name?.trim())    return 'Nome é obrigatório.'
  if (!email?.trim())   return 'E-mail é obrigatório.'
  if (!message?.trim()) return 'Mensagem é obrigatória.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'E-mail inválido.'
  if (message.trim().length < 10) return 'Mensagem muito curta.'
  return null
}

function buildMessage({ name, email, message }: ContactPayload): string {
  return [
    'Nova mensagem de contato - Portfolio GTECH',
    '',
    `Nome:    ${name}`,
    `E-mail:  ${email}`,
    '',
    'Mensagem:',
    message.trim(),
    '',
    '---',
    `Recebido em: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`,
  ].join('\n')
}

export async function POST(request: NextRequest) {
  const region    = process.env.AWS_REGION
  const accessKey = process.env.AWS_ACCESS_KEY_ID
  const secretKey = process.env.AWS_SECRET_ACCESS_KEY
  const topicArn  = process.env.SNS_TOPIC_ARN

  const missing = ['AWS_REGION', 'AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'SNS_TOPIC_ARN']
    .filter(k => !process.env[k])

  if (missing.length > 0) {
    console.error('[/api/contact] Variáveis de ambiente ausentes:', missing.join(', '))
    return NextResponse.json(
      { error: 'Configuração incompleta no servidor.' },
      { status: 500 }
    )
  }

  try {
    const body: Partial<ContactPayload> = await request.json()

    const validationError = validate(body)
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const payload = body as ContactPayload

    const sns = new SNSClient({
      region: region!,
      credentials: {
        accessKeyId: accessKey!,
        secretAccessKey: secretKey!,
      },
    })

    await sns.send(
      new PublishCommand({
        TopicArn: topicArn!,
        Subject: `[Portfolio] Contato de ${payload.name}`,
        Message: buildMessage(payload),
      })
    )

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('[/api/contact] Erro ao publicar no SNS:', msg)
    return NextResponse.json(
      { error: 'Erro interno. Tente novamente em instantes.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Método não permitido.' }, { status: 405 })
}
