import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingObject from "./components/PricingObject/PricingObject";

function App() {

  const loadData = fetch('pricingData.json').then(res =>res.json());

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}

      <main>
        <Suspense fallback={<span className="loading loading-spinner text-info "></span>}>
          <PricingObject loadData={loadData}></PricingObject>
        </Suspense>
      </main>

      
    </>
  );
}

export default App;
