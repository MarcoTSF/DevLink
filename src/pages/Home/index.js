import './home.css'

import { Social } from '../../components/Social'
import { FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'

export default function Home(){
    return(
        <div className='home-container'>
            <h1>Marco Túlio Salvador Filho</h1>
            <span>Veja meus links 👇</span>

            <main className='links'>
                <section className='link-area'>
                    <a href="https://github.com/MarcoTSF">
                        <p className='link-text'>Meu perfil GitHub</p>
                    </a>
                </section>

                <section className='link-area'>
                    <a href="https://www.linkedin.com/in/marcotsf/">
                        <p className='link-text'>Meu perfil LinkedIn</p>
                    </a>
                </section>

                <section className='link-area'>
                    <a href="https://www.twitch.tv/marcotsf_13">
                        <p className='link-text'>Meu perfil Twitch</p>
                    </a>
                </section>

                <footer>
                    <Social url="https://www.facebook.com/marcotulio.salvador.1/">
                        <FaFacebook size={35} color="#FFF" />
                    </Social>

                    <Social url="https://www.instagram.com/marcotsf_13/">
                        <FaInstagram size={35} color="#FFF" />
                    </Social>

                    <Social url="https://www.youtube.com/channel/UCEXQbgAnKNANlRqOebRbKOA">
                        <FaYoutube size={35} color="#FFF" />
                    </Social>
                </footer>
            </main>
        </div>
    )
}