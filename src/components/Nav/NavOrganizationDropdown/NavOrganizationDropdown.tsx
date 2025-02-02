import { getOrganizations } from "@/backend/service/getOrganizations"
import { getSelectedOrganization } from "@/backend/service/getSelectedOrganization"
import { SelectOrganization } from "@/components/Nav/NavOrganizationDropdown/SelectOrganization"

export async function NavOrganizationDropdown() {
  const orgs = await getOrganizations()
  const selected = await getSelectedOrganization()

  if (!orgs) {
    return null
  }

  const options = orgs.map((org) => {
    return {
      id: org.id,
      name: org.title,
      link: `/organization/${org.id}`,
    }
  })

  return <SelectOrganization selected={selected} options={options} />
}
