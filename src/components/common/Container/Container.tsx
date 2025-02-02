type ContainerProps = React.PropsWithChildren

export function Container({ children }: ContainerProps) {
  return (
    <div className="ph-12 flex justify-center">
      <div className="lg:w-4xl w-full px-6">{children}</div>
    </div>
  )
}
