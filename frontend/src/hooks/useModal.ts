import { useState } from 'react'

export function useModal<T>() {
  const [open, setOpen] = useState<boolean>(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return { modalVisible: open, openModal, closeModal }
}
