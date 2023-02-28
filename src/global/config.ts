import { Cookie } from '~/src/libs/Types'
import { dt } from '~/src/libs/functions'

// prettier-ignore
export const config = () => {

  const maxAge = dt.conv({ hr: 24 }).sec

  return {
    appName:          'Boilerplate',
    bcryptSalt:       '$2b$10$BpiAbfRC6aNum2lC6CA0oO',
    cryptIV:          '5de006283df4d5b5d3d457d9b35a6cf8',
    tokenExpiration:  '3 hours',
    cacheDuration:    '8 hours',
    emailDefault: {
      from:     'user1@provider1.com',
      to:       'user2@provider2.com',
      subject:  'Welcome',
      text:     'Hello World',
    },
    redisClientsDb: {
      serverExpress: 1,
      serverApollo: 2,
      keyvalMain: 3,
    },
    cookie: {
      domain:   null,
      expires:  new Date(Date.now() + maxAge * 1000),
      httpOnly: true,
      maxAge:   maxAge,
      path:     '/',
      sameSite: 'lax',
      secure:   true,
    } as Cookie.Options,
    
    with_persist: false,
    view: {
      with_Styled: false,
      with_Emotion: false,
      with_Material: false,
      with_Chakra: false,
    }
  }
}
