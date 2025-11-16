// lib/queries/eventos.ts
import { query } from '../db'

export type Evento = {
  id: number
  titulo: string
  descricao: string
  data: string
  local: string
  imagem_url: string | null
  categoria_id: number
}

export async function listarEventos(): Promise<Evento[]> {
  return await query<Evento>(`
    SELECT
      e.id, e.titulo, e.descricao, e.data, e.local, e.imagem_url,
      c.id AS categoria_id
    FROM eventos e
    LEFT JOIN categorias c ON e.categoria_id = c.id
    ORDER BY e.data ASC
  `)
}

export async function listarTodosEventos(): Promise<Evento[]> {
  return await query<Evento>(`
    SELECT
      e.id, e.titulo, e.descricao, e.data, e.local, e.imagem_url, e.categoria_id
    FROM eventos e
    ORDER BY e.id DESC
  `)
}

export async function buscarEventoPorId(id: number): Promise<Evento | null> {
  const res = await query<Evento>('SELECT * FROM eventos WHERE id = $1', [id])
  return res[0] ?? null
}

export async function criarEvento(dados: {
  titulo: string
  descricao: string
  data: string
  local: string
}) {
  const { titulo, descricao, data, local } = dados
  await query(
    'INSERT INTO eventos (titulo, descricao, data, local) VALUES ($1, $2, $3, $4)',
    [titulo, descricao, data, local]
  )
}

export async function listarEventosPorCategoria(categoriaId?: number): Promise<Evento[]> {
  if (!categoriaId) {
    return listarEventos()
  }

  return await query<Evento>(
    `
    SELECT 
      e.id, e.titulo, e.descricao, e.data, e.local, e.imagem_url,
      c.nome AS categoria_nome
    FROM eventos e
    JOIN categorias c ON e.categoria_id = c.id
    WHERE c.id = $1
    ORDER BY e.data ASC
    `,
    [categoriaId]
  )
}