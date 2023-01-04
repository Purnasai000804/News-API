
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const handleClick = (i) => {
        document.getElementsByClassName('nav-link active')[0].classList.remove('active')
        let y = document.getElementsByClassName('nav-link')[i]
        y.classList.add('active')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link active" onClick={() => handleClick(0)} aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" onClick={() => handleClick(1)} to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link" onClick={() => handleClick(2)} to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" onClick={() => handleClick(3)} to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" onClick={() => handleClick(4)} to="/general">General</Link></li>
                        <li className="nav-item"><Link className="nav-link" onClick={() => handleClick(5)} to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link" onClick={() => handleClick(6)} to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link" onClick={() => handleClick(7)} to="/technology">Technology</Link></li>
                    </ul>
                    <form className="d-flex align-items-center" role="search">
                        <input className="form-control me-1 py-1" type="search" placeholder="Search" aria-label="Search"/>
                        <button className='btn btn-outline-success py-1' type='submit'>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}


export default Navbar