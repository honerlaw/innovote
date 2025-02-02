"use server"

import { ActionInput, ActionState } from "@/forms/event/create/action/constant"
import { parse } from "@/utils/date"
import { createEvent } from "@/backend/service/createEvent"

export async function action(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const validated = ActionInput.safeParse({
    name: formData.get("event-name"),
    startDate: formData.get("event-start-date"),
    endDate: formData.get("event-end-date"),
    maxVotes: formData.get("event-max-votes"),
  })

  if (!validated.success) {
    return {
      success: false,
      message: "Failed.",
      errors: validated.error.flatten().fieldErrors,
      name: (formData.get("event-name") as string) || "",
      startDate: parse(formData.get("event-start-date")),
      endDate: parse(formData.get("event-end-date")),
      maxVotes: parseInt((formData.get("event-max-votes") as string) || "1"),
      orgId: prevState.orgId,
      id: null,
    }
  }

  const event = await createEvent({
    name: validated.data.name,
    startDate: validated.data.startDate,
    endDate: validated.data.endDate,
    maxVotes: validated.data.maxVotes,
    orgId: prevState.orgId,
  })

  return {
    success: true,
    message: "Success.",
    errors: null,
    name: validated.data.name,
    startDate: validated.data.startDate,
    endDate: validated.data.endDate,
    maxVotes: validated.data.maxVotes,
    orgId: prevState.orgId,
    id: event?.id || null,
  }
}
