import { currentUser } from "@clerk/nextjs/server"
import { getByIdForAdmin } from "@/backend/database/organization/getByIdForAdmin"

export async function getOrganization(orgId: string) {
  const user = await currentUser()
  if (!user) {
    return null
  }

  return await getByIdForAdmin(orgId, user.id)
}
