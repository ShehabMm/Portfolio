import { useState } from "react";
import "./Header.css";
const Header = () => {

const [showModel, setshowModel] = useState(false);

  return (
    <header>
<div className="icon-menu"></div>
      <button className="show"  onClick={()=>{

setshowModel(!showModel)

      }}>Show</button>

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
      <button>light</button>

{showModel &&               (        <div className="popUp">
<button  onClick={()=>{

setshowModel(false)}}> 
X
</button>
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
