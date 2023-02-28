import { describe, expect, it } from 'vitest';

describe('another suite', () => {
  it('skipped test', () => {
    // Test skipped, as tests are running in Only mode
    expect(Math.sqrt(4)).toEqual(2);
  });
});
