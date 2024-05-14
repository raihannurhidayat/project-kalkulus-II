import React from 'react';
import { NavLink } from 'react-router-dom'
import ReactjsImage from '../assets/images/Reactjs.png'
import HtmlImage from '../assets/images/Html.png'
import CssImage from '../assets/images/Css.png'
import VscodeImage from '../assets/images/Vscode.png'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="navlinkfooter">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/ourteam">Our Team</NavLink>
        </div>
        <div>
            <div className="jts">Tech Stack</div>
        </div>
        <div className="techstack">
            <img src={ReactjsImage} className="imgs"/>
            <img src={HtmlImage} className="imgs"/>
            <img src={CssImage} className="imgs"/>
            <img src={VscodeImage} className="imgs"/>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p style={{textAlign: "center"}}>&copy; 2024 KALDER. All Rights Reserved || Designed by Kelompok 4</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
