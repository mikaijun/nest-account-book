import { AccountBookService } from './../services/account-book.service';
import { Mutation, Resolver } from '@nestjs/graphql';
import { AccountBook } from 'src/models/account-book.models';

// Resolverデコレータでresolverを定義
// https://docs.nestjs.com/graphql/resolvers#code-first-resolver
@Resolver('AccountBookResolver2')
export class AccountBookResolver2 {
  constructor(private accountBookService: AccountBookService) {}

  @Mutation(() => [AccountBook], { nullable: 'items' })
  findAll() {
    return this.accountBookService.findAll();
  }
}
