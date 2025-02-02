import { logger } from "@/utils/logger"
import { client } from "@/backend/database/client"
import { RoleType } from "@prisma/client"

/**
 * Get the organization for the user and id, as long
 * as the user is an admin for the organization
 */
export async function getByIdForAdmin(orgId: string, authId: string) {
  try {
    return await client.organization.findUnique({
      where: {
        id: orgId,
        AND: {
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
      include: {
        events: {
          include: {
            projects: true,
          },
        },
      },
    })
  } catch (err) {
    logger.error("Failed to get organization by id", {
      error: err,
    })
    return null
  }
}
