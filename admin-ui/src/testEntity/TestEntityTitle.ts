import { TestEntity as TTestEntity } from "../api/testEntity/TestEntity";

export const TESTENTITY_TITLE_FIELD = "test";

export const TestEntityTitle = (record: TTestEntity): string => {
  return record.test || record.id;
};
