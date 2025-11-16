'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { query } from '../db'

export async function criarEvento(formData: FormData) {
  const titulo = formData.get('titulo') as string
  const descricao = formData.get('descricao') as string
  const data = formData.get('data') as string
  const local = formData.get('local') as string
  const categoria_id = parseInt(formData.get('categoria_id') as string)
  const imagem_url = formData.get('imagem_url') as string

  await query(
    `INSERT INTO eventos (titulo, descricao, data, local, categoria_id, imagem_url)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [titulo, descricao, data, local, categoria_id, imagem_url || null]
  )

  revalidatePath('/admin/eventos')
  redirect('/admin/eventos')
}

export async function editarEvento(id: number, formData: FormData) {
  const titulo = formData.get('titulo') as string
  const descricao = formData.get('descricao') as string
  const data = formData.get('data') as string
  const local = formData.get('local') as string
  const categoria_id = parseInt(formData.get('categoria_id') as string)
  const imagem_url = formData.get('imagem_url') as string

  await query(
    `UPDATE eventos
     SET titulo = $1, descricao = $2, data = $3, local = $4, categoria_id = $5, imagem_url = $6
     WHERE id = $7`,
    [titulo, descricao, data, local, categoria_id, imagem_url || null, id]
  )

  revalidatePath('/admin/eventos')
  revalidatePath(`/evento/${titulo.toLowerCase().replace(/\s+/g, '-')}/${id}`)
  redirect('/admin/eventos')
}

export async function apagarEvento(id: number) {
  await query('DELETE FROM eventos WHERE id = $1', [id])

  revalidatePath('/admin/eventos')
  revalidatePath('/')
}
