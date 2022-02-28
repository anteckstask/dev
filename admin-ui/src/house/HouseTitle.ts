import { House as THouse } from "../api/house/House";

export const HOUSE_TITLE_FIELD = "id";

export const HouseTitle = (record: THouse): string => {
  return record.id || record.id;
};
