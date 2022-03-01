/** @type {import('next').NextConfig} */
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withLess(withImages(withSass({
  env: {
    ANY_ENV_KEY: "ANY_ENV_VARIABLE"
  }
}))));
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
