import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="header-hero flex" >
            <img className="avatar" src={require("./avatar.JPG")} alt="avatar"/>
            <div className="intro">
              <h1 className="title">Hey, I'm Vasco de Graaff</h1>
              <h1 className="subtitle">Student, 17</h1>
            </div>

          </div>
          <div>
            <h2 className="title" style={{marginTop: '1rem'}}>Recent projects</h2>
            <h2 className="subtitle">test test</h2>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <a className="product-tile tile is-child albatross box">
                  {/* div to use later for aligning */}
                  <div>
                    <h3 className="title" >Albatross Cafe</h3>
                    <h3 className="subtitle">resteraunt website</h3>
                  </div>
                </a>
              </div>
              <div className="tile is-parent">
                <a className="product-tile tile is-child test box" href="">
                  <div>
                    <h3 className="title">title</h3>
                    <h3 className="subtitle">subtitle</h3>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h2 className="title">Weekly Progress </h2>
              <div className="tile is-ancestor" style={{marginBottom: '1rem'}}>
                <div className="tile is-parent">
                  <div className=" tile box is-child weekly" style={{margin: '0!important'}}>

                      <iframe title="Makerlog Embed" height="300" style={{width:'100%'}} scrolling="no" frameborder="0" allowtransparency="true" src="https://api.getmakerlog.com/users/897/embed"></iframe>

                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="title">Gallery</h2>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <a className="product-tile tile is-child box" href="">
                    <div>
                      <h3 className="title">title</h3>
                      <h3 className="subtitle">subtitle</h3>
                    </div>
                  </a>
                </div>
                <div className="tile is-parent">
                  <a className="product-tile tile is-child box" href="">
                    <div>
                      <h3 className="title">title</h3>
                      <h3 className="subtitle">subtitle</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div style={{marginTop: '1rem'}}>
              <h2 className="title">Get in touch</h2>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <a href="https://twitter.com/vascodegraaff" className="product-tile tile is-child box twitter">
                    <span class="fab fa-twitter icon" style={{fontSize:'3rem', color: 'white'}}></span>
                  </a>
                </div>
                <div className="tile is-parent">
                  <a href="mailto:vascodegraaff@gmail.com?subject=mail from vascodegraaff.com" className="product-tile tile is-child box mail">
                    <span class="far fa-envelope icon" style={{fontSize:'3rem', color: 'white'}}></span>
                  </a>
                </div>
                <div className="tile is-parent">
                  <a href="https://github.com/vascodegraaff" className="product-tile tile is-child box github" >
                    <span class="fab fa-github icon " style={{fontSize: '3rem', color: 'white'}}></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="flex justify-center">
              <img src={require("./logo.png")} alt="logo" style={{height: '6rem', margin: '2rem'}}></img>
            </div>
          </footer>
        </div>
        
          
      </div>
    );
  }
}

export default App;
