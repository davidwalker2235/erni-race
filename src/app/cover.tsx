"use client";

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Runner from "@/app/game/runner";
import React, {useState} from "react";

export default function Cover() {
    const router = useRouter()
    const [run, setRun] = useState(false)
    const navigateToGame = () => router.push('/game')
    return (
        <>
            <div style={{overflow: 'hidden'}} onClick={navigateToGame}>
                <Runner active={run} image="/sprite.png"/>
                <button onClick={() => setRun(true)}>play</button>
                <div className="x-rays">
                    <Image id="rotating-image" src="/rays.png" alt="Rotating" width={3000} height={3000} />
                </div>
                <Image
                    src="/erniRaceLogo.png"
                    className="logo"
                    width={500}
                    height={500}
                    alt="logo of the app"
                />
            </div>
        </>

    );
}