import React from 'react';
import './Main.scss';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Ribon from '../Ribbon/Ribon';

export default function Main() {
  const [text] = useTypewriter({
    words: ['На открытие', 'В UZIT Group'],
    loop: {},
  });

  return (
    <section className="main">
      <div className="sticky">
        <video src="./UZIT-video.mp4" autoPlay muted loop></video>
      </div>
      {/* <img
        className="w-[100%] rounded-lg ml-[50%] translate-x-[-50%]"
        src="./main-background.jpg"
        alt=""
      /> */}
      <h1 className="text-center text-[35px] mt-[25px]">
        Добро Пожаловать! <br />
        <span className="text-[35px]">{text}</span>
        <span style={{ color: '#08d23a' }}>
          <Cursor />
        </span>
      </h1>
      <div className="pl-[10px] pr-[10px] mt-[15px]">
        <p className="text-center text-[20px]">
          Международная маркетинговая и IT-компания, которая имеет основную цель развитие IT-сферы в
          Узбекистане и создание возможностей для молодежи на мировой арене.
        </p>
      </div>
      <Ribon />
    </section>
  );
}
