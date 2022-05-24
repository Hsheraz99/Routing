import {Link} from "react-router-dom"

function home(){
    return <>
    <h1 className='container'>SignUp</h1>
    <form action="">
      <div className='container'>
        <label htmlFor="email">Email</label><br />
        <input type="text"name="email" id="email"  placeholder='Email'/>
      </div>
      <div className='container' >
        <label htmlFor="password">Password</label><br />
        <input type="text"name="password" id="password" placeholder='Password'/><br />
      <Link to="Sign"><button>SignUp</button></Link>
      </div>
   </form> 
    </>
}


export default home;