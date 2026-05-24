import { NextRequest, NextResponse } from 'next/server'
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns'

const sns = new SNSClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

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
    '🔔 Nova mensagem de contato — Portfólio GTECH',
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
  try {
    const body: Partial<ContactPayload> = await request.json()

    const validationError = validate(body)
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const payload = body as ContactPayload

    await sns.send(
      new PublishCommand({
        TopicArn: process.env.SNS_TOPIC_ARN!,
        Subject: `[Portfólio] Contato de ${payload.name}`,
        Message: buildMessage(payload),
      })
    )

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('[/api/contact] Erro ao publicar no SNS:', error)
    return NextResponse.json(
      { error: 'Erro interno. Tente novamente em instantes.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Método não permitido.' }, { status: 405 })
}
