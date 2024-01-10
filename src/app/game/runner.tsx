"use client";
import React from "react";
import Spritesheet from 'react-responsive-spritesheet';

const Runner = ({active}: {active: boolean}) => (
    <Spritesheet
        style={{width: '100px', height: '100px'}}
        className={`my-element__class--style`}
        image="/sprite.png"
        widthFrame={680}
        heightFrame={470}
        steps={8}
        fps={6}
        autoplay={true}
        loop={true}
        direction={`forward`}
    />
)

export default Runner