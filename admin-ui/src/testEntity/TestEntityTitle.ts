import { TestEntity as TTestEntity } from "../api/testEntity/TestEntity";

export const TESTENTITY_TITLE_FIELD = "costm";

export const TestEntityTitle = (record: TTestEntity): string => {
  return record.costm || record.id;
};
