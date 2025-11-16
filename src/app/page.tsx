// app/page.tsx
import EventosPorCategoria from '@/components/EventosPorCategoria'


export default async function HomePage() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
    <EventosPorCategoria titulo="Corrida" categoriaId={1} />
    <EventosPorCategoria titulo="Ciclismo" categoriaId={2} />

    </main>
  )
}