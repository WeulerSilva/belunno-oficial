"use client"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomCarousel from "./CustomCarousel";

export const AboutCarrosel = () => {
    const images = [
        "/images/fabric.JPG",
        "/images/home-img.png",
        "/images/fabric.JPG",
        "/images/home-img.png",
        "/images/fabric.JPG",
        "/images/home-img.png",
        // Adicione mais imagens conforme necessário
    ];

    return (
        <section className="w-scren h-[720px] bg-gradient-to-r from-[#e30a16] to-[#9a140f] flex justify-center items-center
            lg:h-[500px]">
            <div className="w-[90%] h-full flex justify-between items-center flex-col lg:w-[80%] lg:flex-row">
                <div className="w-[100%] h-[300px flex justify-center items-center flex-col md:h-full lg:w-[40%] 2xl:w-[60%]">
                    <h2 className="text-xl text-laranja mb-6 font-extrabold mt-4 lg:mt-0 md:text-2xl xl:text-5xl"
                    >Compromisso com a Comunidade e Sustentabilidade</h2>
                    <p className="text-base text-white md:text-lg text-justify xl:text-2xl">Orgulhosamente enraizada no Norte do Brasil,
                        a Belunno valoriza as comunidades locais e
                        promove o desenvolvimento sustentável em
                        todas as suas operações.</p>
                </div>

                <section className="w-screen h-[500px] lg:w-full">
                    <CustomCarousel images={images} />
                </section>
            </div>
        </section>
    );
};