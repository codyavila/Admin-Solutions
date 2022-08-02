// import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/home/Home'
import List from './Components/list/List'
import Login from './Components/login/Login'
import New from './Components/new/New'
import Single from './Components/single/Single'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
