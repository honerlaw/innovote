"use client"

import { Dropdown } from "@/components/common/Dropdown"
import { CreateOrganizationModal } from "@/forms/organization/create"
import { ModalName } from "@/constants"
import { useEffect, useMemo, useRef, useState } from "react"
import { selectOrgAction } from "@/components/Nav/NavOrganizationDropdown/action/selectOrgAction"

type OrgOption = {
  id: string
} & React.ComponentProps<typeof Dropdown>["options"][0]

type SelectOrganizationProps = {
  selected: {
    id: string
    title: string
  } | null
  options: OrgOption[]
}

export const SelectOrganization: React.FC<SelectOrganizationProps> = ({
  selected,
  options,
}) => {
  const form = useRef<HTMLFormElement>(null)
  const [id, setId] = useState<string | undefined>(selected?.id)

  const opts = useMemo(() => {
    const opts = [...options]
    opts.push({
      id: "-1",
      name: "+ Create organization",
      link: `?modal=${ModalName.CREATE_ORGANIZATION}`,
    })
    return opts
  }, [options])

  useEffect(() => {
    // whenever the pathname changes submit the form
    form.current?.requestSubmit()
  }, [id])

  const { selectedOrg, selectedOpts } = useMemo(() => {
    const selectedOrg = opts.find((opt) => opt.id === id)
    const selectedOpts = opts.filter((opt) => opt.id !== id)

    return {
      selectedOrg,
      selectedOpts,
    }
  }, [id, opts])

  return (
    <>
      <Dropdown
        title={selectedOrg?.name || "Select organization"}
        options={selectedOpts}
        onClick={(opt) => {
          const orgOpt = opt as OrgOption
          setId(orgOpt.id)
        }}
      />
      <CreateOrganizationModal />
      <form ref={form} hidden action={selectOrgAction}>
        <input type="hidden" name="organization-id" value={id} />
      </form>
    </>
  )
}
