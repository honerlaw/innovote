import { currentUser } from "@clerk/nextjs/server"
import { create, CreateOptions } from "@/backend/database/event/create"

export async function createEvent(opts: Omit<CreateOptions, "authId">) {
  const user = await currentUser()
  if (!user) {
    return null
  }

  return await create({
    ...opts,
    authId: user.id,
  })
}
