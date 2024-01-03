import { Test, TestingModule } from '@nestjs/testing';
import { PrivacyPolicesController } from './privacy-polices.controller';

describe('PrivacyPolicesController', () => {
  let controller: PrivacyPolicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivacyPolicesController],
    }).compile();

    controller = module.get<PrivacyPolicesController>(PrivacyPolicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
