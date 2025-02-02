import { MenuButton } from "@headlessui/react"
import React from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

type DropdownButtonProps = React.PropsWithChildren

export const DropdownButton: React.FC<DropdownButtonProps> = ({ children }) => {
  if (typeof children !== "string") {
    return (
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold ring-1 shadow-xs ring-gray-300 ring-inset text-gray-900 hover:bg-gray-50">
        {children}
      </MenuButton>
    )
  }

  return (
    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
      {children}
      <ChevronDownIcon
        aria-hidden="true"
        className="-mr-1 size-5 text-gray-400"
      />
    </MenuButton>
  )
}
