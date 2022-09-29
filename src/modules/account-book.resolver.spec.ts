import { Test, TestingModule } from '@nestjs/testing';
import { AccountBookResolver } from './account-book.resolver';

describe('AccountBookResolver', () => {
  let resolver: AccountBookResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountBookResolver],
    }).compile();

    resolver = module.get<AccountBookResolver>(AccountBookResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
