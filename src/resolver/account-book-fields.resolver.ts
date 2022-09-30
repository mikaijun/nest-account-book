import { AccountBookService } from '../services/account-book.service';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { AccountBook } from '../models/account-book.models';

@Resolver('AccountBookFieldsResolver')
export class AccountBookFieldsResolver {
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
