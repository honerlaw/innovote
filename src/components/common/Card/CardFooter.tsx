type CardFooterProps = React.PropsWithChildren

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <div className="py-4 px-2">{children}</div>
}
