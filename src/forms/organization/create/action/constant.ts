import {
  BaseActionState,
  INITIAL_BASE_ACTION_STATE,
} from "@/utils/action/baseAction"

import { z } from "zod"

export const ActionInput = z.object({
  name: z.string().nonempty({
    message: "Organization name is required.",
  }),
})

export type ActionInputType = z.infer<typeof ActionInput>

export type ActionState = BaseActionState & {
  // the actual values in the form
  name: string

  // the id of the created organization
  id: string | null
}

export const DEFAULT_STATE: ActionState = {
  ...INITIAL_BASE_ACTION_STATE,
  name: "",
  id: null,
}
