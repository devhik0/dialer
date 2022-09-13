export const makeSlug = (data: string | { adsoyad: string }) => {
  if (typeof data === "string") {
    const slug = data.toLowerCase().split(" ");
    const ad = slug[0];
    const soyad = slug[1];
    return `${ad}-${soyad}`;
  }
  const slug = data.adsoyad.toLowerCase().split(" ");
  const ad = slug[0];
  const soyad = slug[1];
  return `${ad}-${soyad}`;
};
