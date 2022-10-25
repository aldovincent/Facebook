import Home from "./Pages/Home/Home";
import Login from "./Pages/Home/Login/Login";
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Registration from "./Pages/Home/Registration/Registration";
import Profile from "./Pages/Home/Profile/Profile";
 
function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>

    <Route exact path='/' element={<Home/>} />
    <Route exact path='/login' element={<Login />}/>
    <Route exact path='/registration' element={<Registration/>}/>
    <Route exact path='/Profile' element={<Profile/>}/>
    
  </Routes>
</BrowserRouter>
</>
  )
}

export default App;
