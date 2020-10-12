import Link from "next/Link"

const Home = () => {
    return (
        <div>
            <h1>Home page </h1>
            <Link href="/product"><a>Go to products page</a></Link>
        </div>      
    )
}

export default Home