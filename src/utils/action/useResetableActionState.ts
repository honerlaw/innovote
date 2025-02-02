"use client"

import { useActionState, useTransition } from "react"

export function useResetableActionState<State, Payload>(
  action: (state: Awaited<State>, payload: Payload) => State | Promise<State>,
  initialState: Awaited<State>,
  permalink?: string,
): [
  state: Awaited<State>,
  dispatch: (payload: Payload | null) => void,
  isPending: boolean,
  reset: () => void,
] {
  const [isResetPending, startTransition] = useTransition()

  const [state, submit, isPending] = useActionState(
    async (state: Awaited<State>, payload: Payload | null) => {
      if (!payload) {
        return initialState
      }
      const data = await action(state, payload)
      return data
    },
    initialState,
    permalink,
  )

  const reset = () => {
    startTransition(async () => {
      submit(null)
    })
  }

  return [state, submit, isPending || isResetPending, reset]
}
