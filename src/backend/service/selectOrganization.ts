import { currentUser } from "@clerk/nextjs/server"
import { select } from "@/backend/database/organization/select"

export async function selectOrganization(id: string) {
  const user = await currentUser()

  if (!user) {
    return false
  }

  await select(id, user.id)

  return true
}
