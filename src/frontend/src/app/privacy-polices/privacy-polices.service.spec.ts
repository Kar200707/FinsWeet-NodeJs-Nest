import { Test, TestingModule } from '@nestjs/testing';
import { PrivacyPolicesService } from './privacy-polices.service';

describe('PrivacyPolicesService', () => {
  let service: PrivacyPolicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrivacyPolicesService],
    }).compile();

    service = module.get<PrivacyPolicesService>(PrivacyPolicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
