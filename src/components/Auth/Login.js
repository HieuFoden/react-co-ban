import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        alert('me')
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button>Sign-up</button>
            </div>

            <div className='title col-4 mx-auto'>
                Hybrid Technologies
            </div>

            <div className='welcome col-4 mx-auto'>
                Hello, who’s this?
            </div>

            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type={"password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}

                    />
                </div>
                <span className='forgot-password'>Forgot Password.</span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                    >Login to Hybrid Technologies</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}>	&lt;&lt;Go to Homepage</span >
                </div>
            </div>
        </div>
    )
}
export default Login;