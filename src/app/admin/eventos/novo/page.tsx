import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { criarEvento } from '@/lib/actions/eventos'

export default function NovoEventoPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/admin/eventos">
            <Button variant="outline">← Voltar</Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Criar Novo Evento</CardTitle>
            <CardDescription>
              Preencha os campos abaixo para adicionar um novo evento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={criarEvento} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="titulo">Título</Label>
                <Input
                  id="titulo"
                  name="titulo"
                  placeholder="Nome do evento"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="descricao">Descrição</Label>
                <Textarea
                  id="descricao"
                  name="descricao"
                  placeholder="Descrição do evento"
                  required
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="data">Data e Hora</Label>
                  <Input
                    id="data"
                    name="data"
                    type="datetime-local"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="categoria_id">Categoria</Label>
                  <Input
                    id="categoria_id"
                    name="categoria_id"
                    type="number"
                    placeholder="ID da categoria"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="local">Local</Label>
                <Input
                  id="local"
                  name="local"
                  placeholder="Local do evento"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imagem_url">URL da Imagem</Label>
                <Input
                  id="imagem_url"
                  name="imagem_url"
                  type="url"
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Criar Evento
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/admin/eventos">Cancelar</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
