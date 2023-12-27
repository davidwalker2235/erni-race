"use client";

import { io } from "socket.io-client";
import { useState } from "react";
import Image from 'next/image'

export default function Game() {

    return (
        <div>
            <Image
                src="/layer01.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <Image
                src="/layer02.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <Image
                src="/layer03.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <Image
                src="/layer04.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <Image
                src="/layer08.png"
                width={2000}
                height={2000}
                alt="Picture of the author"
            />
        </div>
    );
}
