"use server"

import { selectOrganization } from "@/backend/service/selectOrganization"

export async function selectOrgAction(formData: FormData) {
  const orgId = formData.get("organization-id")
  if (typeof orgId !== "string") {
    return
  }
  await selectOrganization(orgId)
}
