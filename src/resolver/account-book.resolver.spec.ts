import { Test, TestingModule } from '@nestjs/testing';
import { AccountBookFieldsResolver } from './account-book-fields.resolver';

describe('AccountBookFieldsResolver', () => {
  let resolver: AccountBookFieldsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountBookFieldsResolver],
    }).compile();

    resolver = module.get<AccountBookFieldsResolver>(AccountBookFieldsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
