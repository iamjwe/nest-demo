const devConfig = {
  test: 'aaa'
}
const prodConfig = {
  test: 'bbb'
}


export const config = process.env.NODE_ENV === 'develop'? devConfig: prodConfig;      
      