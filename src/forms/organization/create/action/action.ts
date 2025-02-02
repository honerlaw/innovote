"use server"

import { createOrganization } from "@/backend/service/createOrganization"
import {
  ActionInput,
  ActionState,
} from "@/forms/organization/create/action/constant"

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
      id: null,
    }
  }

  const org = await createOrganization(validated.data.name)

  if (!org) {
    return {
      success: false,
      message: "Failed.",
      errors: {
        form: ["Failed to create organization."],
      },
      name: validated.data.name,
      id: null,
    }
  }

  return {
    success: true,
    message: "Success.",
    errors: null,
    name: validated.data.name,
    id: org.id,
  }
}
