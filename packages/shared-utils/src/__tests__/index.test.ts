import { formatCurrency, validateEmail } from '../index';

describe('Utility Functions', () => {
  describe('formatCurrency', () => {
    it('should format currency correctly', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
      expect(formatCurrency(1000, 'EUR')).toBe('€1,000.00');
    });
  });

  describe('validateEmail', () => {
    it('should validate email addresses correctly', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
    });
  });
});
