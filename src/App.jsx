import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingObject from "./components/PricingObject/PricingObject";
import Datachart from "./components/DataChart/Datachart";
import axios from "axios";
import StudentsData from "./components/StudentDataAxios/StudentsData";

function App() {

  const loadData = fetch('pricingData.json').then(res =>res.json());

  const studentData = [
  { id: 1, name: "Adnan Sami", physics: 85, chemistry: 78, math: 92 },
  { id: 2, name: "Sara Islam", physics: 72, chemistry: 88, math: 95 },
  { id: 3, name: "Rafiq Ahmed", physics: 90, chemistry: 82, math: 88 },
  { id: 4, name: "Mehedi Hasan", physics: 65, chemistry: 70, math: 60 },
  { id: 5, name: "Nusrat Jahan", physics: 88, chemistry: 91, math: 94 },
  { id: 6, name: "Tanvir Hossain", physics: 55, chemistry: 62, math: 58 },
  { id: 7, name: "Ayesha Siddiqua", physics: 94, chemistry: 85, math: 99 }
];

const dataPromise = axios('studentsData.json');

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}

      <main>
        <Suspense fallback={<span className="loading loading-spinner text-info "></span>}>
          <PricingObject loadData={loadData}></PricingObject>
        </Suspense>


        <Datachart studentData={studentData}></Datachart>

        <Suspense fallback={<span className="loading loading-spinner text-info "></span>}>

        <StudentsData dataPromise={dataPromise}></StudentsData>
        
        </Suspense>
      </main>

      
    </>
  );
}

export default App;
