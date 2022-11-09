import './home.css'

export default function Home(){
    return(
        <div className='home-container'>
            <h1>Marco Túlio Salvador Filho</h1>
            <span>Veja meus links 👇</span>

            <main className='links'>
                <section className='link-area'>
                    <a href="#">
                        <p className='link-text'>Meu perfil GitHub</p>
                    </a>
                </section>

                <section className='link-area'>
                    <a href="#">
                        <p className='link-text'>Meu perfil GitHub</p>
                    </a>
                </section>

                <section className='link-area'>
                    <a href="#">
                        <p className='link-text'>Meu perfil GitHub</p>
                    </a>
                </section>
            </main>
        </div>
    )
}