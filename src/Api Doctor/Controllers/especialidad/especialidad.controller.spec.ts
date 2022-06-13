import { Test, TestingModule } from '@nestjs/testing';
import { EspecialidadController } from './especialidad.controller';

describe('EspecialidadController', () => {
  let controller: EspecialidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecialidadController],
    }).compile();

    controller = module.get<EspecialidadController>(EspecialidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
