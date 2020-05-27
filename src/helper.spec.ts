import { getAnswer } from './helper';

describe('helper', () => {
  describe('domainSpecificAdd', () => {
    it('returns 42', () => {
      expect(getAnswer()).toBe(42);
    });
  });
});
