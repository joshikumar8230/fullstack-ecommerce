import { useState,useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Footer from './footer.js'

function Home() {
  const history=useNavigate()
  const location=useLocation()
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const get = await axios.get('http://localhost:8000/home/getallproducts');
      if (get.data) {
        setProducts(get.data);
      }
    } catch (err) {
   console.log(err);
   alert(err.response?.data?.error || "Server error while fetching product");;
}
  };
  fetchProducts();
}, []);

  async function submit(e){
        e.preventDefault();
        history("/home/account",{state: location.state })
  }
  async function product(e,p){
    e.preventDefault();
    try{
     const res = await axios.post("http://localhost:8000/home/getproduct",{p})
  if(res.data["product"]){
    history("/home/product",{state:res.data})
  }}
  
catch (err) {
  console.log(err);
  alert(err.response?.data?.error || "Product not found");;
}
  }
  
  return (
    <div>
    <div style={{position:'relative',minHeight:100+'vh'}} className="container-fluid">
            <div className="row text-center text-white bg-primary mb-3 p-3" style={{borderBottomLeftRadius:60+"%",borderBottomRightRadius:60+"%"}}>
        <h2>E-commerce</h2>
        <p>WELCOME {location.state.name}</p>
      </div>
      <div style={{position:"absolute",top:10,right:10}}>
      <button onClick={submit}type='submit'><AccountCircleIcon/>My Account</button>
      </div>
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={100}
        totalSlides={3}
        interval={5000}
        isPlaying={true}
        dragEnabled={true}
        style={{height:500+'px',margin:20+'px'}}
      >
        <Slider style={{height:500+'px'}}>
          <Slide index={0}><img src='../images/1.jpg' alt='carousel1' height={500} width={800}></img></Slide>
          <Slide index={1}><img src='../images/2.jpg' alt='carousel2' height={500} width={800}/></Slide>
          <Slide index={2}><img src='../images/3.jpg' alt='carousel3' height={500} width={800}/></Slide>
        </Slider>
      </CarouselProvider>
      <div className="row d-flex justify-content-center align-items-center h-100 m-3">
      {products.map((item, index) => (
      <div key={index} className="col-md-9 col-lg-4 col-xl-3 text-center">
    <img 
      src={`./images/${item.image}`} 
      style={{ height: 200, width: 'auto' }} 
      className="img-fluid" 
      alt={item.product} 
    />
    <button
      className="btn btn-primary mt-2"
      onClick={(e) => product(e,item.product)} 
      style={{ position: "relative", display: 'block', left: "40%" }}
    >
      Buy Now
    </button>
  </div>
))}
            </div>
    </div>

    <Footer />
    
    </div>
  )
}
export default Home 
