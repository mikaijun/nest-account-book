import { Module } from '@nestjs/common';
import { AccountBookService } from '../services/account-book.service';
import { AccountBookFieldsResolver } from '../resolver/account-book-fields.resolver';
import { AccountBookMutationResolver } from '../resolver/account-book-mutations.resolver';

@Module({
  providers: [
    AccountBookService,
    AccountBookFieldsResolver,
    AccountBookMutationResolver,
  ],
})
export class AccountBookModule {}
