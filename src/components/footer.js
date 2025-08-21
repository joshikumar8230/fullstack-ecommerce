const Footer = () => {
  return (
    		<div style={{position:'relative',bottom:0, height: 120+'px', width: 100+'%'}} className="text-center bg-primary p-4">
      <div className="text-white col mb-3 mb-md-0">
        <p>Copyright © 2022.(URK21CS1015) - Full Stack React Project. All Rights Reserved</p>
      </div>
      <div className="px-4">
        <a href="#!" className="text-white me-sm-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#!" className="text-white me-sm-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#!" className="text-white me-sm-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="#!" className="text-white me-sm-4">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      </div>
  )
}

export default Footer