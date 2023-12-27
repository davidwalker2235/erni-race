"use client";

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {SocketProvider} from "@/app/Providers/socketProvider";
import {ParallaxProvider} from 'react-scroll-parallax'
import Cover from "@/app/cover";

export default function Home() {
  const router = useRouter()

  const navigateToGame = () => router.push('/game')
  return (
      <Cover/>
  );
}