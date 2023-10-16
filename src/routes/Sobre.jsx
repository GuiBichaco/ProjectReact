import {  } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./style.css";

function Sobre (){



  return(
    <section>

      {/* ÁREA DE CARTÕES */}

      <div className="container text-center mt-5 lead">
        <div className="row justify-content-center">
            <h5 className="card-title"><strong>SOBRE:</strong></h5>
            <p>Desenvolvedores do projeto</p>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards2 m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Dev-1</strong></h5>
                <img src="./src/assets/vini.jpg" alt="" className='fotoCard'/>
                <p className="card-text my-4">
                Vinicius Sobreira Borges - RM: 97767
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards2 m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Dev-2</strong></h5>
                <img src="./src/assets/laia.jpg" alt="" className='fotoCard'/>
                <p className="card-text my-4">Lucas Laia Manentti - RM: 97709</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards2 m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Dev-3</strong></h5>
                <img src="./src/assets/lucas.png" alt="" className='fotoCard'/>
                <p className="card-text my-4">Lucas Almeida de Siqueira - RM: 551854</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards2 m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Dev-4</strong></h5>
                <img src="./src/assets/enzo.jpg" alt="" className='fotoCard'/>
                <p className="card-text my-4">Enzo de Oliveira Cunha - RM: 550985</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards2 m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Dev-5</strong></h5>
                <img src="./src/assets/gui.jpg" alt="" className='fotoCard'/>
                <p className="card-text my-4">Guilherme Catelli Bichaco - RM: 97989</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>


  );
}
export default Sobre