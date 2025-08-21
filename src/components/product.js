import {useNavigate,useLocation } from 'react-router-dom'
import Footer from './footer.js'

function Product() {
    const history=useNavigate()
    const location=useLocation()
    async function submit(e){
        e.preventDefault()
		history("/home/product/checkout",{state:location.state})
        }
  return (
    <div><div><div style={{position:'relative',minHeight:100+'vh'}} className="container-fluid">
    <div className="row text-center text-white bg-primary mb-3 p-3" style={{borderBottomLeftRadius:60+"%",borderBottomRightRadius:60+"%"}}>
        <h2>E-commerce</h2>
    </div>

    <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-4 text-center m-3">
                <img src={"../images/"+location.state.image} className="img-fluid" alt='login' ></img>
                <button className='btn btn-primary mt-5' onClick={submit} style={{position:"relative",display:'block',left:45+'%'}}>Buy Now</button>
            </div>
            <div className="col-md-9 col-lg-6 col-xl-4 text-center m-3">
            <h2>{location.state.name}</h2>
            <h4>Price: {location.state.price}</h4>
                <div>{location.state.highlights}</div>
            </div>
        </div>
    </div>
<Footer />
</div>
</div>
  )
}

export default Product