import React,{ useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import DisplayGreets from './DisplayGreets';


export default function DashBoard () {
    const[error, setError] = useState("")

    const{ currentUser, logout} = useAuth();
    const navigate = useNavigate()

   async function handleLogout(){
            setError('')

            try{
                await logout()
                navigate('/')
               
            }catch{
                setError('Fail To Logout')
            }

    }
    // function greetingUser({ username }) {
    //     const currentTime = new Date().getHours();
        
      
    //     if (currentTime >= 0 && currentTime < 12) {
    //       setGreeting('Good Morning');
    //     } else if (currentTime >= 12 && currentTime < 17) {
    //       setGreeting('Good Afternoon');
    //     } else {
    //       setGreeting('Good Evening');
    //     }
      
        
    //   }
  return (
  <>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4" >Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong > Email:</strong>{currentUser.email}
                <DisplayGreets/>
                
                

                {/* {
                    
                    currentUser && <h1>{greeting}</h1>
                } */}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
   
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                 <Button variant='link' onClick={handleLogout}>Log Out</Button>
            </div>

  </>
  )
  }
