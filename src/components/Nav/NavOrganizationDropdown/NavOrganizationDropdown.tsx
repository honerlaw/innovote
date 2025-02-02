import { getOrganizations } from "@/backend/service/getOrganizations"
import { SelectOrganization } from "@/components/Nav/NavOrganizationDropdown/SelectOrganization"

export async function NavOrganizationDropdown() {
  const orgs = await getOrganizations()

  if (!orgs) {
    return null
  }

  const options = orgs.map((org) => {
    return {
      name: org.title,
      link: `/organization/${org.id}`,
    }
  })

  return <SelectOrganization options={options} />
}
