type ModalContentProps = React.PropsWithChildren

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">{children}</div>
  )
}
