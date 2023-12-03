import Catalog from "./Components/Catalog.";
import Navbar from "./Components/Navbar";
import ClickDemo from "./Components/demo/clickDemo";
import StateDemo from "./Components/demo/StateDemo";
function App() {
  // const style = {
  //   fontSize: "300px",
  //   display:"flex",
  //   alignItems:"center",
  //   textaling:"center"
  // };

  return (<>
    <header>
      <Navbar/>
      <div className="header12">
      <h1>Ecommerse</h1>

      </div>
    </header>
    <main>
      <div className="catalog">
     <Catalog/>
    </div>
    <div className="button">

     <ClickDemo/>
    </div>
    <div className="statedemo">
      <StateDemo/>
    </div>
    </main>
    <footer>
      <p>all rigth reserve to me</p>
    </footer>
    </>
    
  );
}


export default App
