import { z } from "zod"

export const CreateOrganizationInput = z.object({
  name: z.string().nonempty(),
})

export type CreateOrganizationInputType = z.infer<
  typeof CreateOrganizationInput
>
