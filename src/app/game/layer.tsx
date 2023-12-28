"use client";

import React from "react";
import Image from "next/image";
import {useParallax} from "react-scroll-parallax";
import {CSSEffect} from "parallax-controller";

const Layer = ({filename, target, width, translate}:{filename: string, target: React.MutableRefObject<null>,width: number, translate:number[]}) => {

  const trees = useParallax({
    // @ts-ignore
    targetElement: target.current,
    translateX: translate as CSSEffect,
    easing: "easeOutQuad",
  })

  const renderImage = () => {
    const imageArray = [];
    for (let step = 0; step < ((width/1000)); step++) {
      imageArray.push(<Image key={`${filename}-${step}`} src={`/${filename}.png`} alt={filename} height={350} width={1000} />)
    }

    return imageArray;
  }

  return (
    <div
      ref={trees.ref as React.LegacyRef<HTMLDivElement>}
      className="absolute"
      style={{display:'flex', maxWidth: `${width}px`}}>
      {renderImage()}
    </div>
  );
}

export default Layer;