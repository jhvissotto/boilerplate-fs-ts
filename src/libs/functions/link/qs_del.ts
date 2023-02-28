export function qs_del(targetUrl: string, queryKey: string) {
  const newUrl = new URL(targetUrl)
  newUrl.searchParams.delete(queryKey)
  return newUrl.href
}
