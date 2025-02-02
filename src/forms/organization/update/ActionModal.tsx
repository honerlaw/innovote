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
import { useAction } from "@/forms/organization/update/action/useAction"
import { InputErrorMessage } from "@/components/common/InputErrorMessage"

type ActionModalProps = {
  id: string
  name: string
}

export const ActionModal: React.FC<ActionModalProps> = ({ id, name }) => {
  const { open, setOpen } = useModalState(ModalName.UPDATE_ORGANIZATION)
  const { state, formAction, reset } = useAction(id, name)

  useEffect(() => {
    if (!state.success || !open) {
      return
    }

    setOpen(false)

    // reset the form action state
    reset()
  }, [state, open, setOpen, reset])

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <form action={formAction}>
        <ModalContent>
          <ModalTitle>Update organization</ModalTitle>
          <InputErrorMessage fieldName="form" errors={state.errors} />
          <TextInput
            id={"organization-name"}
            label="Name"
            placeholder="Enter the new name of your organization."
            defaultValue={state.name}
            fieldName="name"
            errors={state.errors}
          />
        </ModalContent>
        <ModalFooter>
          <Button type="submit" variant="primary">
            Update
          </Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}
