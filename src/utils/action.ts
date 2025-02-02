export type BaseActionState = {
  errors: {
    [inputName: string]: string[]
  } | null
  message: string
}
