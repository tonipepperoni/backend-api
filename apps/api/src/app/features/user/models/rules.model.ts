import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class RulesModel {
  @Field(() => [String], {nullable: true})
  action: string[] | null;

  @Field(() => String, {nullable: true})
  subject: string;
}
