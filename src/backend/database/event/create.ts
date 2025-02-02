import { logger } from "@/utils/logger"
import { client } from "@/backend/database/client"
import { RoleType } from "@prisma/client"

export type CreateOptions = {
  name: string
  startDate: Date
  endDate: Date
  maxVotes: number
  orgId: string
  authId: string
}

export async function create({
  name,
  startDate,
  endDate,
  maxVotes,
  orgId,
  authId,
}: CreateOptions) {
  try {
    return await client.event.create({
      data: {
        title: name,
        startDate,
        endDate,
        maxVotes,
        organization: {
          connect: {
            id: orgId,
            roles: {
              some: {
                roleType: RoleType.ADMIN,
                user: {
                  authId,
                },
              },
            },
          },
        },
      },
    })
  } catch (err) {
    logger.error("Failed to create event.", {
      error: err,
    })
    return null
  }
}
