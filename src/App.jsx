import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Club } from './components/Club/Club'
import { Players } from './components/Players/Players'
import { History } from './components/History/History'
import { DetailsPlayer } from './components/DetailsPlayer/DetailsPlayer'
import { ScrollToTop } from './utils/ScrollTop/ScrollTop'
import { Contact } from './components/Contact/Contact'
import { Login } from './components/Login/Login'
import './i18n';

function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/players' element={<Players />} />
          <Route path='/history' element={<History />} />
          <Route path='/detailsPlayer/:id' element={<DetailsPlayer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
