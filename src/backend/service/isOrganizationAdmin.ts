import { currentUser } from "@clerk/nextjs/server"
import { getByIdForAdmin } from "@/backend/database/organization/getByIdForAdmin"

export async function isOrganizationAdmin(
  organizationId: string,
): Promise<boolean> {
  const user = await currentUser()

  if (!user) {
    return false
  }

  const org = await getByIdForAdmin(organizationId, user.id)
  if (!org) {
    return false
  }

  return true
}
