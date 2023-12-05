import Catalog from "./Components/Catalog";
import Navbar from "./Components/Navbar";
import ClicksDemo from "./Components/demo/ClicksDemo";
import StateDemo from "./Components/demo/StateDemo";
import Counter from "./Components/demo/Counter";
import ColorForm from "./Components/demo/ColorForm";
import UserForm from "./Components/demo/UserForm";

function App() {
  return <>
    <header>
      <Navbar /> 
      <h1>Shahar Eccommerce</h1>
    </header>
    <main>
      {/* <Catalog /> */}
      {/* <ClicksDemo /> */}
      {/* <StateDemo /> */}
      {/* <Counter /> */}
      {/* <ColorForm /> */}
      <UserForm />
    </main>
    <footer>
      <p>
        all rights reserved to me
      </p>
    </footer>
  </>;
}

export default App
