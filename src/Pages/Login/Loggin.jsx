import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Loggin = () => {
    const { signIn, handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password) 
            .then(result => {
                console.log(result.user);
                alert('login Successfully');
            })
            .catch(error =>{
                console.error(error);
                alert('not match in user email or password');
            })
    }
    return (
        <div>
            <h2 className="text-3xl text-center my-10">Please Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div className="form-control mt-6">
                    <p className="text-2xl text-center">or</p>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Google Login</button>
                </div>
                <div  className="form-control mt-6">
                    <button onClick={handleGithubSignIn} className="btn btn-primary">GitHub Login</button>
                </div>
            </form>
            <p className="text-center mt-4">Do not have an account <Link to='/register' className="text-blue-600 font-bold">Register</Link></p>
        </div>
    );
};

export default Loggin;