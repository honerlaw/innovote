import { currentUser } from "@clerk/nextjs/server"
import { getByIdForAdmin } from "@/backend/database/event/getByIdForAdmin"

export async function getEvent(id: string) {
  const user = await currentUser()
  if (!user) {
    return null
  }
  return await getByIdForAdmin(id, user.id)
}
