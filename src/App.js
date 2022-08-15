// import './App.css';

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { productInputs, userInputs } from './formSource'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'

import './style/dark.scss'

function App() {

  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home setDark={setDark} />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route
                path='new'
                element={<New inputs={userInputs} title='Create New User' />}
              />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route
                path='new'
                element={
                  <New inputs={productInputs} title='Create New Product' />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
