import logConfig from './logger.config';

const commonConfig = {
 
}

const devConfig = {
  test: 'aaa',
  logConfig 
}
const prodConfig = {
  test: 'bbb',
  logConfig
}


export const config = {...commonConfig,...(process.env.NODE_ENV === 'develop'? devConfig: prodConfig)};      
      