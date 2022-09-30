import { Field, InputType } from '@nestjs/graphql';

// @InputType()
export class AccountBookInput {
  @Field()
  accountBookInput: {
    title: string;
    price: string;
  };
}
