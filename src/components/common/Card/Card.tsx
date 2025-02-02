"use client"

import Link from "next/link"

type CardProps = React.PropsWithChildren<{
  link?: string
  onClick?: () => void
}>

export const Card: React.FC<CardProps> = ({ link, onClick, children }) => {
  if (link) {
    return <Link href={""}>{children}</Link>
  }

  return (
    <button
      className="bg-white rounded-md shadow-md border border-gray-200 overflow-hidden"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
