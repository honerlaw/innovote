import { logger } from "@/utils/logger"
import { client } from "@/backend/database/client"

export async function update(id: string, name: string, authId: string) {
  try {
    return await client.organization.update({
      where: {
        id: id,
        roles: {
          some: {
            user: {
              authId: authId,
            },
          },
        },
      },
      data: {
        title: name,
      },
    })
  } catch (err) {
    logger.error("Failed to update organization.", {
      error: err,
    })
    return null
  }
}
