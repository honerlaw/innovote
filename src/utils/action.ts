export type BaseActionState = {
  errors: {
    [inputName: string]: string[]
  } | null
  message: string
}

export const INITIAL_BASE_ACTION_STATE: BaseActionState = {
  errors: null,
  message: "",
}
