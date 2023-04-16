import { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '@/pages'

interface Props {
  children?: ReactNode
}

const RoutesWithNotFound = ({ children }: Props) => (
  <Routes>
    {children}
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
)

export default RoutesWithNotFound
