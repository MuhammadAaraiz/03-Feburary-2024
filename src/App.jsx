import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const state = useSelector((state) => state)
  console.log("state", state)
  return (
    <>
      <div className='main_div'>
        Name : {state.userdata.user_name}
        <br />
        <br />
        City : {state.userdata.city}
        <br />
        <br />
        country : {state.userdata.country}
      </div>
    </>
  )
}

export default App
