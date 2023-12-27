"use client";
import React, {useRef} from "react";
import Image from 'next/image'
import {useParallax, ParallaxProvider} from "react-scroll-parallax";

const Game = () => {
    const target = useRef(null)
    const farBuilds = useParallax({
        targetElement: target.current,
        translateX: [-43, 50],
        easing: "easeOutQuad",
    })
    const closeUpBuilds = useParallax({
        targetElement: target.current,
        translateX: [0, 200],
        easing: "easeOutQuad",
    })

    return (
        <div ref={target} style={{
            backgroundImage: "url('/sky.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: '5000px'
        }} className="h-screen">
            <div className="fixed top-10 left-0 w-full">
                <Image className="bg-repeat-x" src="/moon.png" alt="moon" height={120} width={2000}/>
            </div>
            <div
                ref={farBuilds.ref}
                className="absolute"
                style={{display:'flex', maxWidth:'5000px'}}>
                    <Image className="bg-repeat-x" src="/farBuildings.png" alt="farBuildings" height={350} width={1000} />
                    <Image className="bg-repeat-x" src="/farBuildings.png" alt="farBuildings" height={350} width={1000} />
                    <Image className="bg-repeat-x" src="/farBuildings.png" alt="farBuildings" height={350} width={1000} />
                    <Image className="bg-repeat-x" src="/farBuildings.png" alt="farBuildings" height={350} width={1000} />
                    <Image className="bg-repeat-x" src="/farBuildings.png" alt="farBuildings" height={350} width={1000} />
            </div>
            <div
                ref={closeUpBuilds.ref}
                className="absolute"
                style={{display:'flex', maxWidth:'5000px'}}
            >
                <Image src="/closeUpBuild.png" alt="farBuildings" height={350} width={1000} />
                <Image src="/closeUpBuild.png" alt="farBuildings" height={350} width={1000} />
                <Image src="/closeUpBuild.png" alt="farBuildings" height={350} width={1000} />
                <Image src="/closeUpBuild.png" alt="farBuildings" height={350} width={1000} />
                <Image src="/closeUpBuild.png" alt="farBuildings" height={350} width={1000} />
            </div>
        </div>
    );
}

export default Game;