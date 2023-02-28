// prettier-ignore
export const headers = ({
  // ======== arguments ======== //
  Authorization,
  CacheControl,
  ContentType,
  mode,
}: {
  // ======== parameters ======== //
  Authorization?:   string
  CacheControl?:    'no-cache'
  ContentType?:     'application/json' | 'text/plain',
  mode?:            'cors' | 'no-cors'
}) => ({
  // ======== return ======== //
  'Authorization':  Authorization,
  'Cache-Control':  CacheControl,
  'Content-Type':   ContentType,
  'mode':           mode,
})
