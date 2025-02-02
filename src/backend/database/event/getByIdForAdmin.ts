import { logger } from "@/utils/logger"
import { client } from "@/backend/database/client"
import { RoleType } from "@prisma/client"

export async function getByIdForAdmin(eventId: string, authId: string) {
  try {
    return await client.event.findUnique({
      where: {
        id: eventId,
        AND: {
          organization: {
            roles: {
              some: {
                roleType: RoleType.ADMIN,
                user: {
                  authId: authId,
                },
              },
            },
          },
        },
      },
      include: {
        projects: true,
        organization: true,
      },
    })
  } catch (err) {
    logger.error("Failed to get organization by id", {
      error: err,
    })
    return null
  }
}
