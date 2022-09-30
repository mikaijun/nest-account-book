import { AccountBookService } from '../services/account-book.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AccountBook } from 'src/models/account-book.models';
import { AccountBookInput } from 'src/models/account-Book-input.models';

@Resolver('AccountBookMutationResolver')
export class AccountBookMutationResolver {
  constructor(private accountBookService: AccountBookService) {}

  // Error: Undefined type error. Make sure you are providing an explicit type for the "accountBookInput" of the "AccountBookInput" class.
  @Mutation(() => [AccountBook])
  save(
    @Args({ name: 'accountBookInput', type: () => AccountBookInput })
    accountBookInput: AccountBookInput,
  ): AccountBook[] {
    return this.accountBookService.save(accountBookInput);
  }
}
