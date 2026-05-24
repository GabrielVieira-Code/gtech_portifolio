'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  message: string
}

const INITIAL_STATE: FormState = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm]         = useState<FormState>(INITIAL_STATE)
  const [status, setStatus]     = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setFeedback(data.error ?? 'Algo deu errado.')
        setStatus('error')
        return
      }

      setStatus('success')
      setFeedback('Mensagem enviada com sucesso! Retorno em breve.')
      setForm(INITIAL_STATE)

    } catch {
      setStatus('error')
      setFeedback('Falha de conexão. Tente novamente.')
    }
  }

  const isLoading = status === 'loading'

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 w-full max-w-xl">

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          disabled={isLoading}
          placeholder="Seu nome"
          className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          disabled={isLoading}
          placeholder="seu@email.com"
          className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          disabled={isLoading}
          placeholder="Conta sobre seu projeto..."
          className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 resize-none"
        />
      </div>

      {feedback && (
        <p
          role="alert"
          className={`text-sm rounded-lg px-4 py-2.5 ${
            status === 'success'
              ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400'
          }`}
        >
          {feedback}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="self-start rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium px-6 py-2.5 transition-colors"
      >
        {isLoading ? 'Enviando...' : 'Enviar mensagem'}
      </button>

    </form>
  )
}
