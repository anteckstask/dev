import { SortOrder } from "../../util/SortOrder";

export type TestEntityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  test?: SortOrder;
  updatedAt?: SortOrder;
};
