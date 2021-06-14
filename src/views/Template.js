import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCalculator, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Bin2Dec from './Bin2Dec';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Template({title, subtitle}) {
    
  return (
    <Router>
        <div className="container p-2 rounded min-h-screen mx-auto">
        
            <div className="flex">
                <div className="flex-2 rounded p-3 bg-gray-50">
            
                    <ul className="min-h-screen">
                        <li className="p-3 text-xl mb-5">
                            <FontAwesomeIcon icon={faCoffee} fixedWidth/> Ideas
                        </li>
                        <li className="p-3 text-gray-600 cursor-pointer hover:text-blue-500">
                            <Link to="/">
                                <FontAwesomeIcon icon={faTachometerAlt} fixedWidth/> Painel
                            </Link>
                        </li>
                        <li className="p-3 text-gray-600 cursor-pointer hover:text-blue-500">
                            <Link to="/bin">
                                <FontAwesomeIcon icon={faCalculator} fixedWidth/> Conversor Binário
                            </Link>
                        </li>
                        {/* <li className="p-3 text-white bg-blue-500 rounded cursor-pointer">
                            <FontAwesomeIcon icon={faCalculator} fixedWidth/> Conversor Binário
                        </li> */}
                    </ul>

                </div>
                
                <div className="flex-1 p-2 rounded-r-lg">
                    <nav className="p-3">
                        <p className="text-2xl">{title ?? ''}</p>
                        <p className="text-sm">{subtitle ?? ''}</p>
                    </nav>
                    <main className="px-3">
                        <Switch>
                            <Route path="/">
                                <div>
                                    Olá, bem vindo!
                                </div>
                            </Route>
                            <Route path="/bin">
                                <Bin2Dec />
                            </Route>
                        </Switch>
                    </main>
                </div>
            </div>

        </div>
    </Router>
  );
}

export default Template;
