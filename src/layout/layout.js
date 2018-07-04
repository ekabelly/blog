import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import Me from './me';
<<<<<<< HEAD
import Contact from './contact';
import ArticlesLayout from './articleslayout';
import AdsContiner from './adscontainer';
=======
import Admin from './admin';
import Contact from './contact';
import ArticlesLayout from './articleslayout';
import AdsContianer from './adscontainer';
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
import '../App.css';

class Layout extends Component {
  onLoad(){
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");

    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }

  componentDidMount(){
    this.onLoad();
  }

  changeY(){
    window.scrollTo({
<<<<<<< HEAD
      top:640,
=======
      top:740,
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
      left:0,
      behavior:'smooth'
    });
  }

<<<<<<< HEAD
=======
  renderAds(){
    if (window.location.pathname === '/admin') {
      return null;
    }
    return <AdsContianer />;
  }

>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className='image-container'>
              <header className="app-header">
                <nav className='navbar navbar-default' id="navbar">
                  <div className='container'>
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <Link to='/Contact' onClick={()=>this.changeY()}>צרו קשר</Link> 
                      </li>
                      <li>
                        <Link to='/ArticlesLayout' onClick={()=>this.changeY()}>מאמרים</Link> 
                      </li>
                      <li>
                        <Link to='/Me' onClick={()=>this.changeY()}>עליי</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>
            </div>
            <div className='content container-fluid'>
              <div className='row'>
                <div className='col-md-10 col-md-offset-1 container-fluid'>
                  <div className='row'>
                    <div className='col-md-3 hidden-sm hidden-xs'>
<<<<<<< HEAD
                      <AdsContiner />
=======
                      {this.renderAds()}
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
                    </div>
                    <div className='col-md-9'>
                      <main>
                        <Switch>
                          <Route path='/Me' component={Me} />
<<<<<<< HEAD
=======
                          <Route path='/Admin' component={Admin} />
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
                          <Route path='/ArticlesLayout' component={ArticlesLayout} />
                          <Route path='/Contact' component={Contact} />
                          <Redirect from='/' to="/me" />
                        </Switch>
                      </main>
                    </div>
                    <div className='col-md-3 hidden-md hidden-lg'>
<<<<<<< HEAD
                      <AdsContiner />
=======
                      {this.renderAds()}
>>>>>>> be76a1ff3e7f75def722bd8aa0457aafcc92ec7d
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(Layout);
