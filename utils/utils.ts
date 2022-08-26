type Input = { adsoyad: string };

type Data = string | Input;

const makeSlug = (data: Data) => {
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

export { makeSlug };
