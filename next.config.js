// ============================================== //
// ==================== libs ==================== //
// ============================================== //
// const { path } = require('./src/libs/helpers/system')
const { is } = require('./src/libs/functions/check')

//
//
// ============================================= //
// ==================== env ==================== //
// ============================================= //
const envInit = require('dotenv').config
envInit()

// prettier-ignore
const env = {
  PWA_ENABLE:       is.True.vs(proccess.env.PWA_ENABLE),
  PWA_CAN_REGISTER: is.True.vs(proccess.env.PWA_CAN_REGISTER),
  PWA_CAN_CACHE:    is.True.vs(proccess.env.PWA_CAN_CACHE),
}

//
//
// ==================================================== //
// ==================== extensions ==================== //
// ==================================================== //
// const withCss = require('@zeit/next-css')
// const withSass = require('@zeit/next-sass')
// const withFonts = require('next-fonts')
// const withVideos = require('next-videos')
// const withImages = require('next-images')
// const withReactSvg = require('next-react-svg')

const withTranslate = require('next-translate')
const runtimeCaching = require('next-pwa/cache')
const createWithPWA = require('next-pwa')

// prettier-ignore
const withPWA = createWithPWA({
  dest:          'public',
  disable:       !env.PWA_CAN_CACHE,
  register:       env.PWA_CAN_REGISTER,
  runtimeCaching: env.PWA_CAN_CACHE ? runtimeCaching : undefined,
  // buildExcludes: [new RegExp('/stream')],
})

//
//
// ================================================ //
// ==================== config ==================== //
// ================================================ //
/** @type {import('next').NextConfig} */
// prettier-ignore
const nextConfig = withPWA(withTranslate({
  // ============ feats ============ //
  experimental: {
    appDir: true,
  },
  
  // ============ react ============ //
  reactStrictMode: true,

  // ============ style ============ //
	// cssModules: true,
  compiler: {
    styledComponents: true,
  },

  // ============ langs ============ //
	// i18n: {
	// 	 locales: ['en', 'pt'],
	// 	 defaultLocale: 'en',
	// },

  // ============ images ============ //
	// images: {
	// 	 domains: ['provider.com', 'www.provider.com'],
	// },

  // ============ configs ============ //
  // webpack: (config, options) => {
  //   config.resolve.alias['~/src']	= path.v1.join(__dirname, './src')
	//   return config
	// },

  // ============ navigation ============ //
  // documentation: 'https://nextjs.org/docs/api-reference/next.config.js/exportPathMap,
	// exportTrailingSlash: true,
	// exportPathMap: async () => routes,
}))

//
//
// ================================================ //
// ==================== export ==================== //
// ================================================ //
module.exports = nextConfig
