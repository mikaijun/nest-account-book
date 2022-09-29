import { Module } from '@nestjs/common';
import { AccountBookService } from '../services/account-book.service';
import { AccountBookResolver } from './account-book.resolver';

@Module({
  providers: [AccountBookService, AccountBookResolver],
})
export class AccountBookModule {}
