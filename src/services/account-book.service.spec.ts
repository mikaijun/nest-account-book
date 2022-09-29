import { Test, TestingModule } from '@nestjs/testing';
import { AccountBookService } from './account-book.service';

describe('AccountBookService', () => {
  let service: AccountBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountBookService],
    }).compile();

    service = module.get<AccountBookService>(AccountBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
