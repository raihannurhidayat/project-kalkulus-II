export const snAritmatika = (deret) => {
  const a = deret[0];
  const b = deret[1] - deret[0];
  const n = deret.length;

  const result = (n / 2) * (2 * a + (n - 1) * b);
  return result;
};

export const snAritmatikaN = (deret, n) => {
  const a = deret[0];
  const b = deret[1] - deret[0];
  const result = (n / 2) * ((2 * a) + ((n - 1) * b));
  return result;
}
