/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    C_SPC_ID: process.env.CONTENTFUL_SPACE_ID,
    C_ACC_TKN: process.env.CONTENTFUL_ACCESS_TOKEN,
    C_MNG_TKN: process.env.CONTENTFUL_MANAGE_TOKEN,
  },
};

module.exports = nextConfig;
