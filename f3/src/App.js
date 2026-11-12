import {useState} from "react"
const App=()=>{
  const [count,setCount]=useState(0)
  const [name,setName]=useState("pranav")
  const [fo,setFo]=useState("")
  const Inc=()=>{
    setCount(count+1)
  }
  const Dec=()=>{
    setCount(count-1)
  }
  const Reset=()=>{
    setCount(0)
  }
  const cha=(e)=>{
    setName(e.target.value)

  }
  const final=()=>{
    setFo(name)
  }
  return(
    <>
    <h1>CSEC</h1>
    <h1>{count}</h1>
    <button onClick={Inc}>Inc</button>
    <button onClick={Dec}>Dec</button>
    <button onClick={Reset}>Reset</button>
    <h1>{name}</h1>
    <input onChange={cha}value={name}/>
    <h1>{fo}</h1>
    <button onClick={final}>Final</button>
    </>
  )
}

export default App