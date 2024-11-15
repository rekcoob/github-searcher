import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'

import { Navbar } from './components/layout/Navbar'
import { HomePage } from './components/pages/HomePage'
import { AboutPage } from './components/pages/AboutPage'
import { NotFoundPage } from './components/pages/NotFoundPage'

import { Alert } from './components/layout/Alert'
import { User } from './components/users/User'

import './App.css'

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
