import { logger } from "@/utils/logger"
import { client } from "@/backend/database/client"
import { RoleType } from "@prisma/client"

export async function create(name: string, authId: string) {
  try {
    return await client.organization.create({
      data: {
        title: name,
        roles: {
          create: {
            roleType: RoleType.ADMIN,
            user: {
              connect: {
                authId: authId,
              },
            },
          },
        },
      },
    })
  } catch (err) {
    logger.error("Failed to create organization.", {
      error: err,
    })
    return null
  }
}
