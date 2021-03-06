import React from 'react';
import CustomButtom from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });

        } catch (error) {
            console.error(error);
        }        
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange} 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        label='email'
                        required                            
                    />                    
                    
                    <FormInput 
                        handleChange={this.handleChange} 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label='password'
                        required                            
                    />
                    
                    <div className='buttons'>
                        <CustomButtom type='submit'>Sign in</CustomButtom>
                        <CustomButtom
                            type='button'
                            onClick={ signInWithGoogle } 
                            isGoogleSignIn={true}>Sign in with Google
                        </CustomButtom>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
