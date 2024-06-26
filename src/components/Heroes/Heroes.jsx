import React from 'react';
import './Heroes.scss';
export default function Heroes() {
  return (
    <section className="absolute w-[90%] left-[50%] translate-x-[-50%]">
      <h2 data-aos="fade-up" className="text-center text-[30px] mt-[20px] font-semibold">Наши сегодняшные гости</h2>
      <div className="flex-col justify-center mt-[50px]">
        <div className="flex flex-col pb-4">
          <div   data-aos="zoom-in" className='flex justify-center'>
          <img
        
            className="w-[150px] h-[150px] rounded-[50%]"
            src="./timur.png"
            alt=""
          />

          </div>
        
          <h3 data-aos="fade-up" className="text-center mt-[10px] text-[20px] font-semibold">
            Ведущий <br /> Тимур Камолов
          </h3>
          <p data-aos="fade-up" className="text-center mt-[10px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eveniet similique
            optio minima excepturi unde illum iusto corrupti ad sapiente? Quibusdam quia maxime
            optio ex, tempore distinctio nemo cupiditate aliquid!
          </p>
        </div>
        <div className="flex flex-col pb-4">
          <img

            className="w-[150px] ml-[50%] translate-x-[-50%] h-[150px] rounded-[50%]"
            src="./sati.png"
            alt=""
          />
          <h3 data-aos="fade-up" className="text-center mt-[10px] text-[20px] font-semibold">
            Ведущий <br /> Сати Мирзаянц
          </h3>
          <p data-aos="fade-up" className="text-center mt-[10px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eveniet similique
            optio minima excepturi unde illum iusto corrupti ad sapiente? Quibusdam quia maxime
            optio ex, tempore distinctio nemo cupiditate aliquid!
          </p>
        </div>
        <div className="flex flex-col pb-4">
          <img
            className="w-[150px] ml-[50%] translate-x-[-50%] h-[150px] rounded-[50%] "
            src="aziz.png"
            alt=""
          />
          <h3 data-aos="fade-up" className="text-center mt-[10px] text-[20px] font-semibold">
            Артист <br /> Азиз Юлдашов
          </h3>
          <p data-aos="fade-up" className="text-center mt-[10px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eveniet similique
            optio minima excepturi unde illum iusto corrupti ad sapiente? Quibusdam quia maxime
            optio ex, tempore distinctio nemo cupiditate aliquid!
          </p>
        </div>
      </div>
    </section>
  );
}
