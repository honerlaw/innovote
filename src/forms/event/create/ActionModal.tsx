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
import { InputErrorMessage } from "@/components/common/InputErrorMessage"
import { useAction } from "@/forms/event/create/action/useAction"
import { format } from "@/utils/date"

type ActionModalProps = {
  orgId: string
}

export const ActionModal: React.FC<ActionModalProps> = ({ orgId }) => {
  const router = useRouter()
  const { open, setOpen } = useModalState(ModalName.CREATE_EVENT)
  const { state, formAction } = useAction(orgId)

  useEffect(() => {
    if (!state.success || !state.id || !open) {
      return
    }

    router.replace(`/organization/event/${state.id}`)
  }, [state, router, open])

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <form action={formAction}>
        <ModalContent>
          <ModalTitle>Create event</ModalTitle>
          <InputErrorMessage fieldName="form" errors={state.errors} />
          <div className="flex flex-col gap-4">
            <TextInput
              id={"event-name"}
              label="Name"
              placeholder="Enter the name of your event."
              defaultValue={state.name}
              fieldName="name"
              errors={state.errors}
            />
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                type="date"
                id={"event-start-date"}
                label="Start date"
                defaultValue={format(state.startDate)}
                fieldName={"startDate"}
                errors={state.errors}
              />
              <TextInput
                type="date"
                id={"event-end-date"}
                label="End date"
                defaultValue={format(state.endDate)}
                fieldName="endDate"
                errors={state.errors}
              />
            </div>
            <TextInput
              type="number"
              id={"event-max-votes"}
              label="Max votes"
              defaultValue={state.maxVotes}
              fieldName="maxVotes"
              errors={state.errors}
            />
          </div>
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
