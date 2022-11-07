describe('Account', () => {
    var first_val = 1 + 1;
    var second_val = 2;

  // +
  it('This test performs a sum correctly.', () => {
    expect(first_val == second_val).to.equal(true);

  });
  
  // +
  it('Second summation check.', () => {
    expect(first_val).to.equal(second_val);
  });

  // -
  it('Verification of correct subtraction', () => {
    expect(first_val - second_val).to.equal(0);
  });
});