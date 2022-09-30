import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountBookInput } from 'src/models/account-Book-input.models';
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

  save(accountBookInput: AccountBookInput): AccountBook[] {
    const values = {
      id: '1',
      title: accountBookInput.accountBookInput.title,
      price: accountBookInput.accountBookInput.price,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.accountBook = [...this.accountBook, values];
    return this.accountBook;
  }
}
