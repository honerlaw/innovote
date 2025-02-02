export type BaseActionState = {
  success: boolean
  errors: {
    [inputName: string]: string[]
  } | null
  message: string
}

export const INITIAL_BASE_ACTION_STATE: BaseActionState = {
  success: false,
  errors: null,
  message: "",
}
