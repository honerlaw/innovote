"use client"

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

/**
 * We use query params in order to denote what modal to open based on the name of the modal
 * This allows us to render the original content as RSC (e.g. the dropdown, or button, etc)
 * but still allows us to create an interactive modal once the browser is ready
 */
export function useModalState(modalName: string) {
  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const modal = params.get("modal")
  const [open, setOpen] = useState(modal === modalName)

  useEffect(() => {
    if (modal === modalName) {
      setOpen(true)
    }

    // the modal was closed by some other mechanism
    if (modal === null) {
      setOpen(false)
    }
  }, [modalName, modal])

  const updateOpen = (open: boolean) => {
    const p = new URLSearchParams(params)
    p.delete("modal")
    const searchParams = p.toString()

    const path = `${pathname}${searchParams ? `?${searchParams}` : ""}`
    router.replace(path)

    setOpen(open)
  }

  return {
    open,
    setOpen: updateOpen,
  }
}
