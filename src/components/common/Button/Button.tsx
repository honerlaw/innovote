"use client"

import React from "react"
import c from "classnames"
import { Button as HButton } from "@headlessui/react"

type ButtonProps = React.PropsWithChildren<
  {
    variant?: keyof typeof CLASSES
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>

const CLASSES = {
  basic: "bg-white text-gray-900 ring-gray-300 hover:bg-gray-50",
  destroy: "bg-red-600 text-white ring-red-300 hover:bg-red-500",
  primary: "bg-blue-600 text-white ring-blue-300 hover:bg-blue-500",
}

export const Button: React.FC<ButtonProps> = ({
  variant = "basic",
  children,
  ...rest
}) => {
  return (
    <HButton
      className={c(
        "inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs ring-1 ring-inset sm:mt-0 sm:w-auto",
        CLASSES[variant],
      )}
      {...rest}
    >
      {children}
    </HButton>
  )
}
