import { Link } from "react-router-dom"

const SignUp = () => {
    return (

<div className="text-l text-center border-4">
<Link to ={'/registration'}> Sign Up Here </Link>
<div className='text-center text-black'> 
  <Link to ={'/login'}> Already have an account? </Link>
</div>
</div>
    )
}

export default SignUp 