import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { History } from './views/History'
import { Home } from './views/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}