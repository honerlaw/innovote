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
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAction } from "@/forms/organization/create/action/useAction"
import { InputErrorMessage } from "@/components/common/InputErrorMessage"

export const ActionModal: React.FC = () => {
  const router = useRouter()
  const { open, setOpen } = useModalState(ModalName.CREATE_ORGANIZATION)
  const { state, formAction } = useAction()

  useEffect(() => {
    if (!state.success || !state.id) {
      return
    }

    if (!open) {
      return
    }

    // go to the organization page we just created
    router.replace(`/organization/${state.id}`)
  }, [state, router, open])

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <form action={formAction}>
        <ModalContent>
          <ModalTitle>Create organization</ModalTitle>
          <InputErrorMessage fieldName="form" errors={state.errors} />
          <TextInput
            id={"organization-name"}
            label="Name"
            placeholder="Enter the name of your organization."
            defaultValue={state.name}
            fieldName="name"
            errors={state.errors}
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
