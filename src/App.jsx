import './App.css'
import HomePage  from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import {Router} from './Router.jsx'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/search/:query',
    component: SearchPage,
  }

]

function App() {
  return (
   <main>
    <Router routes={routes} defaultComponent={Page404}/>
   </main>
  )
}

export default App
