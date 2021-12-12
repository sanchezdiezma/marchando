import "../Index/Home.css";
import ImgSection1 from '../../../assets/2-5-pie.png'


function Home() {
    return (
        <div>
            
            <section className="hero fl-container fl-centerh fl-centerv">
                <div>
                    <h1>Marchando</h1>
                    <p>¿Sin reserva para esta noche?</p>
                </div>
            </section>

            <section className="hero3 fl-container fl-centerh fl-centerv">
                <div>
                    <img className="imgHero3" src={ImgSection1} alt="ImgSection1" />
                </div>
                
                <div className="text"> 
                    <p>¿Sin reserva para esta noche?</p>
                    <p>¿Sin reserva para esta noche?</p>
                    <p>¿Sin reserva para esta noche?</p>
                </div>

            </section>

            

                    
                
            
           

            <section className="hero4">

            </section>

            <section className="heroFooter">

            </section>
            


                
                
                

            
               


           
            
        </div>
    );
}

export default Home;