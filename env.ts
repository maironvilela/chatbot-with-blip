import { z } from 'zod'

const envSchema = z.object({
  VITE_BLIP_API_URL: z.string().url(),
  VITE_BLIP_API_KEY: z
    .string()
    .min(1, 'Campo Obrigatório')
    .regex(/^Key\s[a-zA-Z0-9:]+$/, 'Chave Inválida'),
})

const parsedEnv = envSchema.safeParse(import.meta.env)

if (!parsedEnv.success) {
  console.error('Variáveis de ambiente inválidas:', parsedEnv.error.format())
  throw new Error('Configuração de ambiente inválida')
}

export const env = parsedEnv.data
