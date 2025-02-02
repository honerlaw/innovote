import { logger } from "@/utils/logger"
import { client } from "@/backend/database/client"

/**
 * Set the selected organization for the user
 * if they are an admin of the org
 */
export async function select(id: string, authId: string) {
  try {
    return await client.user.update({
      where: {
        authId,
        roles: {
          some: {
            roleType: "ADMIN",
            organization: {
              id,
            },
          },
        },
      },
      data: {
        selectedOrganization: {
          connect: {
            id,
          },
        },
      },
    })
  } catch (err) {
    logger.error("Failed to select organization.", {
      error: err,
    })
    return null
  }
}
