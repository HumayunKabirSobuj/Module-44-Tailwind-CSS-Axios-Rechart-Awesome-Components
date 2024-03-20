
import Nav from "./component/Nav"
import PriceOptions from "./component/PriceOptions"
import LineCharts from "./component/LineCharts"
import Phones from "./Phones"
// import Navbar from "./component/Navbar"

function App() {


  return (
    <div className="container mx-auto">
      <Nav></Nav>
      {/* <Navbar></Navbar> */}
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <Phones></Phones>
    </div>
  )
}

export default App
