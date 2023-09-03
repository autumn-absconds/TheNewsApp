import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to='/' >News App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           {/*  <li className="nav-item"> <Link class="nav-link active text-light" aria-current="page" to='/'  > Home</Link>  </li>
                            <li className="nav-item"> <Link to='/sport'   ></Link>  </li>
                            <li className="nav-item"> <Link to='/tech'  >Tech</Link>  </li>
                            <li className="nav-item"> <Link to='/world'  >World</Link>  </li>
                            <li className="nav-item"> <Link to='/finance'  >Finance</Link>  </li>
                            <li className="nav-item"> <Link to='/politics'   >Politics</Link>  </li>
                            <li className="nav-item"> <Link to='/business'   >Business</Link>  </li>
                            <li className="nav-item"> <Link to='/economics'  >Economics</Link>  </li>
                            <li className="nav-item"> <Link to='/entertainment'   >Entertainment</Link>  </li>
                            <li className="nav-item"> <Link to='/travel'  >Travel</Link>  </li>
                            <li className="nav-item"> <Link to='/music'  >Music</Link>  </li>
                            <li className="nav-item"> <Link to='/food'   >Food</Link>  </li>
                            <li className="nav-item"> <Link to='/science' >Science</Link>  </li> */}


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
