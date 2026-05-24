# Arquitetura — Portfólio GTECH

## 1. Visão Geral

O GTECH Portfolio é um site de portfólio profissional construído com Next.js 14 (App Router). Ele serve dois propósitos principais:

1. **Portfólio:** Apresenta casos de sucesso, serviços e a identidade da empresa GTECH.
2. **Captação de clientes:** Formulário de contato integrado ao AWS SNS, que envia notificações por e-mail em tempo real sempre que um visitante submete uma mensagem.

---

## 2. Estrutura de Pastas

```
app/
├── api/
│   └── contact/
│       └── route.ts          # API Route: recebe POST e publica no SNS
├── components/
│   ├── nav.tsx               # Navbar global (usada em todas as páginas)
│   └── footer.tsx            # Footer global
├── pages/
│   ├── cases/
│   │   └── page.tsx          # Página de casos de sucesso
│   └── contact/
│       ├── components/
│       │   └── ContactForm.tsx  # Componente do formulário SNS
│       └── page.tsx          # Página de contato (usa ContactForm)
├── globals.css               # Estilos globais + configuração de fonte (Raleway)
├── layout.tsx                # Layout raiz: fonte, metadata, estrutura HTML
├── page.tsx                  # Página inicial (Home)
└── .env                      # Variáveis de ambiente de build (não credenciais)

docs/
├── ARCHITECTURE.md           # Este arquivo
└── CHANGES.md                # Histórico de alterações da sessão SNS

.env.local                    # Credenciais locais (ignorado pelo git)
.env.local.example            # Template de variáveis de ambiente
```

---

## 3. Fluxo de Hospedagem

```
Usuário
  │
  ▼
CloudFront (CDN)
  │  • Cache de assets estáticos (JS, CSS, imagens)
  │  • Distribuição global via edge locations
  │  • HTTPS automático com certificado ACM
  ▼
AWS Amplify
  │  • Hospedagem gerenciada do Next.js
  │  • Deploy automático a cada push no GitHub (branch master)
  │  • SSR executado em Lambda@Edge ou Compute (dependendo da config)
  │  • Variáveis de ambiente injetadas em build/runtime
  ▼
Next.js App (SSR + API Routes)
  │  • Renderização server-side das páginas
  │  • API Routes executadas como funções serverless
  └──► /api/contact → AWS SNS → E-mail para o dono do portfólio
```

### Estimativa de custo (tráfego baixo — portfólio pessoal)

| Serviço        | Custo estimado/mês |
|----------------|--------------------|
| Amplify Hosting | ~$0–5 (free tier cobre bastante) |
| CloudFront     | ~$0 (1 TB free tier) |
| SNS            | ~$0 (primeiros 1.000 e-mails grátis) |
| **Total**      | **~$0–5/mês** |

---

## 4. Fluxo do Formulário de Contato

```
1. Usuário preenche o formulário (nome, e-mail, mensagem)
        │
        ▼
2. ContactForm.tsx chama fetch('/api/contact', { method: 'POST', body: JSON })
        │
        ▼
3. app/api/contact/route.ts recebe o NextRequest
        │
        ├─► validate() — verifica campos obrigatórios, formato de e-mail,
        │                 tamanho mínimo da mensagem
        │                 → retorna HTTP 400 + mensagem de erro se inválido
        │
        ├─► buildMessage() — formata o texto da notificação com timestamp
        │
        └─► SNSClient.send(PublishCommand) — publica no tópico SNS
                │
                ▼
4. AWS SNS entrega a mensagem para todas as subscrições do tópico
   (ex: e-mail cadastrado → caixa de entrada do dono do portfólio)
        │
        ▼
5. API retorna { success: true } HTTP 200
        │
        ▼
6. ContactForm atualiza estado → exibe feedback verde ao usuário
```

---

## 5. Descrição de Cada Arquivo Criado/Modificado

### `app/api/contact/route.ts`
- **Função:** Handler HTTP da rota `/api/contact`
- **Responsabilidades:** Validação de entrada, construção da mensagem, publicação no SNS
- **Exports:** `POST` (principal), `GET` (retorna 405)
- **Pontos de extensão:** Adicionar rate limiting, salvar leads em banco de dados, integrar com CRM

### `app/pages/contact/components/ContactForm.tsx`
- **Função:** Componente React client-side para o formulário de contato
- **Responsabilidades:** Gerenciar estado do formulário, chamar a API, exibir feedback
- **Estado interno:** `form` (campos), `status` (idle/loading/success/error), `feedback` (mensagem)
- **Pontos de extensão:** Adicionar campo de assunto, validação client-side mais robusta (zod), honeypot anti-spam

### `app/pages/contact/page.tsx` (modificado)
- **O que mudou:** Import de `ContactForm`, seção adicional com `<ContactForm />`, `handleSubmit` redirecionado para `/api/contact`
- **O que foi preservado:** Todo o layout visual, o formulário customizado existente, o modal de confirmação, os ícones e a imagem ilustrativa

---

## 6. Variáveis de Ambiente

| Variável | Descrição | Onde obter |
|----------|-----------|------------|
| `AWS_REGION` | Região AWS onde o tópico SNS foi criado | Ex: `us-east-1` |
| `AWS_ACCESS_KEY_ID` | ID da chave de acesso do IAM User | AWS Console → IAM → Users → Security credentials |
| `AWS_SECRET_ACCESS_KEY` | Chave secreta do IAM User | Gerada junto com o Access Key ID (só aparece uma vez) |
| `SNS_TOPIC_ARN` | ARN completo do tópico SNS | AWS Console → SNS → Topics → (nome do tópico) |

> **Segurança:** O IAM User deve ter apenas a permissão `sns:Publish` restrita ao ARN do tópico específico (princípio do menor privilégio).

---

## 7. Como Rodar Localmente

### Pré-requisitos
- Node.js 18+
- npm 9+
- Conta AWS com tópico SNS configurado (ou use um mock local)

### Instalação
```bash
git clone <repo-url>
cd gtech_portifolio
npm install
```

### Configurar variáveis de ambiente
```bash
cp .env.local.example .env.local
# Edite .env.local com suas credenciais AWS reais
```

### Iniciar o servidor de desenvolvimento
```bash
npm run dev
# Acesse http://localhost:3000
```

---

## 8. Como Fazer Deploy

O deploy é automático via integração GitHub + AWS Amplify:

```
1. git add -A && git commit -m "sua mensagem"
2. git push origin master
       │
       ▼
3. Amplify detecta o push e inicia o build automaticamente
       │
       ▼
4. Build: npm run build (Next.js gera os artefatos)
       │
       ▼
5. Deploy: Amplify publica a nova versão
       │
       ▼
6. CloudFront invalida o cache e serve a nova versão globalmente
```

> **Importante:** As variáveis de ambiente do `.env.local` NÃO são enviadas ao Amplify automaticamente. Configure-as manualmente em: AWS Console → Amplify → App → Environment variables.
