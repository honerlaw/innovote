import { BaseActionState } from "@/utils/action"

export type CreateOrganizationState = BaseActionState & {
  // the actual values in the form
  name: string

  // the id of the created organization
  id: string | null
}
