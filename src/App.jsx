import { useState, useEffect } from "react"
import { supabase } from "./config/supabaseClient"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import Account from "./components/Account";
import Home from "./components/Home";
import Auth from "./components/Auth";
import './App.css'
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import User_Home_Page from "./components/User_Home_Page";
import New_Dive from "./components/New_Dive";
import Index from "./components/Index";
import Show from "./components/Show";
import Update_Dive from "./components/Update_dive";
import Search_Results from "./components/Search_Results";

function App() {
  
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      console.log(session);
    })
  }, [])

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Navbar session={session} />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/register" element={ <Register /> } />

          <Route path="/account" element={!session ? (
            <Auth /> 
          ) : (
              <Account key={session.user.id} session={session} />
          )} />

          <Route path="/dives" element={!session ? (
            <div>
              <h1>User is not logged in</h1>
              <button onClick={() => { navigate("/")}}>Go back home!</button>
            </div>
          ) : (
            <Index key={session.user.id} session={session} /> 
          )} />

          <Route path="/dives/:diveId" element={!session ? (
            <div>
              <h1>User is not logged in</h1>
              <button onClick={() => { navigate("/")}}>Go back home!</button>
            </div>
          ) : (
            <Show key={session.user.id} session={session} /> 
          )} />

          <Route path="/log-dive" element={!session ? (
            <Auth /> 
          ) : (
              <New_Dive key={session.user.id} session={session} />
          )} />



          {/* <Route path="/log-dive" element={<New_Dive onSubmit={ addDive }/>} />
          <Route path="/Dives" element={<Index userDives={ userDives } />} />
          <Route path="/Dives/:diveId" element={<Show userDives={ userDives }/>} />
          <Route path="/update/:diveId" element={<Update_Dive userDives={ userDives }  updateDive={ updateDive } deleteDive={ deleteDive } />} />
          <Route path="/divesite-search" element={<Search_Results results={ results }/> } /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

<<<<<<< HEAD
//////////////////////// Routes /////////////////////////
export default App;
import CRUDTesting from "./components/CRUDTesting"
import Login from "./components/Login";
import User_Home_Page from "./components/User_Home_Page";
import New_Entry from "./components/New_Entry";
import Index from "./components/Index";
import Show from "./components/Show";
import Update from "./components/Update";
import APItest from "./components/API-Test";
import { useState, useEffect } from 'react'

import { supabase } from '/src/config/supabaseClient'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
      async function getUserData() {
          await supabase.auth.getUser().then((value) => {
              // value.data.user
              if (value.data?.user) {
                  console.log("User: " + value.data.user);
                  setUser(value.data.user);
              }
          })
      }
      getUserData();
  }, []);

//////////////////////// CRUD /////////////////////////

////// Show a specific dive


// const params = useParams();
// let diveId = params.diveId
// console.log(params)


////// Show all of a user's dives

const [ userDives, setUserDives ] = useState([])

  async function getUserDives() {
    const { data } = await supabase
        .from('Dive_Log')
        .select()
        .eq('user_id', user.id)
    console.log("Dive Data: " + data)
    setUserDives(data)
  }

  useEffect(() => { 
    getUserDives()
}, [user]);

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

      getUserDives()

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
        <Route path="/Dives" element={<Index userDives={ userDives } />} />
        <Route path="/Dives/:diveId" element={<Show userDives={ userDives }/>} />
        <Route path="/update" element={<Update />} />
        <Route path="/apitest" element={<APItest />} />
      </Routes>
    </Router>
  )
}

//////////////////////// Routes /////////////////////////
export default App;
=======
export default App;
>>>>>>> d4244f5 (add new auth system)
