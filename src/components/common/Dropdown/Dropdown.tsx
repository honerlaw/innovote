"use client"

import { Menu, MenuItem, MenuItems } from "@headlessui/react"
import Link from "next/link"
import { DropdownButton } from "@/components/common/Dropdown/DropdownTitle"

type Option = {
  link: string
  name: string
}

type DropdownProps = {
  title: string | React.ReactNode
  options: Option[]
  onClick?: (opt: Option) => void
}

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  options,
  onClick,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <DropdownButton>{title}</DropdownButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {options.map((opt) => {
            return (
              <MenuItem key={opt.name}>
                <Link
                  href={opt.link}
                  onClick={() => onClick?.(opt)}
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  {opt.name}
                </Link>
              </MenuItem>
            )
          })}
        </div>
      </MenuItems>
    </Menu>
  )
}
