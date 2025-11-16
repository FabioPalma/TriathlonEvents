import { buscarEventoPorId } from '@/lib/queries/eventos'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { notFound } from 'next/navigation'

interface EventoPageProps {
  params: Promise<{
    slug: string
    id: string
  }>
}

export default async function EventoPage({ params }: EventoPageProps) {
  const { id } = await params
  const evento = await buscarEventoPorId(parseInt(id))

  if (!evento) {
    notFound()
  }

  return (
      <div className="max-w-6xl mx-auto">
        <Link href="/">
          <Button variant="outline" className="mb-6">
            ← Voltar
          </Button>
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
          {/* Coluna 1: Imagem */}
          {evento.imagem_url && (
            <div className="relative rounded-xl overflow-hidden bg-gray-100" style={{ height: '300px' }}>
              <Image
                src={evento.imagem_url}
                alt={evento.titulo}
                fill
                sizes="33vw"
                className="object-contain"
                priority
              />
            </div>
          )}

          {/* Coluna 2: Informações */}
          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">
                  Categoria {evento.categoria_id}
                </Badge>
              </div>
              <CardTitle className="text-4xl">{evento.titulo}</CardTitle>
              <CardDescription className="text-lg mt-2">
                {evento.descricao}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Data</h3>
                    <p className="text-lg">{new Date(evento.data).toLocaleString('pt-PT', {
                      dateStyle: 'full',
                      timeStyle: 'short'
                    })}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Local</h3>
                    <p className="text-lg">{evento.local}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t">
                <h3 className="font-semibold text-xl">Sobre o Evento</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t">
                <Button size="lg" className="w-full">
                  Inscrever-se no Evento
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}
