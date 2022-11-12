import { useState } from 'react'
import './admin.css'
import { Header } from "../../components/Header"
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'

import { MdAddLink } from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'

import { db } from '../../services/firebaseConnection'

import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    doc,
    deletedoc
} from 'firebase/firestore'

import { toast } from 'react-toastify'

export default function Admin(){
    const [nameInput, setNameInput] = useState("");
    const [urlInput, setUrlInput] = useState("")
    const [backgroundColorInput, setBackgroundColarInput] = useState("#f1f1f1")
    const [textColorInput, setTextColorInput] = useState("#121212")
    
    async function handleRegister(event){
        event.preventDefault();

        if(nameInput === '' || urlInput === ''){
            toast.warn("Preencha todos os campos!")
            return;
        }

        addDoc(collection(db, "links"), {
            name: nameInput,
            url: urlInput,
            bg: backgroundColorInput,
            color: textColorInput,
            created: new Date(),
        })
        .then( () => {
            setNameInput("")
            setUrlInput("")
            console.log("Link registrado com sucesso!")
        })
        .catch((error) => {
            console.log("Erro ao registrar " + error)
            toast.error("Ops! Erro ao salvar o link.")
        })
    }
    
    return(
        <div className="admin-container">
            <Header/>

            <Logo/>

            <form className='form' onSubmit={handleRegister}>
                <label className='label'>Nome do Link</label>
                <Input
                    placeholder="Digite o nome do link..."
                    value={nameInput}
                    onChange={ (event) => setNameInput(event.target.value) }
                />

                <label className='label'>Url do Link</label>
                <Input
                    placeholder="Digite a url do Link..."
                    value={urlInput}
                    onChange={ (event) => setUrlInput(event.target.value) }
                />

                <section className='container-colors'>
                    <div>
                        <label className='label right'>Fundo do link</label>
                        <input
                            type="color"
                            value={backgroundColorInput}
                            onChange={ (event) => setBackgroundColarInput(event.target.value) }
                        />
                    </div>

                    <div>
                        <label className='label right'>Cor do link</label>
                        <input
                            type="color"
                            value={textColorInput}
                            onChange={ (event) => setTextColorInput(event.target.value) }
                        />
                    </div>
                </section>

                { nameInput !== '' && (
                    <div className='preview'>
                        <label className='label'>Veja sua preview 👇</label>
                        <article className='list' style={{ marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput }}>
                            <p style={{ color: textColorInput }}>{nameInput}</p>
                        </article>
                    </div>
                )}
                
                <button className='btn-register' type='submit'>
                    Cadastrar <MdAddLink size={24} color="#FFF" />
                </button>
            </form>

            <h2 className='title'>
                Meus Links
            </h2>

            <article 
                className='list animate-pop'
                style={{ backgroundColor: "#000", color: "#FFF" }}
            >
                <p>Meu perfil no GitHub</p>
                <div>
                    <button className='btn-delete'>
                        <FiTrash2 size={18} color="#FFF" />
                    </button>
                </div>
            </article>
        </div>
    )
}