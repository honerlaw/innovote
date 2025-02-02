import { PlusCircleIcon } from "@heroicons/react/16/solid"
import { Card, CardContent, CardFooter } from "@/components/common/Card"
import { ModalName } from "@/constants"
import { CreateEventModal } from "@/forms/event/create"

type CreateEventCardProps = {
  orgId: string
}

export const CreateEventCard: React.FC<CreateEventCardProps> = ({ orgId }) => {
  return (
    <>
      <Card link={`?modal=${ModalName.CREATE_EVENT}`}>
        <CardContent>
          <PlusCircleIcon height={50} width={50} />
        </CardContent>
        <CardFooter>
          <p>Create new event</p>
        </CardFooter>
      </Card>
      <CreateEventModal orgId={orgId} />
    </>
  )
}
