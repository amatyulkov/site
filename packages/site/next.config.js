const expand = require('dotenv-expand');
const dotenv = require('dotenv');

const config = expand(dotenv.config({ path: '../../.env' })).parsed;
const {
  SHOW_GRIDS,
  CLOUDINARY_PATH,
  CLOUDINARY_ORIGIN,
  CLOUDINARY_BUCKET,
} = config;

module.exports = {
  serverRuntimeConfig: config,
  publicRuntimeConfig: {
    SHOW_GRIDS: SHOW_GRIDS === 'true',
    CLOUDINARY_PATH,
    CLOUDINARY_ORIGIN,
    CLOUDINARY_BUCKET,
  },
};
