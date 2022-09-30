import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AccountBookInput {
  @Field()
  title: string;

  @Field()
  price: string;
}
