import { format as formateDate, parse as parseDate } from "date-fns"

const DATE_FORMAT = "yyyy-MM-dd"

export function format(date: Date) {
  return formateDate(date, DATE_FORMAT)
}

export function parse(date: FormDataEntryValue | string | null | undefined) {
  if (typeof date === "string") {
    return parseDate(date, DATE_FORMAT, new Date())
  }

  return new Date()
}
