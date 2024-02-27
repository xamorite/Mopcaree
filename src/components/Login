import { Link } from "react-router-dom"
import firebase from "../firebaseConfig"
import { useState } from "react"

const Login = () => {
       
 
  const  [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')

  const submit = async(e) => {
        e.preventDefault()
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            if (user) {
              alert('Login successful')
        }
       }
        catch (err) {
                    alert(err)
        }
      
      }
    

  return (
    <div className='text-center mx-auto w-[80vw]'>
      <h1 className="big">Log in to your account</h1>
      <p>Welcome back! please enter your details</p>
      <form >
        <p className="text">
          Email
        </p><br />
        <input type="text" value={email} placeholder="Enter your email" className="inp" onChange={(e) => setEmail(e.target.value)}/>
        <p className="text">
          Password
        </p><br />
        <input type="text" value={password} placeholder="............" className="inp" onChange={(e) => setPassword(e.target.value)}/>
        <p>Remember for 30 days</p> <Link to="./login">Login Now</Link>
        <button
        onClick={submit}
        className="
        btn-primary
        ">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
