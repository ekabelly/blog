import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import Me from './me';
import Admin from './admin';
import Contact from './contact';
import ArticlesLayout from './articleslayout';
import AdsContianer from './adscontainer';
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
      top:740,
      left:0,
      behavior:'smooth'
    });
  }

  renderAds(){
    if (window.location.pathname === '/admin') {
      return null;
    }
    return <AdsContianer />;
  }

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
                      {this.renderAds()}
                    </div>
                    <div className='col-md-9'>
                      <main>
                        <Switch>
                          <Route path='/Me' component={Me} />
                          <Route path='/Admin' component={Admin} />
                          <Route path='/ArticlesLayout' component={ArticlesLayout} />
                          <Route path='/Contact' component={Contact} />
                          <Redirect from='/' to="/me" />
                        </Switch>
                      </main>
                    </div>
                    <div className='col-md-3 hidden-md hidden-lg'>
                      {this.renderAds()}
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
