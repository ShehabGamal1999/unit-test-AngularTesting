import { CustomSquarePipe } from './square.pipe';

describe('Square Pipe Tests:', () => {
  let pipe: CustomSquarePipe;

  beforeEach(() => {
    pipe = new CustomSquarePipe();
  });

  it('should return 36 when input is 6', () => {
    const result = pipe.transform(6);
    expect(result).toBe(36);
  });

  it('should return "Invalid input" for non-numeric values', () => {
    const result = pipe.transform('test');
    expect(result).toBe('Invalid input');
  });
});
