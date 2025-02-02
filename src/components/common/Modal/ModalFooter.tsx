type ModalFooterProps = React.PropsWithChildren

export const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse px-6 gap-4">
      {children}
    </div>
  )
}
