import 'dotenv/config'
import express from 'express'
import { appConfig } from './config'
import { boletoRouters, routeExample } from './routers'

class Bootstrap {
  execute (): void {
    const app = express()
    const { port } = appConfig

    app.disable('x-powered-by')
    app.get('/', routeExample)

    app.use(boletoRouters)

    app.listen(port, () => {
      console.log(`Server running at: http://localhost:${port}`)
    })
  }
}

new Bootstrap().execute()
