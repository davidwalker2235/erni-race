"use client";
import React, {useRef} from "react";
import Image from 'next/image'
import Layer from "@/app/game/layer";

const Page = () => {
    const target = useRef(null)
    const width = 10000;

    return (
        <div ref={target} style={{
            backgroundImage: "url('/sky.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: `${width}px`
        }} className="h-screen">
            <div className="fixed top-10 left-0 w-full">
                <Image className="bg-repeat-x" src="/moon.png" alt="moon" height={120} width={width}/>
            </div>
            <Layer filename="farBuild" target={target} width={width} translate={[-50, 50]} />
            <Layer filename="closeBuild" target={target} width={width} translate={[-50, 40]} />
            <Layer filename="trees" target={target} width={width} translate={[-50, 15]} />
            <Layer filename="pista" target={target} width={width} translate={[-50, 15]} />

        </div>
    );
}

export default Page;