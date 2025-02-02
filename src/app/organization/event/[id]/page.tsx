import { getEvent } from "@/backend/service/getEvent"

type Params = Promise<{ id: string }>

type Props = {
  params: Params
}

export default async function OrganizationEvent({ params }: Props) {
  const p = await params
  const id = p.id

  const event = await getEvent(id)

  if (!event) {
    return null
  }

  return (
    <>
      <h1>Organization Event {id}</h1>
    </>
  )
}
