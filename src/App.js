import React,{Component} from "react";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Student from "./Student";

import './style.css'
import PageNotFound from "./PageNotFound";


class App extends Component{
    render(){
        return(
           <div>
                      
               <Router>
                 <Navbar/>
                    <Routes>
                       
                       <Route path='/' element={<Home/>}/>
                       <Route path='/student' element={<Student/>}/>
                       <Route path='/contact' element={<Contact/>}/>
                       <Route path='/*' element={<PageNotFound/>}/>

                   </Routes>
               </Router>

           </div>
        )
    }
}

export default App

