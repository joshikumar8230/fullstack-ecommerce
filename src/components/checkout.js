import {useState} from 'react'
import axios from 'axios'
import {useNavigate,useLocation } from 'react-router-dom'
import Footer from './footer.js'
function Checkout() {
    const history=useNavigate()
    const location=useLocation()

    const [addr,setaddr]=useState('')
    const [cardno,setcardno]=useState('')
    const [cardname,setcardname]=useState('')
    const [valid,setvalid]=useState('')
    const [cvv,setcvv]=useState('')


    async function submit(e){
        e.preventDefault()
        try{
          const res = await axios.post("http://localhost:8000/home/product/donecheckout",{p:location.state.product,addr,cardno,cardname,valid,cvv})
				if(res.data){
				  history("/home",{state:res.data})
				}}
        catch (err) {
        console.log(err);
         alert(err.response?.data?.error || "Server error while completing checkout");;
           }
    }
  return (
    <div><div><div style={{position:'relative',minHeight:100+'vh'}} className="container-fluid">
    <div className="row text-center text-white bg-primary mb-3 p-3" style={{borderBottomLeftRadius:60+"%",borderBottomRightRadius:60+"%"}}>
        <h2>E-commerce</h2>
    </div>
    <div className='row d-flex justify-content-center align-items-center'>
    <form className='col-md-9 col-lg-6 col-xl-4 '>
        <label className='form-label text-dark' htmlFor='addr'>Address</label>
        <textarea onChange={(e)=>{setaddr(e.target.value)}} className='form-control border border-dark' id='addr' placeholder={"Enter your Address....."}></textarea><br/>
        <fieldset className='form-control border border-dark'>
            Enter Card Details<br/><br/>
            <label style={{width:200+'px'}}>Card No:</label>
            <input type='text' onChange={(e)=>{setcardno(e.target.value)}} className='col-xl-4'></input><br/><br/>
            <label style={{width:200+'px'}}>Card Holder Name:</label>
            <input type='text' onChange={(e)=>{setcardname(e.target.value)}} className='col-xl-4'></input><br/><br/>
            <label style={{width:200+'px'}}>Valid Till:</label>
            <input type='text' onChange={(e)=>{setvalid(e.target.value)}} className='col-xl-4'></input><br/><br/>
            <label style={{width:200+'px'}}>CVV:</label>
            <input type='text' onChange={(e)=>{setcvv(e.target.value)}} className='col-xl-4'></input><br/><br/>
        </fieldset>
    </form>
</div><button className='btn btn-primary m-4' onClick={submit} >Submit</button>
    </div>
<Footer />
</div>
</div>
  )
}

export default Checkout