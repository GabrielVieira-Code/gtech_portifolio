# Histórico de Alterações — Integração AWS SNS

Data: 2026-05-24

## Dependência instalada

```bash
npm install @aws-sdk/client-sns
```

---

## Arquivos criados

### `app/api/contact/route.ts`
**O que faz:** API Route do Next.js que recebe o POST do formulário, valida os campos (nome, e-mail, mensagem) e publica uma notificação no tópico AWS SNS configurado.  
**Por quê:** Centraliza a lógica de envio no servidor, mantendo as credenciais AWS fora do cliente. Substitui o endpoint legado `/api/sendEmail`.

### `app/pages/contact/components/ContactForm.tsx`
**O que faz:** Componente React client-side com formulário controlado (nome, e-mail, mensagem), gerenciamento de estado de envio (idle/loading/success/error) e feedback visual inline.  
**Por quê:** Isola a lógica do formulário em um componente reutilizável, facilitando testes e manutenção futura.

### `.env.local.example`
**O que faz:** Template das variáveis de ambiente necessárias para a integração AWS.  
**Por quê:** Documenta quais variáveis precisam ser preenchidas sem expor valores reais no repositório.

### `.env.local`
**O que faz:** Arquivo de variáveis de ambiente local (ignorado pelo git via `.env*.local` no `.gitignore`).  
**Por quê:** Criado com valores placeholder para o desenvolvedor preencher com as credenciais reais.

### `docs/CHANGES.md` (este arquivo)
Documenta todas as alterações desta sessão.

### `docs/ARCHITECTURE.md`
Documenta a arquitetura do projeto, fluxo de hospedagem e fluxo do formulário de contato.

---

## Arquivos modificados

### `app/pages/contact/page.tsx`
- **Adicionado:** `import ContactForm from "./components/ContactForm"`
- **Adicionado:** Seção `<ContactForm />` abaixo do grid principal, com título "Ou envie uma mensagem rápida"
- **Alterado:** `handleSubmit` agora chama `/api/contact` (SNS) em vez de `/api/sendEmail` (endpoint legado)
- Todo o conteúdo visual original foi preservado integralmente.

---

## Próximos passos — ações manuais necessárias

### 1. Criar o tópico SNS na AWS
```
AWS Console → SNS → Topics → Create topic
Tipo: Standard
Nome sugerido: contact-notifications
```
Após criar, copie o ARN gerado (formato: `arn:aws:sns:REGION:ACCOUNT_ID:contact-notifications`).

### 2. Criar IAM User com permissão mínima
```
AWS Console → IAM → Users → Create user
Permissão inline (política de menor privilégio):
```
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "sns:Publish",
    "Resource": "arn:aws:sns:REGION:ACCOUNT_ID:contact-notifications"
  }]
}
```
Gere as credenciais (Access Key ID + Secret Access Key).

### 3. Adicionar uma subscrição de e-mail ao tópico
```
SNS → Topics → contact-notifications → Create subscription
Protocol: Email
Endpoint: seu@email.com
```
Confirme o e-mail de verificação que chegará na caixa de entrada.

### 4. Preencher `.env.local` com os valores reais
```
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIA...  (do IAM User criado)
AWS_SECRET_ACCESS_KEY=...  (do IAM User criado)
SNS_TOPIC_ARN=arn:aws:sns:us-east-1:ACCOUNT_ID:contact-notifications
```

### 5. Configurar variáveis de ambiente no Amplify
```
AWS Console → Amplify → App → Environment variables
Adicionar as mesmas 4 variáveis acima
```
Redeploy a aplicação após salvar.

### 6. (Opcional) Remover ou arquivar `app/pages/API/sendEmail.ts`
O endpoint legado não é mais chamado pelo formulário de contato. Pode ser removido se não for usado em outro lugar.
