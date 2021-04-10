import React,{Component} from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
class Home extends Component{
    
    render(){
        return (            
            <React.Fragment>
                <Header/>
                <Navbar/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;