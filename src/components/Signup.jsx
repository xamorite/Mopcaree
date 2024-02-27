import { Link } from "react-router-dom"
import firebase from "../firebaseConfig"
import { useState } from "react"
import mo from '../mo.png'

const Signup = () => {
       
 
  const  [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')

  const submit = async(e) => {
        e.preventDefault()
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            if (user) {
              alert('account created successfully')
        }
       }
        catch (err) {
                    alert(err)
        }
      
      }
    

  return (
    <div className='text-center mx-auto w-[80vw] md:w-[35vw]'>
        <img className="mx-auto" src={mo} alt="" />
      <h1 className="big">Create an account</h1>
      <p className="text">Start your care journey today.</p>
      <form >
        <p className="text text-start">
          Email
        </p><br />
        <input type="text" value={email} placeholder="Enter your email" className="inp" onChange={(e) => setEmail(e.target.value)}/>
        <p className="text text-start">
          Password
        </p><br />
        <input type="text" value={password} placeholder="............" className="inp" onChange={(e) => setPassword(e.target.value)}/>
        <div className="flex justify-between w-full my-8">
        <span>Remember for 30 days</span> <Link className="text-[#3379C1] " to="./login">Login Now</Link>
        
        </div>

        <button
        onClick={submit}
        className="
       btn-primary 
        ">
          Continue with email
        </button>
      </form>
    </div>
  )
}

export default Signup
