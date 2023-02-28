import { useQuery } from '@tanstack/react-query'

export function Query() {
  const {
    isPreviousData,

    error,
    errorUpdateCount,
    errorUpdatedAt,
    isError,

    isLoadingError,
    isRefetchError,

    isInitialLoading,
    isLoading,

    fetchStatus,
    isFetched,
    isFetchedAfterMount,
    isFetching,
    isRefetching,
    refetch,

    failureCount,
    failureReason,
    isPaused,
    isStale,
    isSuccess,
    remove,
  } = useQuery()
}
