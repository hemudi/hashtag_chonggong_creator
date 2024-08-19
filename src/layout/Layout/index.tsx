"use client";

import Footer from "@layout/Footer";
import Header from "@layout/Header";
import Main from "@layout/Main";
import Image from "next/image";
import { useState, useEffect, MouseEvent } from "react";

const IMAGES = [
  "/assets/images/mouse-1.png",
  "/assets/images/mouse-2.png",
  "/assets/images/mouse-3.png",
  "/assets/images/mouse-4.png",
  "/assets/images/mouse-5.png",
  "/assets/images/mouse-6.png",
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [xy, setXY] = useState({ x: 9999, y: 9999 });
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsMobile(/Mobi/i.test(window.navigator.userAgent));
  }, []);

  const calcXY = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y };
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    setXY(calcXY(e));
  };

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    setXY(calcXY(e));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      onClick={(e) => handleOnClick(e)}
      onMouseMove={(e) => handleMouseMove(e)}
      className="flex flex-col justify-start items-center min-w-fit min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/assets/images/background.png')] overflow-hidden"
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
      <div
        className="absolute z-40"
        style={isMobile ? { left: xy.x, top: xy.y } : { left: xy.x + 10, top: xy.y + 10 }}
      >
        <Image src={IMAGES[currentImageIndex]} width={30} height={30} alt="mouse" />
      </div>
    </div>
  );
};

export default Layout;
