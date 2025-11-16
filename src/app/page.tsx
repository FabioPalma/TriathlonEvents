// app/page.tsx
import EventosPorCategoria from '@/components/EventosPorCategoria'


export default async function HomePage() {
  return (
    <>
    <EventosPorCategoria titulo="Corrida" categoriaId={1} />
    <EventosPorCategoria titulo="Ciclismo" categoriaId={2} />
    </>
    
  )
}