import "./MainContent.css";
import { useState } from "react";
import { myProject } from "../MyProjects";
import {useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const MainContent = ({setAppear}) => {
  const [alter, setAlter] = useState("all");

  const [arr, setArr] = useState(myProject);



useEffect(()=>{

window.addEventListener("scroll", ()=>{

if (scrollY > 300){

  setAppear(true)
}else{

  setAppear(false)
}

})

},[setAppear])

  return (
    <main className="main-content">
      <section className="left">
        <button
          onClick={() => {
            setAlter("all");
            setArr(myProject)

          }}
          className={alter === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            setAlter("CSS");

            const filtered = myProject.filter((item) => {
              return item.category === "css";
            });

            setArr(filtered);
          }}
          className={alter === "CSS" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            setAlter("Javascript");
          }}
          className={alter === "Javascript" ? "active" : null}
        >
          Javascript
        </button>
        <button
          onClick={() => {
            setAlter("Reactjs");
            const filter = myProject.filter((item) => {
              return item.category === "react";
            });

            setArr(filter);
          }}
          className={alter === "Reactjs" ? "active" : null}
        >
          Reactjs & MUI
        </button>
        <button
          onClick={() => {
            setAlter("Node");
          }}
          className={alter === "Node" ? "active" : null}
        >
          Node &Express
        </button>
      </section>
      <section  className="right">
        <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article 
            layout 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            key={item.imgPath}>
              <img
                src={item.imgPath}
                alt="image"
              />
              <div className="box">
                <h1>{item.projectTitle}</h1>
                <p>
                  This is the bigges project using mongo db and reactjs html css
                  jsva script
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
                  <div className="icon-arrow-right2"></div>
                </div>
              </div>
            </motion.article>
          );

        })}
                  </AnimatePresence>

      </section>
    </main>
  );
};

export default MainContent;
