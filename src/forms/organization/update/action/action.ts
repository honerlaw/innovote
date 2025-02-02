"use server"

import { updateOrganization } from "@/backend/service/updateOrganization"
import {
  ActionInput,
  ActionState,
} from "@/forms/organization/update/action/constant"

export async function action(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const validated = ActionInput.safeParse({
    name: formData.get("organization-name"),
  })

  if (!validated.success) {
    return {
      success: false,
      name: (formData.get("organization-name") as string) || "",
      message: "Failed.",
      errors: validated.error.flatten().fieldErrors,
      id: prevState.id,
    }
  }

  const org = await updateOrganization(prevState.id, validated.data.name)

  if (!org) {
    return {
      success: false,
      message: "Failed.",
      errors: {
        form: ["Failed to update organization."],
      },
      name: validated.data.name,
      id: prevState.id,
    }
  }

  return {
    success: true,
    message: "Success.",
    errors: null,
    name: validated.data.name,
    id: prevState.id,
  }
}
