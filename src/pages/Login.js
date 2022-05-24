

function Login(){

return(
    <>
<h1 className='container'>Login</h1>
    <form action="">
      <div className='container'>
        <label htmlFor="email">Email</label><br />
        <input type="text"name="email" id="email"  placeholder='Email'/>
      </div>
      <div className='container' >
        <label htmlFor="password">Password</label><br />
        <input type="text"name="password" id="password" placeholder='Password'/><br />
      <button>Login</button>
      </div>
    </form>
    </> 
)
}
export default Login;