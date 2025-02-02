import { RoleType } from "@prisma/client"
import { client } from "@/backend/database/client"
import { logger } from "@/utils/logger"

export async function uspert(authId: string): Promise<boolean> {
  try {
    await client.user.upsert({
      where: {
        authId,
      },
      create: {
        authId,
        roles: {
          create: {
            roleType: RoleType.ADMIN,
            organization: {
              create: {
                title: "My Organization",
              },
            },
          },
        },
      },
      update: {},
    })
    return true
  } catch (err) {
    logger.error("Failed to upsert user", {
      error: err,
    })
    return false
  }
}
