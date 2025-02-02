import { BaseActionState } from "@/utils/action/baseAction"
import { useMemo } from "react"

type InputErrorMessageProps = {
  fieldName: string
  errors: BaseActionState["errors"]
}

export const InputErrorMessage: React.FC<InputErrorMessageProps> = ({
  fieldName,
  errors,
}) => {
  const messages = useMemo(() => {
    if (!errors) {
      return []
    }

    return errors[fieldName] || []
  }, [errors, fieldName])

  if (messages.length === 0) {
    return null
  }

  return (
    <>
      {messages.map((message, index) => {
        return (
          <p className="m-2 text-red-500 text-xs" key={index}>
            {message}
          </p>
        )
      })}
    </>
  )
}
