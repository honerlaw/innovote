import { currentUser } from "@clerk/nextjs/server"
import { update } from "@/backend/database/organization/update"

export async function updateOrganization(id: string, name: string) {
  const user = await currentUser()
  if (!user) {
    return null
  }

  return await update(id, name, user.id)
}
