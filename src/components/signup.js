import  { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
import Footer from './footer.js'
function Signup() {

  const history=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [mno,setmno]=useState('')

    
    async function submit(e){
        e.preventDefault();
  
        try{
            const res=await axios.post("http://localhost:8000/signup",{
                email,password,name,mno
            })
              if(res.data==="exist"){
                alert("User already exists")
                
              }
              else if(res.data==="notexist"){
                history("/")
              }
            }
        catch(e){
            console.log(e)
        }
        }
  return (
    <div>
        <div style={{position:'relative',minHeight:100+'vh'}} className="container-fluid">
        <div className="row text-center text-white bg-primary mb-3 p-3" style={{borderBottomLeftRadius:60+"%",borderBottomRightRadius:60+"%"}}><h2>E-commerce</h2></div>
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5 text-center">
                <img src="./images/login.jfif" className="img-fluid" alt='login' ></img>
            </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{height:800+'px'}}>
          <form >
            <h5 className="text-center ">Login</h5>
            <div className="form-outline mb-4">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" onChange={(e)=>{setName(e.target.value)}} name="name" id="name" placeholder="Enter Your Name" required /><br/>            
            </div>
            <div className="form-outline mb-4">
                <label htmlFor="email">Email</label>
                <input className="form-control" type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" placeholder="Enter a valid E-mail " required /><br/>            
            </div>
            <div className="form-outline mb-4">
                <label htmlFor="mno">Mobile Number</label>
                <input className="form-control" type="number" onChange={(e)=>{setmno(e.target.value)}} name="mno" id="mno" placeholder="Enter a valid Mobile Number" required /><br/>            
            </div>
  
            <div className="form-outline mb-3">
              <label htmlFor="password">Password</label>
              <input className="form-control" type="password" onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" placeholder="Enter your Password " required/><br/> 
            </div>

             <div className="d-flex justify-content-center ">
           <input onClick={submit}  style={{paddingLeft: 2.5+'rem', paddingRight: 2.5+'rem'}} type="submit" id="submitDetails" name="submitDetails" className="btn btn-primary btn-lg registerbtn" value="Sign Up" />  
            </div>
             <br/>
         <div className="d-flex justify-content-center align-items-center mt-2">
        <p className="small fw-bold mb-0 me-2">Don't have an account?</p>
        <Link to="/">Login</Link>
        </div>
 
          </form>
        </div>
       <Footer />
      </div>
    </div>
  </div>
  )
}

export default Signup