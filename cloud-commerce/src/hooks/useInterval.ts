import { useEffect, useRef, useState } from 'react'

const useInterval = (_timer: number, callback: Function, delay: number = 1200) => {
  const [timer, setTimer] = useState(_timer)
  const callbackRef = useRef(callback)
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>()

  const decrementTimer = () => {
    setTimer(t => t - 1)
  }

  useEffect(() => {
    intervalRef.current = setInterval(decrementTimer, delay)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    callbackRef.current(timer)
  }, [timer])

  return { timer }
}
export default useInterval
