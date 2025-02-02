import { currentUser } from "@clerk/nextjs/server"
import { get as getDBUser } from "@/backend/database/user/get"

export async function getUser() {
  const user = await currentUser()
  if (!user) {
    return null
  }
  return await getDBUser(user.id)
}
