import { AboutSpan } from "./components/AboutSpan";
import { FirstHomeCarrosel } from "./components/FirstHomeCarrosel";

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen bg-laranja relative">
        <video src="https://cdn.pixabay.com/video/2022/07/20/124829-732633113_tiny.mp4"
          className="w-full h-full object-fill"
          autoPlay
          muted
          loop
          playsInline></video>

        <div className="w-full h-[70px] absolute bottom-0 bg-first-line bg-no-repeat bg-cover md:h-[140px] lg:h-[180px] xl:h-[210px] 2xl:h-[280px]">
        </div>
      </section>

      <div className="w-full h-full bg-laranja flex justify-center items-center lg:h-[500px] 2xl:h-[400px]">
        <div className="w-full h-full flex flex-col md:w-[90%] lg:w-[80%] lg:flex-row">
          <div className="hidden w-[10%] h-full relative justify-end items-end md:block">
            <div className="w-[240px] h-full  absolute bottom-0 right-0 bg-four bg-cover"></div>
          </div>
          <div className="w-full h-full px-4 md:px-0">
            <h1 className="text-5xl font-bold text-vermelho font-amsi mb-6 pt-10">Qualidade, Sabor e Tradição desde 2007!</h1>

            <p className="font-gothan text-black text-xl text-justify mb-6">Desde 2007, a Belunno é sinônimo de excelência na produção de
              embutidos de carne suína. Nosso compromisso com a qualidade e
              tradição faz de cada produto uma experiência única. Certificados
              pelo SIF (Selo de Inspeção Federal), nossos produtos são
              rigorosamente inspecionados para garantir a segurança e a
              satisfação dos nossos consumidores.</p>
            
            <AboutSpan text="Saiba mais" style="bg-vermelho text-white text-[12px] py-1"/>
          </div>


          <div className="w-full h-[300px] flex justify-end items-center lg:w-full lg:h-full">
            <div className="w-full h-[90%] bg-orange-700 bg-fabric bg-center bg-no-repeat bg-cover md:rounded-3xl
              lg:w-[90%] lg:h-[90%]"></div>
          </div>
        </div>
      </div>

      <FirstHomeCarrosel/>

      <section>
            <div className='w-screen h-[330px] bg-orange-50 flex justify-center relative bg-caminhao bg-cover bg-[-300px] bg-no-repeat
               md:bg-center md:h-[400px] 2xl:h-[500px]'>
                <div className="w-full h-full bg-black/80 absolute z-0 md:hidden"></div>
                <div className="w-[90%] h-full flex justify-start items-center relative z-60 md:w-[80%]">
                    <div className={`w-full h-full flex justify-start items-center flex-col
                         md:w-[50%] cursor-pointer`}>
                          <div className="w-full h-[90px] flex justify-start items-end mb-4 md:mb-10 md:h-[150px]">
                            <h1 className="text-xl font-bold text-vermelho font-amsi mb-6 pr-6 xl:text-3xl 2xl:text-5xl">A marca preferida do Norte</h1> 
                            <span className="w-[50px] h-[50px] bg-caminhao-icon bg-cover bg-center bg-no-repeat 
                              md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] 2xl:w-[150px] 2xl:h-[150px]"></span>
                          </div>

                            <p className="w-full font-gothan text-white text-base text-justify mb-4 lg:mb-6 xl:text-lg 2xl:text-xl">Belunno combina tradição e qualidade para oferecer os melhores embutidos de carne suína. Com ingredientes selecionados e segurança certificada, nossos produtos garantem sabor único e momentos especiais em sua mesa.</p>
                          
                          <div className="w-full glex justify-start">
                            <AboutSpan text="Saiba mais" style="bg-vermelho text-[12px] 2xl:text-[14px]"/>
                          </div>
                            
                    </div>
                </div>
            </div>

        </section>
    </>
  );
}
