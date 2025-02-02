type CardContentProps = React.PropsWithChildren

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return (
    <div className="h-24 bg-gray-200 p-4 flex items-center justify-center">
      {children}
    </div>
  )
}
