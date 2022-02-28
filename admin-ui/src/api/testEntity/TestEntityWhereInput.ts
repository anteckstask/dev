import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TestEntityWhereInput = {
  id?: StringFilter;
  test?: StringNullableFilter;
};
