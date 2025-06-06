// src/app/login/page.tsx
'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background text-foreground px-4">
      {/* Botão de tema */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Formulário */}
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-md border border-border">
        <h1 className="text-2xl font-bold mb-6 text-center">Entrar no Painel</h1>
        <form className="space-y-4">
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Senha" required />
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </div>
    </main>
  )
}
