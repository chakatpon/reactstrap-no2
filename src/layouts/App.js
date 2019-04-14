import React from 'react';

import MainNavbar from '../components/MainNavbar';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Contact from './Contact';
import Footer from './Footer';



class App extends React.Component {
    render() {
        return(
            <div >
                <MainNavbar/>
                <Home/>
                <About/>
                <Profile/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;