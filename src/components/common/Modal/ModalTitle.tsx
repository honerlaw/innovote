import { DialogTitle } from "@headlessui/react"

type ModalTitleProps = React.PropsWithChildren

export const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
  return (
    <DialogTitle as="h1" className="text-xl font-bold text-gray-900 mb-3">
      {children}
    </DialogTitle>
  )
}
