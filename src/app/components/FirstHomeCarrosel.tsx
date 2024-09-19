"use client"

import { useEffect, useState } from "react";



export const FirstHomeCarrosel = () => {
    const [changeBanner, setChangeBanner] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setChangeBanner((prevBanner) => (prevBanner < 7 ? prevBanner + 1 : 0));
        }, 7000); // 10 segundos

        // Limpa o timeout quando o componente for desmontado ou quando o changeBanner mudar
        return () => clearTimeout(timer);
    }, [changeBanner]);

    return (
        <section>
            <div className='w-screen h-[500px] flex justify-center md:h-[200px] lg:h-[300px] xl:h-[400px]'>
                <div className="w-full h-full flex justify-center items-center">
                    <div className={`w-full h-full flex justify-end flex-col items-center bg-cover bg-center bg-no-repeat relative
                         cursor-pointer 2xl:bg-contain
                         ${changeBanner === 0 ? "bg-vermelho" : ""}
                          ${changeBanner === 1 ? "bg-red-300" : ""}
                         ${changeBanner === 2 ? "bg-white" : ""}
                         ${changeBanner === 3 ? "bg-orange-300" : ""}
                         ${changeBanner === 4 ? "bg-vermelho" : ""}
                         ${changeBanner === 5 ? "bg-orange-300" : ""}
                         ${changeBanner === 6 ? "bg-purple-300" : ""}
                         ${changeBanner === 7 ? "bg-gray-300" : ""}
                         `}>

                        <div className='w-[300px] h-[30px] pb-4'>
                            <div className="w-full h-full flex justify-between items-center">
                                <div className={`w-[15px] h-[15px] ${changeBanner === 0 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(0)}></div>

                                <div className={`w-[15px] h-[15px] ${changeBanner === 1 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(1)}></div>

                                <div className={`w-[15px] h-[15px] ${changeBanner === 2 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(2)}></div>
                                <div className={`w-[15px] h-[15px] ${changeBanner === 3 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(3)}></div>
                                <div className={`w-[15px] h-[15px] ${changeBanner === 4 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(4)}></div>
                                <div className={`w-[15px] h-[15px] ${changeBanner === 5 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(5)}></div>
                                <div className={`w-[15px] h-[15px] ${changeBanner === 6 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(6)}></div>
                                <div className={`w-[15px] h-[15px] ${changeBanner === 7 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(7)}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};
