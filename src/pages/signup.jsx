import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import Picka from '../images/1337497_game_go_play_pikachu_pokemon_icon.png';

function SignUp() {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#f0f2f5' }}>
            <div className="col-md-4">
            <img src={Picka} className="" alt="Pikachu" style={{ height: '100px', margin: '20px' }}/> 
                <div className="card shadow-lg" style={{ borderColor: '#dc3545' }}>
                    <div className="card-header text-center" style={{ backgroundColor: '#dc3545', color: 'white' }}>
                        <h4>Sign Up</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" style={{ borderColor: '#ced4da' }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" style={{ borderColor: '#ced4da' }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" style={{ borderColor: '#ced4da' }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" style={{ borderColor: '#ced4da' }} />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary" style={{ background: 'linear-gradient(to right, #ff4e50, #ff6e7f)' }}>Create Account</button>
                            </div>
                            <div className="mt-3 text-center">
                                <span>Already have an account? </span>
                                <Link to="/login" style={{ textDecoration: 'underline', color: '#ced4da' }}>Sign in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;