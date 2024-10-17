
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
function handleClick(){
  alert('button clicked')
}
const handleClick2=()=>{
  alert('button2 clicked')
}
const addToFive=(num)=>{
 alert(num+5);
}
  return (
    <>
     
      <h1>React core concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>Click Me2</button>
     <button onClick={()=>{alert('third button clicked')}}>Click Me3</button>
     <button onClick={()=>addToFive(4)}>Click Me4</button>

    </>
  )
}

export default App
