import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCalculator, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Bin2Dec from './views/Bin2Dec';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App({title, subtitle}) {
  return (
    <Router>

{/* CONTAINER PRINCIPAL */}
<div className="relative min-h-screen md:flex">

{/* MENU MOBILE */}
<div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
  
  <Link to="/" class="block p-4 text-white font-bold">Ideas</Link>

  
  <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>
{/* MENU MOBILE FIM */}

{/* MENU LATERAL */}
<aside className="sidebar bg-yellow-400 text-black w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

  <Link to="/" className="text-black flex items-center space-x-2 px-4">
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
    <span class="text-2xl font-extrabold">App Ideas</span>
  </Link>

  
  <nav>
    <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">
      <FontAwesomeIcon icon={faTachometerAlt} fixedWidth/> Painel
    </Link>
    <p className="text-sm mt-5 px-4">Projetos Iniciantes</p>
    <Link to="/bin" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">
      <FontAwesomeIcon icon={faCalculator} fixedWidth/> Bin2Dec
    </Link>
  </nav>

</aside>
{/* MENU LATERAL FIM */}


<main className="flex-1 p-8">
    <Switch>
      <Route path="/bin">
          <Bin2Dec />
      </Route>
      <Route exact path="/">
          <Dashboard />
      </Route>
      <Route match="*">
        <p className="text-2xl text-red-500">404</p>
        <p className="text-red-500">Não encontrado!</p>
      </Route>
  </Switch>
</main>

</div>

    </Router>
  );
}

function Dashboard() {
  return <h2>Painel</h2>;
}

export default App;
