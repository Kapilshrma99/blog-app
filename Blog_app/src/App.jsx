import authService from "./appwrite/auth";
import './App.css'
import { useState,useEffect } from 'react';
import {useDispatch} from "react-redux";
import {login, logout} from "./store/authSlice"
import { Header ,Footer} from "./components";
function App() {
  const [loading, setLoading]=useState(true)
  const dispatch=useDispatch();


  useEffect(()=>{
    authService.getCurrAccount()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))

  })

  return !loading ? (
    <div className="min-h-sc flex flex-wrape content-between bg-gray-400">
      <div className="w-full block">
          <Header />
          <main>
           TODO {/* {outlet} */}
          </main>
          <Footer/>
      </div>
    </div>
  ) : null;
}

export default App
