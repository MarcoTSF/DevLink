import { useState } from 'react'
import './login.css'
import { Logo } from '../../components/Logo'


import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


import { toast } from 'react-toastify'
import { Input } from '../../components/Input'


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin(event){
        event.preventDefault();

        if(email === '' || password === ''){
            alert("Preencha todos os campos!")
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("Login efetuado com sucesso!")
            navigate("/admin", {replace: true})
        })
        .catch(() => {
            toast.error("Erro ao tentar fazer o login.")
            console.log("Erro ao fazer seu login.")
        })
    }

    return(
        <div className='login-container'>
            <Logo/>

            <form className='form' onSubmit={handleLogin}>
                <Input  
                    value={email}
                    type="email"
                    placeholder='Digite seu email...'
                    onChange={ (event) => setEmail(event.target.value) }
                />

                <Input 
                    type="password"
                    placeholder='**************'
                    autoComplete='on'
                    value={password}
                    onChange={ (event) => setPassword(event.target.value) }
                />

                <button type="submit">Acessar</button>
            </form>
        </div>
    )
}