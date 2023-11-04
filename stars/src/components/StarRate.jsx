import { useState } from "react";

const StarRate = () => {
  const [text, setText] = useState("");
  const [array, setarray] = useState(["ali", "mona", "zaki"]);

  console.log(array);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!array.includes(text)){

      setarray([...array,text])

    }

    setText("")

  };

  return (
    <ul>
      <form onSubmit={handleSubmit}>
        <button>Add Task</button>

        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </form>


      <div style={{display:"flex", }} >{array.map((item) => {
        return (
        <ul key={Math.random()}>
        <li  style={{textDecoration:"none", listStyle:"none"}}>{item}</li>
        
        <button onClick={()=>{
console.log(item)

let ss = array.filter((j)=>j!==item)
console.log(ss);
setarray(ss)

        }}>del</button>
        </ul>
        )

      })}
      
      
      </div>


    </ul>
  );
};

export default StarRate;
