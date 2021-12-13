import "../Index/Home.css";
import ImgSection1 from '../../../assets/2-5-pie.png'


function Home() {
    return (
        <div>
            
            <section className="hero">
                <div>
                    <h1>Marchando</h1>
                    <p>¡Si no tienes reserva, por lo menos ten Marchando!</p>
                </div>
            </section>

            <section className="hero3 fl-container fl-centerh fl-centerv">
            
                <div class="section-img">
                    <img className="imgHero3" src={ImgSection1} alt="ImgSection1" />
                </div>
                
                <div className="text"> 
                    <p>Cuatro de cada diez reservas<br/>
                    se acaban cancelando, produciendo<br/>
                    grandes perdidas a los restaurantes</p>
                  
                    
                </div>

            </section>

            

                    
                
            
           

            <section className="hero4">

            </section>

            <section className="heroFooter">

            <p className="textFooter"> Desarrollado en Ironhack con ❤️ por Alex Alcaide & JM Sánchez Diezma</p>

            </section>
            


                
                
                

            
               


           
            
        </div>
    );
}

export default Home;