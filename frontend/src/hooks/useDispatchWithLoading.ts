import { useCallback, useState } from 'react'
import { useAppDispatch } from '../redux/store'

export function useDispatchWithLoading() {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState<boolean>(false)

  const dispatchWithLoading = useCallback(
    async (action: any, data: any) => {
      setLoading(true)
      const { error } = await dispatch(action(data)).unwrap()
      setLoading(false)
      return { error: error as boolean }
    },
    [dispatch]
  )

  return { dispatch, dispatchLoading: dispatchWithLoading, loading }
}
