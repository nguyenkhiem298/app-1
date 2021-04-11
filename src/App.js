import React from 'react';
import logo from './template/img/logo.png';
import campus from './template/img/london.png'
import './App.css';
import img1 from './template/img/banner.png'

export default class App extends React.Component {

  hideMenu() {
    const el = document.getElementById("navLink");
    el.style.right = "-200px"
  }

  showMenu() {
    const el = document.getElementById("navLink");
    el.style.right = "0"
    
  }
  render() {
    return (
      <div className="App">
        <section className="App-header">
  
          {/* ------------- navigation ------------- */}
          <nav>
            <a href=""> <img src={logo}/></a>
            <div className="nav-links" id="navLink">
              {/* <i className="fa fa-spinner fa-spin"/> */}
              <i className="fa fa-times" onClick={this.hideMenu}/>
              <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">COURSE</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">CONTACT</a></li>
              </ul>
            </div>
            <i className="fa fa-bars" onClick={this.showMenu}/>
          </nav>
  
          {/* --------- text-box ---------- */}
          <div className="text-box">
            <h1>World's Biggest University</h1>
            <p>Making website is now one of the easiest things in the world. You just need to learn HTML, CSS, <br/> JavaScript and you are good to go</p>
            <a className="hero-btn" href="#">Visit Us To Known More</a>
          </div>
          {/* --------- end = text-box ---------- */}
        </section>
        {/* ------------- end section nav ------------ */}


        {/* -------- Course -------- */}
        <section className="course">
          <h1>Courses We Offer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <div className="course-row">
            <div className="course-col">
              <h3>Intermediate</h3>
              <p>You can type lorem and then tab and it will expand into a paragraph of completely random sentences. For example, lorem abbreviation would generate a 2-paragraph text. We can change this value and customise our text. Bonus: furrier versions of this one, but outside VS Code, are Cat Ipsum and Doggo Ipsum</p>
            </div>
            <div className="course-col">
              <h3>Degree</h3>
              <p>You can type lorem and then tab and it will expand into a paragraph of completely random sentences. For example, lorem abbreviation would generate a 2-paragraph text. We can change this value and customise our text. Bonus: furrier versions of this one, but outside VS Code, are Cat Ipsum and Doggo Ipsum</p>
            </div>
            <div className="course-col">
              <h3>Post Graduation</h3>
              <p>You can type lorem and then tab and it will expand into a paragraph of completely random sentences. For example, lorem abbreviation would generate a 2-paragraph text. We can change this value and customise our text. Bonus: furrier versions of this one, but outside VS Code, are Cat Ipsum and Doggo Ipsum</p>
            </div>
          </div>
        </section>
        {/* -------- End Course -------- */}

        {/* ---------- Campus ------------ */}
        <section className="campus">
            <h1>Our Global Campus</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <div className="campus-row">
              <div className="campus-col">
                <img src={campus}></img>
              </div>
            </div>
        </section>
        {/* ---------- End Campus ------------ */}

      </div>
    );
  }
}

