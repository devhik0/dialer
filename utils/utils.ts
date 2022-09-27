/**
 *
 * @param data {adsoyad: string}
 * @returns string
 */
export const makeSlug = (data: { adsoyad: string }) => {
  const slug = data.adsoyad.toLowerCase().split(" ");
  const ad = slug[0];
  const soyad = slug[1];
  return `${ad}-${soyad}`;
};
