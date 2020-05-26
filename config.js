import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig()

// import getConfig from 'next/config';
// const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION 
? 'https:/seoblog.com'
:publicRuntimeConfig.API_DEVELOPMENT

export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const DOMAIN = publicRuntimeConfig.PRODUCTION 
    ? 'https:/seoblog.com'
    : publicRuntimeConfig.DOMAIN_DEVELOPMENT




export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID    
// export const API = publicRuntimeConfig.API
// export const DOMAIN = publicRuntimeConfig.DOMAIN
// export const PRODUCTION = publicRuntimeConfig.PRODUCTION

// export const API = publicRuntimeConfig.PRODUCTION ? 'https://morenitoGamer.com':'http://localhost:8000';
//export const APP_NAME = publicRuntimeConfig.APP_NAME