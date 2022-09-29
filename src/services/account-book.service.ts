import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountBook } from '../models/account-book.models';

@Injectable()
export class AccountBookService {
  private accountBook: AccountBook[] = [];

  findAll(): AccountBook[] {
    return this.accountBook;
  }
  findOneById(id: string): AccountBook {
    const result = this.accountBook.find((todo) => id === todo.id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }
}
