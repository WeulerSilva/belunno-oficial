"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";

export default function Header() {
    const local = usePathname();
    const [MenuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);

    const handleMenuOpen = () => {
        setMenuMobileOpen(!MenuMobileOpen);
    };

    return (
        <header className={`w-screen h-[70px] ${local === '/' ? 'fixed top-0 z-10' : 'bg-laranja border-b-[6px] border-white'}   
            flex justify-center items-center`}>
            <div className="w-[80%] h-full flex justify-between items-center relative md:w-[90%] lg:w-[80%]">
                <Link href={"/"}>
                    <div className="w-[200px] h-[70px] bg-belunne bg-contain bg-center bg-no-repeat"></div>
                </Link>

                <ul className="hidden justify-around items-center w-[60%] h-full text-black font-semibold uppercase md:flex">
                    <Link href={"/"} className={`${local === '/' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer
                        ${local === '/' ? 'text-white' : ''}`}>
                        Home</Link>
                    <Link href={"/Sobre"} className={`${local === '/Sobre' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer
                        ${local === '/' ? 'text-white' : ''}`}>
                        Sobre</Link>
                    <Link href={"/Produtos"} className={`${local === '/Produtos' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer
                        ${local === '/' ? 'text-white' : ''}`}>
                        Produtos</Link>
                    <Link href={"/Receitas"} className={`${local === '/Receitas' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer
                        ${local === '/' ? 'text-white' : ''}`}>
                        Receitas</Link>
                    <Link href={"/Contato"} className={`${local === '/Contato' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer
                        ${local === '/' ? 'text-white' : ''}`}>
                        Contato</Link>
                </ul>
                <div className="w-1 h-1"></div>
            </div>

            <MenuMobile onClick={handleMenuOpen} />

            <div className={`w-[85vw] ${MenuMobileOpen ? 'h-[400px]' : 'h-0'} bg-white absolute ${local === '/' ? 'top-20' : 'top-16'} 
                transition-all duration-500 ease-in-out overflow-hidden flex justify-center items-center z-50`}>
                <nav>
                    <ul className="flex flex-col justify-center items-center space-y-8 font-semibold uppercase text-3xl">
                        <Link href={"/"} className={`${local === '/' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer
                        ${local === '/' ? 'text-white' : ''}`}>
                            Home</Link>
                        <Link href={"/"} className={`${local === '/' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer
                        ${local === '/' ? 'text-black' : ''}`}>
                            Inicio</Link>
                        <Link href={"/Sobre"} className={`${local === '/Sobre' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer
                        ${local === '/' ? 'text-black' : ''}`}>
                            Sobre</Link>
                        <Link href={"/Produtos"} className={`${local === '/Produtos' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer
                        ${local === '/' ? 'text-black' : ''}`}>
                            Produtos</Link>
                        <Link href={"/Receitas"} className={`${local === '/Receitas' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer
                        ${local === '/' ? 'text-black' : ''}`}>
                            Receitas</Link>
                        <Link href={"/Contato"} className={`${local === '/Contato' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer
                        ${local === '/' ? 'text-black' : ''}`}>
                            Contato</Link>
                    </ul>
                </nav>
            </div>

        </header>
    );
}
