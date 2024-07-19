import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';




export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}


