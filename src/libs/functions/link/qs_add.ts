export function qs_add(targetUrl: string, queryKey: string, queryVal: string) {
  const newUrl = new URL(targetUrl)
  newUrl.searchParams.append(queryKey, queryVal)
  return newUrl.href
}
