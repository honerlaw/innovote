"use client"

import { ModalName } from "@/constants"
import { Button } from "@/components/common/Button"
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  useModalState,
} from "@/components/common/Modal"
import { TextInput } from "@/components/common/TextInput"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCreateOrganization } from "@/forms/organization/create/action/useCreateOrganization"

export const CreateOrganizationModal: React.FC = () => {
  const router = useRouter()
  const { open, setOpen } = useModalState(ModalName.CREATE_ORGANIZATION)
  const { state, formAction } = useCreateOrganization()

  useEffect(() => {
    console.log(state)
    if (state.errors !== null || state.id === null) {
      return
    }

    // go to the organization page we just created
    router.replace(`/organizations/${state.id}`)
  }, [state, router])

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <form action={formAction}>
        <ModalContent>
          <ModalTitle>Create organization</ModalTitle>
          <TextInput
            id={"organization-name"}
            label="Name"
            placeholder="Enter the name of your organization."
            defaultValue={state.name}
          />
        </ModalContent>
        <ModalFooter>
          <Button type="submit" variant="primary">
            Create
          </Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}
