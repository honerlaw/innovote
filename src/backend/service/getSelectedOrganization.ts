import { select } from "@/backend/database/organization/select"
import { getUser } from "@/backend/service/getUser"

/**
 * Will fetch the selected organization and if it fails
 * attempt to update the selected org to a default one
 */
export async function getSelectedOrganization() {
  const user = await getUser()
  if (!user) {
    return null
  }
  if (user.selectedOrganization) {
    return {
      id: user.selectedOrganization.id,
      title: user.selectedOrganization.title,
    }
  }

  const org = await select(id || user.roles[0].organization.id, user.id)
  if (!org) {
    return {
      id: user.roles[0].organization.id,
      title: user.roles[0].organization.title,
    }
  }

  return {
    id: org.id,
    title: org.id,
  }
}
