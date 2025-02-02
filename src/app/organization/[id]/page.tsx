import { getOrganization } from "@/backend/service/getOrganization"
import { isOrganizationAdmin } from "@/backend/service/isOrganizationAdmin"
import { redirect } from "next/navigation"
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { Card, CardContent, CardFooter } from "@/components/common/Card"
import { CreateEventCard } from "@/components/organization"

type Params = Promise<{ id: string }>

type Props = {
  params: Params
}

export default async function Organization({ params }: Props) {
  const p = await params
  const isAdmin = await isOrganizationAdmin(p.id)
  const org = await getOrganization(p.id)

  // if not an admin go to the home page
  if (!isAdmin || !org) {
    return redirect("/")
  }

  return (
    <>
      <h1 className="font-bold text-4xl py-12">{org.title}</h1>

      <h2 className="font-bold text-3xl pb-8">Events</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <CreateEventCard />

        <Card>
          <CardContent>
            <PlusCircleIcon height={50} width={50} />
          </CardContent>
          <CardFooter>
            <p>Create new event</p>
          </CardFooter>
        </Card>

        <Card>
          <CardContent>
            <PlusCircleIcon height={50} width={50} />
          </CardContent>
          <CardFooter>
            <p>Create new event</p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
