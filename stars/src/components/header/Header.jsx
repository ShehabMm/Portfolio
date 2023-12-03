import { useEffect, useState } from "react";
import "./Header.css";
const Header = () => {
  const [showModel, setshowModel] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("currentMode"));

  useEffect(() => {
    if (theme=="dark") {
      
      document.body.classList.remove("dark");
      document.body.classList.add("light");



    }else {

      document.body.classList.remove("light");
      document.body.classList.add("dark");


    }

  }, [theme]);

  return (
    <header>
      <button
        className="show icon-menu"
        onClick={() => {
          setshowModel(!showModel);
        }}
      />

      <div />

      <nav>
        <ul>
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
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme == "light" ? "dark" : "light"
          );

          setTheme(localStorage.getItem("currentMode"));
        }}
        className="icon-moon-o"
      />

      {showModel && (
        <div className="popUp">
          <button
            className="icon-x"
            onClick={() => {
              setshowModel(false);
            }}
          />

          <ul style={{ flexDirection: "column" }}>
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
