// import { FaStar } from "react-icons/fa";
// import { useState } from "react";
// import './star.css'
// const StarRate = () => {
//   const [ratings, setRatings] = useState(null);

//   return (
//     <div className="main"style={{ display: "flex", flexDirection: "row", gap: 6 }}>

//       {[...Array(5)].map((item, index) => {
//         const currentRate = index + 1;
//         return (
//           <div  key={item}>
//             <label>
//               <input
//                 style={{ display: "none" }}
//                 value={currentRate}
//                 type="radio"
//                 name="rate"
//                 onClick={() => {
//                   setRatings(currentRate);
//                 }}
//               />

//               <FaStar className="star"
//                 size={30}
//                 color={currentRate <= (null || ratings) ? "yellow" : "black"}
//               />
//             </label>

//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default StarRate;

import { FaStar } from "react-icons/fa";
import "./star.css";
import { useState } from "react";

const StarRate = () => {
  const [list] = useState(["red", "green", "orange", "blue"]);
  const [text, setText] = useState("");

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
    </div>
  );
};

export default StarRate;
