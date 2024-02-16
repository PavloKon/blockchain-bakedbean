import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import HomePage from '../views/home';

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default routes;