import { Module } from '@nestjs/common';
import { AccountBookService } from '../services/account-book.service';
import { AccountBookResolver } from './account-book.resolver';
import { AccountBookResolver2 } from './account-book.resolver2';

@Module({
  providers: [AccountBookService, AccountBookResolver, AccountBookResolver2],
})
export class AccountBookModule {}
