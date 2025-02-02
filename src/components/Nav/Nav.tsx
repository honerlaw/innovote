import { NavOrganizationDropdown } from "@/components/Nav/NavOrganizationDropdown/NavOrganizationDropdown"
import { Avatar } from "@/components/Avatar"

export async function Nav() {
  return (
    <nav className="w-full h-20 border-b border-gray-300 flex justify-between items-center gap-10 px-10">
      <h1>Innovote</h1>

      <div className="flex items-center gap-10">
        <NavOrganizationDropdown />
        <Avatar />
      </div>
    </nav>
  )
}
