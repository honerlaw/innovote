import { currentUser } from "@clerk/nextjs/server"
import { create } from "@/backend/database/organization/create"

export async function createOrganization(name: string) {
  const user = await currentUser()
  if (!user) {
    return null
  }

  return await create(name, user.id)
}
