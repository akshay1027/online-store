import Link from 'next/link'
const Navbar = () =>{
    return(
        <nav>
        <div className="nav-wrapper #00bfa5 teal accent-4" >
          <Link href="#"><a className="brand-logo left">Logo</a></Link>
          <ul id="nav-mobile" className="right">
            <li><Link href="/login"><a>Login</a></Link></li>
            <li><Link href="/Signup"><a>Signup</a></Link></li>
            <li><Link href="/Create"><a>Create</a></Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar