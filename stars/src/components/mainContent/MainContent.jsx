import "./MainContent.css";
import {useState} from 'react';



const MainContent = () => {
const [alter, setAlter]=useState("all")

  return (
    <main className="main-content">
      <section className="left">
        <button className="active">All Projects</button>


        <button onClick={()=>{

setAlter('CSS')

        }} className={alter==="CSS"? "active":null}  >HTML & CSS</button>


        <button onClick={()=>{

setAlter('Javascript')

        }} className={alter==='Javascript'? "active":null} >Javascript</button>




   <button onClick={()=>{

 setAlter('Reactjs')

         }} className={alter==='Reactjs'? "active":null} >Reactjs & MUI</button>
        <button onClick={()=>{

setAlter('Node')

       }} className={alter==='Node'? "active":null} >Node &Express</button>






      </section>


      <section className="right">

{ ["aa", "bb", "cc", "dd","ee", "ll"].map((item)=>{


return(


  <article  key={item}>
  <img
    src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312049/samples/ecommerce/leather-bag-gray.jpg"
    alt=""
  />
  <div className="box">
    <h1>Landing Page2</h1>
    <p>
      This is the bigges project using mongo db and reactjs html css
      jsva script{" "}
    </p>
  </div>
  <div className="links-social">
    <div className="inner-parts">
      <div className="icon-link"></div>
      <div className="icon-github"></div>
    </div>

    <div className="arrow20">
      <a className="linka" href="">
        more
      </a>

      <span className="icon-arrow-right2"></span>
    </div>
  </div>
</article>



)



})        }

      </section>








    </main>
  );
};

export default MainContent;
