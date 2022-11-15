import { useState, useEffect } from 'react'
import './networks.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'

import { db } from '../../services/firebaseConnection'
import { setDoc, doc, getDoc } from 'firebase/firestore'

import { toast } from 'react-toastify'


export default function Networks(){
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");

    useEffect( () => {
        function loadLinks(){
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
            .then( (snapshot) => {

                if(snapshot.data() !== undefined) {
                    setFacebook(snapshot.data().facebook)
                    setInstagram(snapshot.data().instagram)
                    setYoutube(snapshot.data().youtube)
                }

            })
        }

        loadLinks();

    }, [])

    function handleSave(event){
        event.preventDefault();

        setDoc(doc(db, "social", "link"), {
            facebook: facebook,
            instagram: instagram,
            youtube: youtube
        })
        .then( () => {
            console.log("Urls salvas com sucesso!")
            toast.success("Sucesso ao salvar os Links!")
        })
        .catch( (error) => {
            console.log("Erro ao salvar as urls: " + error)
            toast.error("Não foi possível salvar os Links.")
        })
    }

    return(
        <div className='admin-container'>
            <Header/>

            <h1 className='title-social'>Minhas Redes Sociais</h1>

            <form className='form' onSubmit={handleSave}>
                <label className='label'>Link do Facebook</label>
                <Input placeholder="Digite a url do Facebook..."
                    value={facebook}
                    onChange={ (event) => setFacebook(event.target.value) }
                />
            
                <label className='label'>Link do Instagram</label>
                <Input placeholder="Digite a url do Instagram..."
                    value={instagram}
                    onChange={ (event) => setInstagram(event.target.value) }
                />
            
                <label className='label'>Link do YouTube</label>
                <Input placeholder="Digite a url do YouTube..."
                    value={youtube}
                    onChange={ (event) => setYoutube(event.target.value) }
                />

                <button className='btn-register' type='submit'>
                    Salvar links <MdAddLink size={24} color="#FFF" />
                </button>
            </form>
        </div>
    )
}