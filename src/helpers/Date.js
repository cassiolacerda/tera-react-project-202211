import { format, parseISO } from "date-fns";

export const getFriendlyDate = (string) =>
  format(parseISO(string), "dd/MM/yyyy");
