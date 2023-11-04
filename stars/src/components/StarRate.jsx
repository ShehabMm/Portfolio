
import { FaStar } from "react-icons/fa";
import "./star.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../Redux/imgSlice'
import axios from 'axios'

const StarRate = () => {
  const [list] = useState(["red", "green", "orange", "blue"]);
  const [text, setText] = useState("");
  const { imgs } = useSelector((state) => state.imgSlice)
  const [contain, setContain] = useState([]);
  const dispatch = useDispatch()
const sorted = contain.map((item)=> item.first_name ).sort((a,b)=>a.localeCompare(b))
console.log(sorted)


  const getSata = async () => {

    try {
      const data = await axios.get('https://reqres.in/api/users')
      setContain(data.data.data)
    } catch (error) {
      console.log(error.message);
    }


  }


  useEffect(() => {
    dispatch(getData())
    getSata()

  }, [dispatch])


  let searchResault = list.filter((item) =>
    item.toLowerCase().includes(text.toLowerCase())
  );

  const [rating, setRating] = useState(null);
  return (
    <div className="main">
      <div>
        <input
          type="text"
          placeholder="Search now"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <ul>
          {searchResault.map((item, index) => {
            return (
              <li
                style={{ textDecoration: "none", listStyle: "none" }}
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      {[...Array(5)].map((item, index) => {
        const currentRate = index + 1;
        return (
          <div className="main" key={index}>
            <label>
              <input
                name={rating}
                style={{ display: "none" }}
                onClick={() => {
                  setRating(currentRate);
                }}
                type="radio"
                value={currentRate}
              />
              <FaStar
                size={30}
                color={currentRate <= rating ? "orange" : "grey"}
                className="star"
              />
            </label>
          </div>
        );
      })}


      <div>
        {sorted.map((item) => {

          return (
            <div key={Math.random()}>

              <h2 >{item}</h2>


            </div>
          )


        })}



      </div>
    </div>
  );
};

export default StarRate;
