// global
import { dirs } from '~/src/global'
// libs
import { Express, EJS } from '~/src/libs/packages'
import { logger, favicon, parsers, headers } from '~/src/libs/extensions/express'
// app
import { Public, server, E, templates } from '~/src'
import { router } from '~/src/navigation'
import { swagger } from '~/src/document'
// local
import { config } from '.'

// prettier-ignore
export function initialize() {
  // ======== env ======== //
  // environment.initialize()

  
  // ======== logger ======== //
  server.express.use(logger.middleware(config.logger_mode))


  // ======== security ======== //
  server.express.use(headers.cors({ 
    origin: config.cors_origin,
    preflightContinue: true 
  }))
  // server.express.use(headers.set.frameguard({ action: 'sameorigin' }))


  // ======== parsers ======== //
  server.express.use(parsers.authBearer.getToken())
  server.express.use(parsers.cookie())
  server.express.use(parsers.universalCookies())
  server.express.use(Express.urlencoded({ extended: true }))
  server.express.use(Express.json())


  // ======== adjusts ======== //
  server.express.disable('etag')


  // ======== public ======== //
  server.express.use(favicon(Public.favicon))
  server.express.use('/public', Express.static(Public.dirname))

  
  // ======== swagger ======== //
  server.express.use('/swagger', swagger.UI())
  server.express.use('/swagger', swagger.initialize())


  // ======== apollo ======== //
  // apollo.server.start().then(() => {
  //   server.express.use('/graphql', apollo.middleware())
  // })


  // ======== view ======== //
  server.express.set('views', dirs.view)
  server.express.set('view engine', 'html')
  server.express.engine('html', EJS.renderFile)
  
  
  // ======== html ======== //
  server.express.use('/homepage', (req, res) => {
    return res.render(templates.html.blank, {
      document: templates.documents.document1,
      layout:   templates.layouts.layout1, 
      page:     templates.pages.page1, 
      // props
      props: { 
        welcome: 'Hello World', 
      },
    })

  })
  

  // ======== routes ======== //
  server.express.use(E.middleware)
  router.initialize()
  server.express.use(router.express)


  // ======== listen ======== //
  server.express.listen(config.port, () => {
    console.log(`>> Server listening: http://localhost:${config.port}`)
  })
}
