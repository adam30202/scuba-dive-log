import CRUDTesting from "./components/CRUDTesting"
import Login from "./components/Login";
import User_Home_Page from "./components/User_Home_Page";
import New_Entry from "./components/New_Entry";
import Index from "./components/Index";
import Show from "./components/Show";
import Update from "./components/Update";
import APItest from "./components/API-Test";
import { supabase } from '/src/config/supabaseClient'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

//////////////////////// CRUD /////////////////////////

////// Add to dive log

async function addDive(diveLogObject) {
  const { data } = await supabase
      .from('Dive_Log')
      .insert({
          dive_number: diveLogObject.diveNum,
          date: diveLogObject.date,
          dive_site: diveLogObject.diveSite,
          max_depth: diveLogObject.maxDepth,
          bottom_time: diveLogObject.bottomTime,
          dive_type: diveLogObject.diveType,
          weather: diveLogObject.weather,
          water_conditions: diveLogObject.waterConditions,
          water_temperature: diveLogObject.waterTemperature,
          body_of_water: diveLogObject.bodyOfWater,
          equipment: diveLogObject.equipment,
          dive_buddy: diveLogObject.buddy,
          dive_company: diveLogObject.diveCompany,
          overall_feeling: diveLogObject.overallFeeling,
          user_id: diveLogObject.user_id
      })
}

//////////////////////// CRUD /////////////////////////

//////////////////////// Routes /////////////////////////

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/crudtest" element={<CRUDTesting />} />
        <Route path="/userhome" element={<User_Home_Page />} />
        <Route path="/newentry" element={<New_Entry onSubmit={ addDive }/>} />
        <Route path="/index" element={<Index />} />
        <Route path="/show" element={<Show />} />
        <Route path="/update" element={<Update />} />
        <Route path="/apitest" element={<APItest />} />
      </Routes>
    </Router>
  )
}

//////////////////////// Routes /////////////////////////
export default App;
