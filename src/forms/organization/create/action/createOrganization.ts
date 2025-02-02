"use server"

import { CreateOrganizationInput } from "@/forms/organization/create/action/schema"
import { CreateOrganizationState } from "@/forms/organization/create/action/state"

export async function createOrganization(
  prevState: CreateOrganizationState,
  formData: FormData,
): Promise<CreateOrganizationState> {
  const validated = CreateOrganizationInput.safeParse({
    name: formData.get("organization-name"),
  })

  if (!validated.success) {
    return {
      name: (formData.get("organization-name") as string) || "",
      message: "Failed.",
      errors: validated.error.flatten().fieldErrors,
      id: null,
    }
  }

  // @todo the actual creation of the organization would happen here

  return {
    message: "Success.",
    errors: null,
    name: validated.data.name,
    id: null,
  }
}
