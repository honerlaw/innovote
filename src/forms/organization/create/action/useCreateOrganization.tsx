"use client"

import { useActionState } from "react"
import { createOrganization } from "@/forms/organization/create/action/createOrganization"
import { CreateOrganizationState } from "@/forms/organization/create/action/state"

const INITIAL_STATE: CreateOrganizationState = {
  message: "",
  errors: null,

  name: "",

  id: null,
}

export function useCreateOrganization() {
  const [state, formAction, pending] = useActionState<
    CreateOrganizationState,
    FormData
  >(createOrganization, INITIAL_STATE)

  return {
    state,
    formAction,
    pending,
  }
}
