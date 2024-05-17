import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#6096B4] text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Portfoliogram</h1>
      <nav className="flex space-x-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">Tentang</a>
        <a href="#contact" className="hover:underline">Kontak</a>
      </nav>
    </header>
  );
};

export default Header;
