import HappyBirthdayCard from './HappyBirthdayCard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Greetings from './Greetings'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HappyBirthdayCard />}></Route>
        <Route path='/greetings' element={<Greetings />}></Route>
      </Routes>
    </Router>
  )
}

export default App
