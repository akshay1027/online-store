import Link from 'next/link'
import {useRouter} from 'next/router'

const Navbar = () =>{
    const router = useRouter()

    function isActive (route){
        if(route == router.pathname){
            return "active"
        }
        else ""
    }

    return(
        <nav>
        <div className="nav-wrapper #006064 cyan darken-4" >
          <Link href="#"><a className="brand-logo left">Logo</a></Link>
          <ul id="nav-mobile" className="right">
            <li className={isActive('/login')}><Link href="/login"><a>Login</a></Link></li>
            <li className={isActive('/Signup')}><Link href="/Signup"><a>Signup</a></Link></li>
            <li className={isActive('/Create')}><Link href="/Create"><a>Create</a></Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar