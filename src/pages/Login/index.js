import { useState } from 'react'
import './login.css'
import { Logo } from '../../components/Logo'

export default function Login(){
    const [email, setEmail] = useState("");

    return(
        <div className='login-container'>
            <Logo/>

            <form className='form'>
                <input  
                    value={email}
                    type="email"
                    placeholder='Digite seu email...'
                    onChange={ (event) => setEmail(event.target.value) }
                />

                <input 
                    type="password"
                    placeholder='*********'
                    autoComplete='on'
                />

                <button type="submit">Acessar</button>
            </form>
        </div>
    )
}