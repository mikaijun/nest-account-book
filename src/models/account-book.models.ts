import { Field, ID, ObjectType } from '@nestjs/graphql';

// ObjectTypeデコレータを使用することで、定義したmodelを元にschemaが自動生成される
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
