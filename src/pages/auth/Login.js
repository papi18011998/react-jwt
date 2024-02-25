import React, { useState } from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({
        login:'',
        password:''
    })

    const onChange = (e)=>{
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log('stop submitting');
    }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="img-fluid" alt="Phone image"/>
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={onSubmit}>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form1Example13">Email address</label>
                            <input 
                                type="text" 
                                id="form1Example13" 
                                className="form-control form-control-lg"
                                name='login'
                                value={credentials.login}
                                onChange={onChange}
                            />
                        </div>

                        {/* Password input  */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form1Example23">Password</label>
                            <input 
                                type="password" 
                                id="form1Example23" 
                                className="form-control form-control-lg"
                                name='password'
                                value={credentials.password}
                                onChange={onChange}
                            />
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Connexion</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;