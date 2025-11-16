import { listarTodosEventos } from '@/lib/queries/eventos'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ApagarEventoButton } from '@/components/ApagarEventoButton'
import { PlusCircle, Pencil } from 'lucide-react'

export default async function AdminEventosPage() {
  const eventos = await listarTodosEventos()

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gestão de Eventos</h1>
            <p className="text-gray-600 mt-2">Criar, editar e apagar eventos</p>
          </div>
          <Button asChild>
            <Link href="/admin/eventos/novo" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Criar Novo Evento
            </Link>
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="border-b">
            <CardTitle className="text-2xl">Todos os Eventos</CardTitle>
            <CardDescription>
              Lista completa de eventos cadastrados no sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 hover:bg-gray-50">
                    <TableHead className="font-bold text-gray-700">ID</TableHead>
                    <TableHead className="font-bold text-gray-700">Título</TableHead>
                    <TableHead className="font-bold text-gray-700">Categoria</TableHead>
                    <TableHead className="font-bold text-gray-700">Data</TableHead>
                    <TableHead className="font-bold text-gray-700">Local</TableHead>
                    <TableHead className="font-bold text-gray-700">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {eventos.map((evento, index) => (
                    <TableRow
                      key={evento.id}
                      className={`
                        transition-colors hover:bg-blue-50/50
                        ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                      `}
                    >
                      <TableCell className="font-semibold text-gray-900">
                        {evento.id}
                      </TableCell>
                      <TableCell className="font-medium text-gray-800">
                        {evento.titulo}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="font-medium">
                          Categoria {evento.categoria_id}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {new Date(evento.data).toLocaleDateString('pt-PT', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {evento.local}
                      </TableCell>
                      <TableCell className="">
                        <div className="flex justify-start gap-2">
                          <Button variant="outline" size="sm" asChild className="hover:bg-blue-50">
                            <Link href={`/admin/eventos/${evento.id}/editar`} className="flex items-center gap-2">
                              <Pencil className="h-3 w-3" />
                              Editar
                            </Link>
                          </Button>
                          <ApagarEventoButton id={evento.id} titulo={evento.titulo} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
