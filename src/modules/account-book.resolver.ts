import { AccountBookService } from './../services/account-book.service';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountBook } from '../models/account-book.models';

// Resolverデコレータでresolverを定義
// https://docs.nestjs.com/graphql/resolvers#code-first-resolver
@Resolver('AccountBookResolver')
export class AccountBookResolver {
  constructor(private accountBookService: AccountBookService) {}
  @Query(() => [AccountBook], { nullable: 'items' })
  findAll() {
    return this.accountBookService.findAll();
  }

  @Query(() => AccountBook)
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.accountBookService.findOneById(id);
  }
}
