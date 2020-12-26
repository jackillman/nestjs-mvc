import { Test, TestingModule } from '@nestjs/testing';
import { Home } from './home';

describe('Home', () => {
  let provider: Home;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Home],
    }).compile();

    provider = module.get<Home>(Home);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
