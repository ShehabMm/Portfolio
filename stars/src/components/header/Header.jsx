import { useState } from "react";
import "./Header.css";
const Header = () => {

const [showModel, setshowModel] = useState(false);

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
      <button className="icon-moon-stroke"/>

{showModel &&               (        <div className="popUp">
<button className="icon-cancel-circle"  onClick={()=>{

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
