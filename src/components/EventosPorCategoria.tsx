import { listarEventosPorCategoria } from '@/lib/queries/eventos'
import Image from 'next/image'

interface EventosPorCategoriaProps {
  titulo: string
  categoriaId: number
}

export default async function EventosPorCategoria({ titulo, categoriaId }: EventosPorCategoriaProps) {
  const eventos = await listarEventosPorCategoria(categoriaId)

  return (
    <section className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">{titulo}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {eventos.map((evento) => (
          <div
            key={evento.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {evento.imagem_url && (
              <div className="relative h-48 w-full">
                <Image
                  src={evento.imagem_url}
                  alt={evento.titulo}
                  height={100}
                  width={300}
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-4">
              <p className="text-xs uppercase text-blue-600 font-medium mt-2">
                {evento.categoria_id}
              </p>
              <h2 className="text-xl font-semibold text-gray-800">{evento.titulo}</h2>
              <p className="text-gray-600 text-sm mt-1">{evento.descricao}</p>
              <div className="mt-3 text-sm text-gray-500">
                📅 {new Date(evento.data).toLocaleString()}<br />
                📍 {evento.local}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}