import { FactorioModule } from './factorio.module';

describe('FactorioModule', () => {
  let factorioModule: FactorioModule;

  beforeEach(() => {
    factorioModule = new FactorioModule();
  });

  it('should create an instance', () => {
    expect(factorioModule).toBeTruthy();
  });
});
