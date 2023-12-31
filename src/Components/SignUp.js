import React, {useRef, useState} from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp(){
         const emailRef = useRef()
         const passwordRef = useRef()
         const passwordConfirmRef = useRef()
        
         const { signup } = useAuth()
         const [error, setError] = useState('')
         const [loading, setLoading] = useState(false)
         const navigate = useNavigate()

         async function handleSubmit(e) {
            e.preventDefault()

            if(passwordRef.current.value !== passwordConfirmRef.current.value){
                return setError('Password didnt Matched')
            }

            try{
                setError('')
                setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/dashboard")
            }catch(error){
                console.log(error)
                setError('Failed To Craete An Account')
            }
            setLoading(false)
         }
    return (

        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4" >Sign Up</h2>
                  
                    {/* {currentUser && currentUser.email} */}
                    {
                        error && <Alert variant="danger">{error}</Alert>
                    }
                    <Form onSubmit={handleSubmit}>
                    
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                        </Form.Group>
                       <Button disabled={loading} type="submit"  className="w-100 mt-4" >SignUp</Button>
                    </Form>
                </Card.Body>
                
            </Card> 
            <div className="w-100 text-center mt-2">
                Already Have An Account? <Link to="/login">Log In</Link>
            </div>
        </div>
    )
}