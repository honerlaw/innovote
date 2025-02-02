"use client"

import { action } from "@/forms/organization/create/action/action"
import {
  ActionState,
  DEFAULT_STATE,
} from "@/forms/organization/create/action/constant"
import { useResetableActionState } from "@/utils/action/useResetableActionState"

export function useAction() {
  const [state, formAction, pending, reset] = useResetableActionState<
    ActionState,
    FormData
  >(action, DEFAULT_STATE)

  return {
    state,
    formAction,
    pending,
    reset,
  }
}
