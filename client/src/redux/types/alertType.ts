import { IAlert } from "../../utils/TypeScript";

export const ALERT = "ALERT";

export interface AlertType {
  type: typeof ALERT;
  payload: IAlert;
}
