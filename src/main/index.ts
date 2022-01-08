import express from 'express'
import { boletoRouters } from './routers'

class Bootstrap {
  execute (): void {
    const app = express()

    app.use(boletoRouters)

    app.listen(8800, () => {
      console.log(`Server running at:  http://localhost${8800}`)
    })
  }
}

new Bootstrap().execute()
