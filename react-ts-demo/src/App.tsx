
import ShuttleA from './pages/ShuttleA'
import ShuttleB from './pages/ShuttleB'
function App() {

  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <div>
        <h1>无UI框架</h1>
        <ShuttleA></ShuttleA>
      </div>
      <div>
        <h1>antd穿梭</h1>
        <ShuttleB></ShuttleB>
      </div>

    </div>
  )
}

export default App
