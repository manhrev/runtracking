import { useState } from 'react'

export function useDialog<T>() {
  const [open, setOpen] = useState<boolean>(false)
  const [dataSelected, setData] = useState<T>()

  const handleToggleDialog = (value?: T) => {
    setOpen(!open)
    setData(value)
  }

  const toggleDialog = () => {
    setOpen(!open)
  }

  return { open, dataSelected, handleToggleDialog, toggleDialog }
}
