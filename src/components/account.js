import { useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useState } from 'react'
import Footer from './footer.js'
function Account() {
  const history=useNavigate()
    const location=useLocation()
    const edit=(e)=>{
      e.preventDefault ()
      setIsEditing(true)
    }

    const [name,setName]=useState(location.state.name)
    const [password,setPassword]=useState(location.state.password)
    const [mno,setMno]=useState(location.state.mno)
    const [isEditing, setIsEditing] = useState(false)
    async function update(e){
      e.preventDefault()
      try{
        const res =await axios.post("http://localhost:8000/home/account/update",{name,password,mno})
				if(res.data){
        setIsEditing(false)
          }
    }
           catch (err) {
         console.log(err);
          alert(err.response?.data?.error || "Server error while updating account");;
        }}

async function home(e) {
  e.preventDefault();
  history("/home", { state: location.state });
}
async function Logout(e) {
  e.preventDefault();
  sessionStorage.removeItem("token");
  history("/",);
}
  return (
    <div><div><div style={{position:'relative',minHeight:100+'vh'}} className="container-fluid">
      <button onClick={home} style={{position:'absolute',left:0+'%'}} className="btn btn-secondary mx-4 mt-2">Home</button>
      <button onClick={Logout} style={{position:'absolute',right:0+'%'}} className="btn btn-secondary mx-4 mt-2">Logout</button>
    <div className="row text-center text-white bg-primary mb-3 p-3" style={{borderBottomLeftRadius:60+"%",borderBottomRightRadius:60+"%"}}>
        <h2>E-commerce</h2>
        <p>WELCOME {location.state.name}</p>
    </div>
    
    
    <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col-md-9 col-lg-6 col-xl-5 text-center m-5"  style={{height:600+'px'}}>
                <img src="../images/account.jpg" className="img-fluid" alt='login' ></img>
            </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 " style={{height:600+'px'}}>
          <form className='form-control m-3' >
            <label className='form-label'>Name</label>
            <input className='form-control' type='text' value={name} id='name' disabled={!isEditing} onChange={(e)=>{setName(e.target.value)}}></input>
            <label className='form-label'>Email</label>
            <input className='form-control' type='text' value={location.state.email} id='email' disabled ></input>
            <label className='form-label'>Password</label>
            <input className='form-control' type='text' value={password} id='password' disabled={!isEditing} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <label className='form-label'>Mno</label>
            <input className='form-control' type='number' value={mno} id='mno' disabled={!isEditing} onChange={(e)=>{setMno(e.target.value)}}></input>
            <button className='btn btn-primary m-4' style={{width:100+'px'}} onClick={edit} disabled={isEditing}>Edit</button>
            <button className='btn btn-primary m-4' style={{width:100+'px'}} onClick={update} disabled={!isEditing}>Update</button>
          </form>
        </div>
</div>
<Footer />
</div>
</div>
</div>
  )
}

export default Account
