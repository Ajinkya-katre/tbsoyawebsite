import React from "react";
import Whatsapp from "./whatsapp";
import { Link } from "react-router-dom";
import navbarmenulist from '../../assets/json/navbar-menu.json'
import footerData from '../../assets/json/footer.json'
function Footer(){
    return(
        <>
        <Whatsapp/>
            <footer className="relative footer-container pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">{footerData.content.heading}</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          {footerData.content.tagline}
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          {footerData.icons.map((icon,index)=>(
            <button className="bg-sky-500 hover:bg-sky-900 rounded-full m-2">
              <i className={icon.iconname} ><a href={icon.iconlink}></a></i>
            </button>
          ))}

        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              {navbarmenulist.map((menu,index)=>(
                <li key={index}>
                   <Link to={menu.menuLink} className=" hover:bg-sky-900 text-white rounded-md px-3 py-1 text-sm font-medium m-3" aria-current="page">{menu.menuName}</Link>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300" /> 
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
        {footerData.content.copyright}
        </div>
      </div>
    </div>
  </div>
</footer>

        </>
)}

export default Footer;