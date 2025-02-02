import { currentUser } from "@clerk/nextjs/server"
import { getAll } from "@/backend/database/organization/getAllForUser"

export async function getOrganizations() {
  const user = await currentUser()
  if (!user) {
    return null
  }
  return await getAll(user.id)
}
