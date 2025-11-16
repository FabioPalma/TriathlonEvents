import { listarEventosPorCategoria } from '@/lib/queries/eventos'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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
          <Link key={evento.id} href={`/evento/${evento.titulo.toLowerCase().replace(/\s+/g, '-')}/${evento.id}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border-1 border-black cursor-pointer">
            {evento.imagem_url && (
              <div className="relative h-48 w-full" style={{ minHeight: '192px' }}>
                <Image
                  src={evento.imagem_url}
                  alt={evento.titulo}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader className="p-4">
              <Badge variant="secondary" className="w-fit mb-2">
                Categoria {evento.categoria_id}
              </Badge>
              <CardTitle className="text-xl">{evento.titulo}</CardTitle>
              <CardDescription className="text-sm">{evento.descricao}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-sm text-muted-foreground space-y-1">
                <p>📅 {new Date(evento.data).toLocaleString()}</p>
                <p>📍 {evento.local}</p>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}