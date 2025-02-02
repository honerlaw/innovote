"use client"

import { action } from "@/forms/event/create/action/action"
import {
  ActionState,
  getDefaultState,
} from "@/forms/event/create/action/constant"
import { useResetableActionState } from "@/utils/action/useResetableActionState"

export function useAction(orgId: string) {
  const [state, formAction, pending, reset] = useResetableActionState<
    ActionState,
    FormData
  >(action, getDefaultState({ orgId }))

  return {
    state,
    formAction,
    pending,
    reset,
  }
}
