import Image from 'next/image';
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between max-h-screen">
        <div className="x-rays flex justify-center items-center max-h-screen">
            <Image id="rotating-image" src="/rays.png" alt="Rotating" width={2000} height={2000} />
        </div>
      <Image
        src="/erniRaceLogo.png"
        className="logo"
        width={500}
        height={500}
        alt="logo of the app"
      />
    </main>
  )
}