"use client"

import { Dropdown } from "@/components/common/Dropdown"
import { CreateOrganizationModal } from "@/forms/organization/create/CreateOrganizationModal"
import { ModalName } from "@/constants"
import { useParams, usePathname } from "next/navigation"
import { useMemo } from "react"

type SelectOrganizationProps = {
  options: React.ComponentProps<typeof Dropdown>["options"]
}

export const SelectOrganization: React.FC<SelectOrganizationProps> = ({
  options,
}) => {
  const params = useParams()
  const pathname = usePathname()

  const { opts, selected } = useMemo(() => {
    const id = pathname.indexOf("/organization/") === 0 ? params.id : null
    const selected = options.find(
      (option) => option.link === `/organization/${id}`,
    )
    const opts = options.filter(
      (option) => option.link !== `/organization/${id}`,
    )

    opts.push({
      name: "+ Create organization",
      link: `?modal=${ModalName.CREATE_ORGANIZATION}`,
    })

    return {
      opts,
      selected,
    }
  }, [params, pathname, options])

  return (
    <>
      <Dropdown
        title={selected?.name || "Select organization"}
        options={opts}
      />
      <CreateOrganizationModal />
    </>
  )
}
