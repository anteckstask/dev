/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HouseWhereInput } from "./HouseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HouseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HouseWhereInput,
  })
  @ValidateNested()
  @Type(() => HouseWhereInput)
  @IsOptional()
  @Field(() => HouseWhereInput, {
    nullable: true,
  })
  every?: HouseWhereInput;

  @ApiProperty({
    required: false,
    type: () => HouseWhereInput,
  })
  @ValidateNested()
  @Type(() => HouseWhereInput)
  @IsOptional()
  @Field(() => HouseWhereInput, {
    nullable: true,
  })
  some?: HouseWhereInput;

  @ApiProperty({
    required: false,
    type: () => HouseWhereInput,
  })
  @ValidateNested()
  @Type(() => HouseWhereInput)
  @IsOptional()
  @Field(() => HouseWhereInput, {
    nullable: true,
  })
  none?: HouseWhereInput;
}
export { HouseListRelationFilter };
