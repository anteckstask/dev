import { TestEntityWhereInput } from "./TestEntityWhereInput";
import { TestEntityOrderByInput } from "./TestEntityOrderByInput";

export type TestEntityFindManyArgs = {
  where?: TestEntityWhereInput;
  orderBy?: TestEntityOrderByInput;
  skip?: number;
  take?: number;
};
