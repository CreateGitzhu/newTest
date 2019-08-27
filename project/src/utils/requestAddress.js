import { isProduction } from './env'

const address = {
  production: {
    HOST_USER: 'http://localhost:8080/m/',
  },
  dev: {
    HOST_USER: 'http://api-m-new-dev.tlwok.com/',
  },
}

export default isProduction ? address.production : address.dev
