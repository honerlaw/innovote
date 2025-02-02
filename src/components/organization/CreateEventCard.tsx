import { PlusCircleIcon } from "@heroicons/react/16/solid"
import { Card, CardContent, CardFooter } from "@/components/common/Card"

export const CreateEventCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <PlusCircleIcon height={50} width={50} />
      </CardContent>
      <CardFooter>
        <p>Create new event</p>
      </CardFooter>
    </Card>
  )
}
