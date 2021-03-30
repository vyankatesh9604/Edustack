import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <div class="login-form">    
            <form>
                <div class="avatar"><i class="material-icons">&#xE7FF;</i></div>
                <h4 class="modal-title">Sign In</h4>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Username" required="required"/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required="required"/>
                </div>
               <Link to="/home"> <button class="btn btn-primary btn-block btn-lg"  >Login</button></Link>        
            </form>			
        </div>
    )
}
