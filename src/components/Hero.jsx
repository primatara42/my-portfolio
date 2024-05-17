import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-blue-500 text-white h-96 flex items-center justify-center" style={{ backgroundImage: 'url(/heroimage.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-opacity-50 bg-black w-full h-full absolute top-0 left-0"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Selamat Datang di Portofoliogram</h1>
        <p className="mt-4 text-lg md:text-2xl">Tampilkan diri anda dalam bentuk professional!</p>
        <button
                class="text-white bg-[#6096B4] font-bold text-3xl px-7 py-5 rounded-md md:text-xl md:py-3 my-5"
              >
                Tambahkan Portofolio Sekarang!
              </button>
      </div>
    </section>
  );
};

export default Hero;
