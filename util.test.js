// const { printTitle } = require('./app');
const { loadTitle } = require('./util');

// test('should print an upercase text', () => {
//   expect(printTitle).toBe('DELECTUS AUT AUTEM');
// });

test('should print an upercase text', () => {
  loadTitle().then(title => {
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
});
