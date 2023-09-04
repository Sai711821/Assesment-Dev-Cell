import React, {useRef, useState} from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfile(){
         const emailRef = useRef()
         const passwordRef = useRef()
         const passwordConfirmRef = useRef()
         const { currentUser, updatePassword, updateEmail } = useAuth()
         const [error, setError] = useState('')
         const [loading, setLoading] = useState(false)
         const navigate = useNavigate()

       function handleSubmit(e) {
            e.preventDefault()

            if(passwordRef.current.value !== passwordConfirmRef.current.value){
                return setError('Password didnt Matched')
            }

                    const promises = []
                    setError('')
                setLoading(true)

                    if(emailRef.current.value !== currentUser.email){
                        promises.push(updateEmail(emailRef.current.value))
                    }
                    if(passwordRef.current.value){
                        promises.push(updatePassword(passwordRef.current.value))
                    }
                    Promise.all(promises).then(()=>{
                        navigate('/')
                    }).catch(() => {
                        setError("Failed to update account")
                    }).finally(() => {
                        setLoading(false)
                    })
                }

        //     try{
               
        //     // await signup(emailRef.current.value, passwordRef.current.value)
        //     navigate("/")
        //     }catch(error){
        //         console.log(error)
        //         setError('Failed To Craete An Account')
        //     }
        //     setLoading(false)
        //  }
    return (

        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4" >UpdateProfile</h2>
                  
                    {/* {currentUser && currentUser.email} */}
                    {
                        error && <Alert variant="danger">{error}</Alert>
                    }
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef}  placeholder="Leave blank to keep the same"></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef}  placeholder="Leave blank to keep the same"></Form.Control>
                        </Form.Group>
                       <Button disabled={loading} type="submit"  className="w-100 mt-4" >UpdateProfile</Button>
                    </Form>
                </Card.Body>
                
            </Card> 
            <div className="w-100 text-center mt-2">
         <Link to="/dashboard">Cancel</Link>
            </div>
        </div>
    )
}