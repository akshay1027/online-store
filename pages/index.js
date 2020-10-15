import Link from "next/Link"

const Home = () => {
    //console.log(products)
    return (
        <div>
            <h1>Home page </h1>
        </div>    
          
    )
}
/*export async function getStaticProps(){
    const res = await fetch('https://localhost:3000/api/products')
    const data = await res.json()
    return {
        prop:{
            products:data
        }
    }
}*/

export default Home