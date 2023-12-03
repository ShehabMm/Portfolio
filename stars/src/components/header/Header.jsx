import { useEffect, useState } from "react";
import "./Header.css";
const Header = () => {

const [showModel, setshowModel] = useState(false);

const [theme, setTheme] = useState("dark")

useEffect(()=>{
document.body.classList.toggle(theme)


},[theme])



  return (
    <header>
      <button className="show icon-menu"  onClick={()=>{

setshowModel(!showModel)

      }}/>

      <div />

      <nav>
        <ul  >
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
          <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
          <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button  onClick={()=>{

setTheme(theme =='dark'?'light-mode':theme =='light-mode'?'dark':null)
localStorage.currentMode,('dark')

      }}   className="icon-moon-o"/>

{showModel &&               (        <div className="popUp">
<button className="icon-x"  onClick={()=>{

setshowModel(false)}}/> 


<ul style={{flexDirection:'column'}}>
    <li>
      <a href="">about</a>
    </li>
    <li>
      <a href="">Articles</a>
    </li>
    <li>
    
      <a href="">Projects</a>
    </li>
    <li>
      <a href="">Speaking</a>
    </li>
    <li>

      <a href="">Contact</a>
    </li>
  </ul>


</div>
    )}

    </header>
  );
};

export default Header;
