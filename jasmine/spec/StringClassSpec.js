describe('test hasVowels method', () => {
  it('should return true if the string has vowels', () => {
    expect('TONIDA HAS ORANGES'.hasVowels()).toBeTruthy();
    expect('TonidA'.hasVowels()).toBeTruthy();
    expect('M37@i*, exp'.hasVowels()).toBeTruthy();
    expect('mabishi'.hasVowels()).toBeTruthy();
  });

  it('should return false if the string has no vowels', () => {
    expect('TBNRTY'.hasVowels()).toBeFalsy();
    expect('tbnrty'.hasVowels()).toBeFalsy();
    expect('245Gy'.hasVowels()).toBeFalsy();
    expect('Thy'.hasVowels()).toBeFalsy();
  });

  it('should check the type of results to be boolean', () => {
    expect(typeof('mabishi'.hasVowels())).toBe('boolean');
    expect(typeof('TBNRTY'.hasVowels())).toBe('boolean');
  });
});

describe('test toUpper method', () => {
  it('should return an uppercase form of the string passed', () => {
    expect('tonida'.toUpper()).toEqual('TONIDA');
    expect('ToNida'.toUpper()).toEqual('TONIDA');
    expect('347tr, T&*()'.toUpper()).toEqual('347TR, T&*()');
    expect('This is good'.toUpper()).toEqual('THIS IS GOOD');
  });

  it('should check the type of results to be a string', () => {
    expect(typeof('tonida'.toUpper())).toBe('string');
  });
});

describe('test toLower method', () => {
  it('should return a lowercase form of the string passed', () => {
    expect('TONIDA'.toLower()).toEqual('tonida');
    expect('TONIDA'.toLower()).toEqual('tonida');
    expect('347TR, T&*()'.toLower()).toEqual('347tr, t&*()');
    expect('THIS IS GOOD'.toLower()).toEqual('this is good');
  });

  it('should check the type of results to be a string', () => {
    expect(typeof('tonida'.toLower())).toBe('string');
  });
});

describe('test ucFirst method', () => {
  it('should return a lowercase form of the string passed', () => {
    expect('tonida'.ucFirst()).toEqual('Tonida');
    expect('TONIDA'.ucFirst()).toEqual('TONIDA');
    expect('347tr, t&*()'.ucFirst()).toEqual('347tr, t&*()');
    expect('this is good'.ucFirst()).toEqual('This is good');
  });

  it('should check the type of results to be a string', () => {
    expect(typeof('tonida'.ucFirst())).toBe('string');
  });
});

describe('test isQuestion method', () => {
  it('should return true if the string is a question', () => {
    expect('TONIDA HAS ORANGES?'.isQuestion()).toBeTruthy();
    expect('TonidA?'.isQuestion()).toBeTruthy();
    expect('M37@i*, exp?'.isQuestion()).toBeTruthy();
    expect('mabishi?'.isQuestion()).toBeTruthy();
  });

  it('should return false if the string is not a question', () => {
    expect('TBNRTY'.isQuestion()).toBeFalsy();
    expect('tbnrty'.isQuestion()).toBeFalsy();
    expect('245Gy'.isQuestion()).toBeFalsy();
    expect('Thy'.isQuestion()).toBeFalsy();
  });

  it('should check the type of results to be boolean', () => {
    expect(typeof('mabishi?'.isQuestion())).toBe('boolean');
    expect(typeof('TBNRTY'.isQuestion())).toBe('boolean');
  });
});
