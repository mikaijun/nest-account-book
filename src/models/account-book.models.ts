import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccountBook {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  price: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
