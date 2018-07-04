import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import Article from './components/article';
import Contact from './contact';
import Admin from './admin';
import ArticlesLayout from './articleslayout';
import AdsContianer from './adscontainer';
import { showArticle } from '../actions/articles.actions';
import { changeY } from '../services';
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

  handleMe(){
    this.props.showArticle('me');
    changeY(740);
  }

  handleArticles(){
    this.props.showArticle(false);
    changeY(740);
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
                        <Link to='/Contact' onClick={()=>changeY(740)}>צרו קשר</Link> 
                      </li>
                      <li>
                        <Link to='/ArticlesLayout' onClick={()=>this.handleArticles()}>מאמרים</Link> 
                      </li>
                      <li>
                        <Link to='/Article' onClick={()=>this.handleMe()}>עליי</Link>
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
                          <Route path='/Article' component={Article} />
                          <Route path='/Admin' component={Admin} />
                          <Route path='/ArticlesLayout' component={ArticlesLayout} />
                          <Route path='/Contact' component={Contact} />
                          <Redirect from='/' to="/Article" />
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

const mapStateToProps = state =>({
    article:state.article.id
  });

const mapDispatchToProps = dispatch =>({
        showArticle: id => dispatch(showArticle(id)),
    });

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
