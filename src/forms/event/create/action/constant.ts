import {
  BaseActionState,
  INITIAL_BASE_ACTION_STATE,
} from "@/utils/action/baseAction"
import { addDays } from "date-fns"

import { z } from "zod"

export const ActionInput = z.object({
  name: z.string().nonempty({
    message: "Name is required.",
  }),
  startDate: z.coerce.date({
    message: "Start date is required.",
  }),
  endDate: z.coerce.date({
    message: "End date is required.",
  }),
  maxVotes: z.coerce.number({
    message: "Max votes is required.",
  }),
})

export type ActionInputType = z.infer<typeof ActionInput>

export type ActionState = BaseActionState &
  ActionInputType & {
    orgId: string
    id: string | null
  }

export const getDefaultState = (
  state: Partial<ActionState> = {},
): ActionState => {
  return {
    ...INITIAL_BASE_ACTION_STATE,
    name: "",
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    maxVotes: 3,
    orgId: "",
    id: null,

    ...state,
  }
}
