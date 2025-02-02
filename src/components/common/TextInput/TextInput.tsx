"use client"

import React from "react"
import c from "classnames"

type TextInputProps = {
  icon?: string
  id: string
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  className,
  icon,
  ...rest
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm/6 font-semibold text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          {icon && (
            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              {icon}
            </div>
          )}
          <input
            id={id}
            name={id}
            type="text"
            {...rest}
            className={c(
              "block min-w-0 grow py-3 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6",
              className,
            )}
          />
        </div>
      </div>
    </div>
  )
}
