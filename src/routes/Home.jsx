import {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Imagem from '../img/miniTemaki.jpg';
import Imagem2 from '../img/hot.jpg';
import Imagem3 from '../img/sashimi.jpg';
import Imagem4 from '../img/image1.jpg';
import Imagem5 from '../img/image2.jpg';
import Imagem6 from '../img/image3.jpg';
import styles from '../routes/estilo.module.css';
import "./style.css";



//SwiperCore.use([Pagination]);

function Home (){

  /*Hook- useState */
  const [slidePreview, setSlidePreview]= useState(1);
  const [swiper, setSwiper] = useState(null); // Referência ao Swiper

  /*criando o objeto de imagens*/
const imagens = [
  {id:'1', image: Imagem4},
  {id:'2', image: Imagem5},
  {id:'3', image: Imagem6}
];

/*criando o efeito colateral*/

useEffect(()=>{
//criando a função que vai mudar o slideShow 
  function handleResize(){
    if(window.innerWidth <720){
      setSlidePreview(1);
    }else{
      setSlidePreview(2);
    }
  }
  //chamando a função
  handleResize();

  // evento que vai modificar toda vez que diminuir a tela
  window.addEventListener('resize',handleResize);

  /*como estamos usando useEffect é bom sair do evento e desmontar para 
  não perder a performace*/
  return ()=>{
    window.removeEventListener('resize',handleResize);
  }
// retorna um array vazio
}, [])


useEffect(() => {
  // Configura um intervalo para avançar os slides a cada X milissegundos
  const interval = setInterval(() => {
    if (swiper && swiper.activeIndex < imagens.length - 1) {
      swiper.slideNext();
    } else {
      swiper.slideTo(0);
    }
  }, 3000); // Mude para o intervalo desejado (3 segundos no exemplo)

  // Limpe o intervalo quando o componente for desmontado
  return () => {
    clearInterval(interval);
  };
}, [imagens.length, swiper]);

  return(
    <section>
      <Swiper
        slidePreview={slidePreview}
        pagination={{clickable:true}}
        navigation
        onSwiper={setSwiper}
      >
        {imagens.map((item) =>(       
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="slide" className={styles.slideItem}/>          
          </SwiperSlide>
        ))}
      </Swiper>

      <p className='descricao'>
        Desfrute de uma autêntica experiência culinária japonesa no Sushi Bigas. 
        Nosso restaurante oferece uma vasta seleção de pratos de sushi e sashimi preparados com ingredientes frescos e de alta qualidade. 
        Explore sabores únicos e mergulhe na rica cultura gastronômica do Japão. Visite-nos hoje e saboreie a perfeição do sushi no Sushi Bigas!
      </p>

      {/* ÁREA DE CARTÕES */}
      <div className="container text-center mt-5 lead">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Temaki</strong></h5>
                <img src={Imagem} title="imagem" className='fotoCard'/>
                <p className="card-text my-4">
                  O temaki é um prato japonês.
                  Combina arroz, peixe fresco e vegetais.
                  Servido em formato de cone, é delicioso.
                </p>
                <p className="card-text my-4 price">R$ 20,00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>HotRoll</strong></h5>
                <img src={Imagem2} title="imagem2" className='fotoCard'/>
                <p className="card-text my-4">O Hot Roll é um rolinho de sushi frito, recheado com ingredientes como arroz, peixe e vegetais, oferecendo uma mistura de sabores crocantes e saborosos.</p>
                <p className="card-text my-4 price">R$ 35,00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Sashimi</strong></h5>
                <img src={Imagem3} title="imagem3" className='fotoCard'/>
                <p className="card-text my-4">O Sashimi é uma iguaria japonesa composta por finas fatias de peixe cru fresco, servido sem arroz. É apreciado por sua textura e sabor puros.</p>
                <p className="card-text my-4 price">R$ 45,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>





    
    </section>


  );
}
export default Home