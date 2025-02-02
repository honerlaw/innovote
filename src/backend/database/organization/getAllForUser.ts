import { client } from "@/backend/database/client"
import { logger } from "@/utils/logger"

export async function getAll(authId: string) {
  try {
    return await client.organization.findMany({
      where: {
        roles: {
          some: {
            user: {
              authId: authId,
            },
          },
        },
      },
    })
  } catch (err) {
    logger.error("Failed to get all organizations", {
      error: err,
    })
    return null
  }
}
