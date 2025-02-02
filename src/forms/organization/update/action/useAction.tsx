"use client"

import { action } from "@/forms/organization/update/action/action"
import {
  ActionState,
  getInitialState,
} from "@/forms/organization/update/action/constant"
import { useResetableActionState } from "@/utils/action/useResetableActionState"

export function useAction(id: string, name: string) {
  const [state, formAction, pending, reset] = useResetableActionState<
    ActionState,
    FormData
  >(
    action,
    getInitialState({
      name,
      id,
    }),
  )

  return {
    state,
    formAction,
    pending,
    reset,
  }
}
