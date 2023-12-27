"use client";

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {SocketProvider} from "@/app/Providers/socketProvider";
export default function Home() {
    const router = useRouter()

    const navigateToGame = () => router.push('/game')
    return (
        <SocketProvider>
            <div style={{overflow: 'hidden'}} onClick={navigateToGame}>
                <div className="x-rays">
                    <Image id="rotating-image" src="/rays.png" alt="Rotating" width={2000} height={2000} />
                </div>
                <Image
                    src="/erniRaceLogo.png"
                    className="logo"
                    width={500}
                    height={500}
                    alt="logo of the app"
                />
            </div>
        </SocketProvider>
    );
}
