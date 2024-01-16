"use client";
import { Suspense, useState } from 'react'
import { SpriteAnimator } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Runner = ({active, image}: {active: boolean, image: string}) => {
    const [frameName, setFrameName] = useState('idle')
    const onEnd = ({ currentFrameName, currentFrame }: any) => {
        if (currentFrameName === 'celebration') {
            setFrameName('idle')
        }
    }
    return (
        <Canvas>
            <Suspense fallback={null}>
                <SpriteAnimator
                    scale={[8,8,8]}
                    position={[0,0,0]}
                    startFrame={0}
                    autoPlay={false}
                    loop={true}
                    numberOfFrames={8}
                    alphaTest={0.01}
                    textureImageURL={image}
                    fps={8}
                    play={active}
                />
            </Suspense>
        </Canvas>
    )
}

export default Runner