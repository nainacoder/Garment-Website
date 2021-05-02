import './App.css';
import Navbar from './components/homepage/Navbar2'
import Home from './components/homepage/Home'
import Footer from './components/homepage/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/homepage/Login'


import MenTee from './components/Product details/MenT-Shirt'
import MenCoats from './components/Product details/MenCoats'
import MenShirts from './components/Product details/MenShirt'
import MenPants from './components/Product details/MenPants'
import WomenKurti from './components/Product details/WomenKurti'
import WomenTops from  './components/Product details/WomenTops'
import WomenTee from './components/Product details/WomenT-Shirt'
import WomenSweater from './components/Product details/WomenSweater'
import WomenJeans from './components/Product details/WomenJeans'
import WomenSkirts from './components/Product details/WomenSkirts'
import WomenPants from './components/Product details/WomenPants'
import WomenDresses from './components/Product details/WomenDresses'
import WomenLeatherCoat from './components/Product details/WomenLeatherCoat'
import KidsShirt from './components/Product details/KidsShirt'
import KidsTee from './components/Product details/KidsT-Shirt'
import KidsTops from './components/Product details/KidsTops'
import KidsPants from './components/Product details/KidsPants'
import KidsJacket from './components/Product details/KidsJacket'
import KidsFrock from './components/Product details/KidsFrock'
import KidsSkirts from './components/Product details/KidsSkirts'
import KidsJeans from './components/Product details/KidsJeans'

 
function App() {

    return (
      <Router>
        <div className="app">
  
          <Switch>
         

            <Route exact path="/login">
              <Navbar/>
              <Login/>
              <Footer/>
            </Route>

            <Route exact path='/Men-TopWear-T-Shirt'>
              <Navbar/>
              <MenTee/>
              <Footer/>
            </Route>


            <Route exact path="/Men-TopWear-Coats">
              <Navbar/>
              <MenCoats/>
              <Footer/>
            </Route>

            <Route exact path="/Men-TopWear-Shirt">
              <Navbar/>
              <MenShirts/>
              <Footer/>
            </Route>

            <Route exact path="/Men-BottomWear-Pants">
              <Navbar/>
              <MenPants/>
              <Footer/>
            </Route>

            
            <Route exact path="/Women-TopWear-Kurti">
              <Navbar/>
              <WomenKurti/>
              <Footer/>
            </Route>

            <Route exact path="/Women-TopWear-Tops">
              <Navbar/>
              <WomenTops/>
              <Footer/>
            </Route>
            <Route exact path="/Women-TopWear-T-Shirt">
              <Navbar/>
              <WomenTee/>
              <Footer/>
            </Route>
            <Route exact path="/Women-TopWear-Sweater">
              <Navbar/>
              <WomenSweater/>
              <Footer/>
            </Route>
            <Route exact path="/Women-BottomWear-Jeans">
              <Navbar/>
              <WomenJeans/>
              <Footer/>
            </Route>
            <Route exact path="/Women-BottomWear-Skirts">
              <Navbar/>
              <WomenSkirts/>
              <Footer/>
            </Route>
            <Route exact path="/Women-BottomWear-Pants">
              <Navbar/>
              <WomenPants/>
              <Footer/>
            </Route>
            <Route exact path="/Women-Dresses-Dresses">
              <Navbar/>
              <WomenDresses/>
              <Footer/>
            </Route>

            <Route exact path="/Women-Dresses-LeatherCoat">
              <Navbar/>
              <WomenLeatherCoat/>
              <Footer/>
            </Route>

            <Route exact path="/Kids-TopWear-Shirt">
              <Navbar/>
              <KidsShirt/>
              <Footer/>
            </Route>

            <Route exact path="/Kids-TopWear-T-Shirt">
              <Navbar/>
              <KidsTee/>
              <Footer/>
            </Route>


            <Route exact path="/Kids-TopWear-Tops">
              <Navbar/>
              <KidsTops/>
              <Footer/>
            </Route>

            
            <Route exact path="/Kids-BottomWear-Pants">
              <Navbar/>
              <KidsPants/>
              <Footer/>
            </Route>


            <Route exact path="/Kids-TopWear-Jacket">
              <Navbar/>
              <KidsJacket/>
              <Footer/>
            </Route>

            <Route exact path="/Kids-Dresses-Frock">
              <Navbar/>
              <KidsFrock/>
              <Footer/>
            </Route>

            <Route exact path="/Kids-BottomWear-Skirts">
              <Navbar/>
              <KidsSkirts/>
              <Footer/>
            </Route>

            <Route exact path="/Kids-BottomWear-Jeans">
              <Navbar/>
              <KidsJeans/>
              <Footer/>
            </Route>


            <Route exact path='/'>
              <Navbar />
              <Home />
              <Footer />
              
            </Route>
          </Switch>
  
        </div>
      </Router>
    );
}

export default App;
