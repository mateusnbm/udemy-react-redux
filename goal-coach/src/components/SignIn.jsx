//
// SignIn.jsx
//


import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { firebase_app } from '../firebase'


class SignIn extends Component {

    constructor(props) {

        super(props)

        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }

    }

    sign_in() {

        const {email, password} = this.state

        firebase_app.auth().signInWithEmailAndPassword(email, password).catch(error => {

            this.setState({error: error})

        })

    }

    render() {

        return (

            <div className='form-inline' style={{margin: '5%'}}>

                <h2>Sign In</h2>

                <div className='form-group'>

                    <input
                        className='form-control'
                        type='text'
                        style={{marginRight: '5px'}}
                        placeholder='email'
                        onChange={event => this.setState({email: event.target.value})}
                        />

                    <input
                        className='form-control'
                        type='password'
                        style={{marginRight: '5px'}}
                        placeholder='password'
                        onChange={event => this.setState({password: event.target.value})}
                        />

                    <button
                        className='btn btn-primary'
                        type='button'
                        onClick={() => this.sign_in()}>
                            Sign In
                        </button>

                </div>

                <div>{this.state.error.message}</div>

                <div>
                    <Link to={'/signup'}>Sign Up Instead</Link>
                </div>

            </div>

        )

    }

}


export default SignIn
