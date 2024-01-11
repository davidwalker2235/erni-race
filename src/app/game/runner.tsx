"use client";
import Spritesheet from 'react-responsive-spritesheet';

const Runner = ({active, image}: {active: boolean, image: string}) => {

    return (
        <Spritesheet
            style={{width: '100px', height: '100px'}}
            image={image}
            widthFrame={680}
            heightFrame={470}
            steps={8}
            fps={6}
            autoplay={active}
            loop={true}
            direction={`forward`}
        />
    )
}

export default Runner