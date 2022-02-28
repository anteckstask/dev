import { HouseWhereInput } from "./HouseWhereInput";
import { HouseOrderByInput } from "./HouseOrderByInput";

export type HouseFindManyArgs = {
  where?: HouseWhereInput;
  orderBy?: HouseOrderByInput;
  skip?: number;
  take?: number;
};
