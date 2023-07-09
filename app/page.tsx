"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import banner from "../public/images/geralt-banner.jpg";
import ImageBox from "./components/ImageBox";
import yennefer from "../public/images/personagens/yennefer.jpg";
import triss from "../public/images/personagens/triss.jpg";
import vilgefortz from "../public/images/personagens/vilgefortz.jpg";
import ciri from "../public/images/personagens/ciri.jpg";
import geralt from "../public/images/personagens/geralt.jpg";
import regis from "../public/images/personagens/regis.jpg";
import lara from "../public/images/personagens/lara.jpg";
import avallach from "../public/images/personagens/avallach.jpg";
import mapa1 from "../public/images/mapas/witcher-map1.jpg";
import mapa2 from "../public/images/mapas/witcher-map2.jpg";
import capa from "../public/images/capa.png";

export default function Home() {
  return (
    <main className="max-w-[1300px] mx-auto px-8">
      <div className="pt-10 md:flex md:gap-5 md:items-center">
        <div className="w-full md:w-[800px] rounded-md overflow-hidden">
          <Image src={banner} alt="img" />
        </div>
        <div className="h-full">
          <h1 className="text-lg text-center mt-8 md:text-2xl">
            E-book: Um Guia Ilustrativo Sobre o Universo de The Witcher
          </h1>
          <div className="w-1/3 mx-auto mt-4">
            <a href="https://go.hotmart.com/M72554574D" target="blank">
              <button className="p-2 bg-gradient-to-r from-gray-100 to-gray-300 w-full text-red-600 font-medium text-sm md:text-base rounded-sm">
                SAIBA MAIS
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* texto */}
      <div className="p-4 mt-20 md:w-5/6 mx-auto">
        <p className="text-2xl text-center mt-8 mb-10">
          Quer saber tudo sobre The Witcher? Então esse ebook é pra você!
        </p>
        <p className="text-center leading-loose">
          O principal foco desse ebook é servir como um guia desse universo e
          explicar de forma resumida a história contida nos 5 romances,
          considerando que eles tratam da história mais densa e importante da
          saga de Geralt. Contudo, também serão abordados os contos mais
          relevantes dos outros livros, que complementam e ajudam no
          entendimento da história dos romances.
        </p>
      </div>
      {/* personagens */}
      <div className="mt-36">
        <p className="text-sm text-center tracking-[.3em]">
          TODOS OS PERSONAGENS
        </p>
        <div className="mt-14">
          <Swiper
            className="w-full"
            navigation={true}
            rewind={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            slidesPerView={1}
            modules={[Navigation]}>
            <SwiperSlide className="ml-8 sm:ml-24 xl:ml-6">
              <ImageBox image={geralt} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox image={yennefer} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox image={ciri} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox image={triss} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox image={vilgefortz} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox image={regis} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox image={avallach} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox image={lara} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Mapas */}
      <div className="mt-32">
        <p className="text-sm text-center tracking-[.3em]">MAPAS</p>
        <div className="mt-14">
          <div className="md:w-[800px] md:h-[600px] mx-auto">
            <Image src={mapa1} alt="img" />
          </div>
          <div className="md:w-[800px] md:h-[600px] mt-10 md:mt-0 mx-auto">
            <Image src={mapa2} alt="img" />
          </div>
        </div>
      </div>
      <div className="mt-40 md:mt-96">
        <p className="text-center md:text-2xl mt-20">
          Saiba com detalhes sobre os principais acontecimentos da história
        </p>
        <p className="text-center mt-16 cursor-context-menu hover:underline">
          A batalha de Sodden
        </p>
        <div className="md:w-[400px] mx-auto mt-8">
          <video src={"/videos/fringilla.mp4"} autoPlay muted loop></video>
        </div>
        <p className="text-center mt-16 cursor-context-menu hover:underline">
          Guerras entre Reinos do Norte e Nilfgaard
        </p>
        <div className="md:w-[400px] mx-auto mt-8">
          <video src={"/videos/siege.mp4"} autoPlay muted loop></video>
        </div>
        <p className="text-center mt-16 cursor-context-menu hover:underline">
          A história do Sangue Antigo
        </p>
        <div className="md:w-[400px] mx-auto mt-8">
          <video src={"/videos/pavetta.mp4"} autoPlay muted loop></video>
        </div>
      </div>
      <div className="mt-40 pb-20">
        <p className="text-center text-2xl">E muito mais...</p>
        <div className="w-[200px] mx-auto my-10">
          <Image src={capa} alt="capa" />
        </div>
        <div className="w-1/3 mx-auto mt-4">
          <a href="https://go.hotmart.com/M72554574D" target="blank">
            <button className="p-2 bg-gradient-to-r from-gray-100 to-gray-300 w-full text-red-600 font-medium text-sm md:text-base rounded-sm">
              COMPRE AGORA
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
