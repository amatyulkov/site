import getConfig from 'next/config';

type ServerRuntimeConfig = {
  CONTENT_SERVER_HOSTNAME: string;
  CONTENT_SERVER_PORT: string;
  CONTENT_SERVER_PROTOCOL: string;
};

type PublicRuntimeConfig = {
  SHOW_GRIDS: boolean;
  CLOUDINARY_BUCKET: string;
  CLOUDINARY_ORIGIN: string;
  CLOUDINARY_PATH: string;
};

type EnvironmentConfig = {
  serverRuntimeConfig: ServerRuntimeConfig;
  publicRuntimeConfig: PublicRuntimeConfig;
};

const getEnvironmentConfig = () => getConfig() as EnvironmentConfig;

export const getServerRuntimeConfig = () =>
  getEnvironmentConfig().serverRuntimeConfig;

export const getPublicRuntimeConfig = () =>
  getEnvironmentConfig().publicRuntimeConfig;

export const getCloudinaryHref = () => {
  const {
    CLOUDINARY_BUCKET,
    CLOUDINARY_ORIGIN,
    CLOUDINARY_PATH,
  } = getPublicRuntimeConfig();

  return `${CLOUDINARY_ORIGIN}/${CLOUDINARY_BUCKET}${CLOUDINARY_PATH}`;
};
