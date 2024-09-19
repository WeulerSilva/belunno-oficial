"use client";

import Link from "next/link";
import { AboutSpan } from "./AboutSpan";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";


export default function Footer() {
    return (
        <footer className="w-screen h-[500px] bg-laranja flex flex-col justify-center items-center lg:h-[200px]">
            <div className="w-full h-[16px] border-y-4 border-white"></div>
            <div className="w-[90%] h-full flex justify-between items-center text-black flex-col pt-6 lg:w-[90%] lg:pt-[55px] lg:flex-row xl:w-[80%]">
                <div className="w-[100%] h-full flex flex-col justify-start items-center mb-4 lg:w-[40%] lg:items-start lg:mb-0 xl:w-[35%]">
                    <span className="text-[14px] font-semibold">BELLUUNÔ INDUSTRÌA DE ALIMENTOS LTDA</span>
                    <span className="text-[14px] font-semibold text-center">Unidade de Beneficiamento de Carne e Produtos Cárneos</span>
                    <span className="text-[13px]">Linha Cruzaltinha, 80 - Ciríaco/RS - Brasil</span>
                </div>

                <div className="w-[100%] h-full flex flex-col justify-start items-center text-black font-semibold lg:w-[20%]">
                    <span>qualidade@belunno.com.br</span>
                    <span>+55 (54) 9 9908 3962</span>
                </div>

                <div className="w-[100%] h-full flex flex-col justify-start lg:w-[10%]">
                    <div className="w-full flex justify-between items-center text-vermelho">
                        <a href="https://www.instagram.com/ank.ilumer/" target="_blank"
                            className="w-[35px] h-[35px] cursor-pointer rounded-full bg-laranja flex justify-center items-center
                                lg:w-[30px] lg:h-[30px]">
                            <FaInstagram className="w-full h-full" />
                        </a>
                        <a href="https://www.facebook.com/people/ANK-Ilumer/61561552288144/" target="_blank"
                            className="w-[35px] h-[35px] cursor-pointer rounded-full bg-laranja lg:w-[30px] lg:h-[30px] xl:w-[30px] xl:h-[30px]">
                            <FaFacebook className="w-full h-full" />
                        </a>
                        <a href="https://www.youtube.com/@ANK-Ilumer" target="_blank"
                            className="w-[35px] h-[35px] cursor-pointer rounded-full bg-laranja flex justify-center items-center
                                lg:w-[35px] lg:h-[35px]">
                            <AiFillYoutube className="w-full h-full" />
                        </a>
                    </div>

                    <AboutSpan text="fale conosco" style="bg-vermelho text-center text-white py-[1px] text-[11px] mt-4" />
                </div>

                <div className="w-[100%] h-full flex flex-col justify-start items-center lg:items-end lg:w-[20%]">
                    <Link href={"/"}>
                        <div className="w-[200px] h-[70px] bg-belunne bg-contain bg-center bg-no-repeat"></div>
                    </Link>
                </div>
            </div>

            <a className='bg-vermelho font-arial text-center w-screen flex justify-center items-center text-[14px] text-white'
                href="https://www.wbusiness.com.br/"
                target="_blank"
                title="WBusiness">
                2024. Belunno - Todos os direitos reservados.  Desenvolvido por WBusiness
            </a>
        </footer>
    )
}
