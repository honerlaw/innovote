import {
  BaseActionState,
  INITIAL_BASE_ACTION_STATE,
} from "@/utils/action/baseAction"
import { z } from "zod"

export const ActionInput = z.object({
  name: z.string().nonempty(),
})

export type ActionInputType = z.infer<typeof ActionInput>

export type ActionState = BaseActionState & {
  // the actual values in the form
  name: string
  id: string
}

export const getInitialState = (state: Partial<ActionState>): ActionState => {
  return {
    ...INITIAL_BASE_ACTION_STATE,

    // defaults
    name: "",
    id: "",

    // overrides
    ...state,
  }
}
