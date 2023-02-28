// prettier-ignore
export const defaultConfig = {
    debug:            false|true,     // if true, enables console output
    defaultDuration:  '1 hour',       // should be either a number (in ms) or a string, defaults to 1 hour
    enabled:          true|false,     // if false, turns off caching globally (useful on dev)
    redisClient:      client,         // if provided, uses the [node-redis](https://github.com/NodeRedis/node_redis) client instead of [memory-cache](https://github.com/ptarjan/node-cache)
    appendKey:        fn(req, res),   // appendKey takes the req/res objects and returns a custom value to extend the cache key
    headerBlacklist:  [],             // list of headers that should never be cached
    statusCodes: {
      exclude:        [],             // list status codes to specifically exclude (e.g. [404, 403] cache all responses unless they had a 404 or 403 status)
      include:        [],             // list status codes to require (e.g. [200] caches ONLY responses with a success/200 code)
    },
    trackPerformance: false,          // enable/disable performance tracking... WARNING: super cool feature, but may cause memory overhead issues
    headers: {
      // 'cache-control':  'no-cache' // example of header overwrite
    },
    respectCacheControl: false|true   // If true, 'Cache-Control: no-cache' in the request header will bypass the cache.
}
