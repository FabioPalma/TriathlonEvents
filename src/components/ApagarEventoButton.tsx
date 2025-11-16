'use client'

import { Button } from '@/components/ui/button'
import { apagarEvento } from '@/lib/actions/eventos'
import { Trash2 } from 'lucide-react'

interface ApagarEventoButtonProps {
  id: number
  titulo: string
}

export function ApagarEventoButton({ id, titulo }: ApagarEventoButtonProps) {
  const handleClick = async () => {
    if (confirm(`Tem certeza que deseja apagar o evento "${titulo}"?`)) {
      await apagarEvento(id)
    }
  }

  return (
    <Button variant="destructive" size="sm" onClick={handleClick} className="flex items-center gap-2">
      <Trash2 className="h-3 w-3" />
      Apagar
    </Button>
  )
}
