import { logger } from "@/utils/logger"
import { client } from "@/backend/database/client"

export async function get(authId: string) {
  try {
    return await client.user.findUnique({
      where: {
        authId,
      },
      include: {
        selectedOrganization: true,
        roles: {
          include: {
            organization: true,
          },
        },
      },
    })
  } catch (err) {
    logger.error("Failed to get user.", {
      error: err,
    })
    return null
  }
}
