import { Container } from "react-bootstrap";
import SignUp from "./Components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
import DisplayPage from "./Components/DisplayPage";



function App() {
  return (
    
   <Container className="d-flex align-items-center justify-content-center" style={ {minHeight: "100vh"}}>
    
    <div className="w-100" style={{maxWidth: '400px'}}>
      <Router>
        <AuthProvider>
        
          <Routes>
          {/* <PrivateRoute exact path="/" Component={Dashboard}></PrivateRoute> */}
          {/* <Route  exact path='/' element= {<PrivateRoute> <Dashboard />
         </PrivateRoute>}/> */}
         <Route exact path='/' Component={DisplayPage}/>
            <Route element={<PrivateRoute/>}>
            <Route   path='/dashboard' element= {<Dashboard/> }></Route>
            <Route   path='/update-profile' element= {<UpdateProfile/> }></Route>
            

            </Route>
            <Route path="/signup" Component={SignUp}></Route>
          
            <Route path="/login" Component={Login}></Route>
            <Route path="/forgot-password" Component={ForgotPassword}></Route>
          </Routes>
        </AuthProvider>
      </Router>

   
    </div>
    </Container>
   
  );
}

export default App;
