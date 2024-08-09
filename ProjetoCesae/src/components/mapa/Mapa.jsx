import './mapa.css'

function Mapa(){
    return(
        <section className="location">
            <div className="container">
                <div className="map">
                    <iframe className='mapGoogle'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.900781010055!2d-8.652842224807534!3d41.15851631016181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246582df7d8785%3A0xc967e42932cd22b4!2sCESAE%20Digital%20-%20Centro%20para%20o%20Desenvolvimento%20de%20Compet%C3%AAncias%20Digitais!5e0!3m2!1spt-PT!2spt!4v1722994597652!5m2!1spt-PT!2spt"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                </div>
        </div>
    </section>
    )
}

export default Mapa