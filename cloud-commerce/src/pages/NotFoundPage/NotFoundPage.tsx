import { giphy404 } from '@/config/giphy'
import { useNavigate } from 'react-router-dom'
import { useInterval } from '@/hooks'

import './_not-found-page.scss'

function NotFoundPage() {
  const navigate = useNavigate()
  const { timer } = useInterval(
    10,
    (_timer: number) => {
      if (_timer < 0) navigate('/')
    },
    1100
  )
  return (
    <div id='not-found-page' style={{ height: '100%' }}>
      <h2>Not Found</h2>
      <img className='giphyFrame' title='Not Found Gift' src={giphy404} width='50%' height='50%' />
      <p>Redirecting to home in:</p>
      <h4>{timer}s</h4>
    </div>
  )
}

export default NotFoundPage
