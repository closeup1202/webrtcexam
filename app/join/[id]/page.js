'use client'

import { useState, useEffect, useRef } from "react";
import { getWebcam } from "@/utils/webrtc/device";
import Image from "next/image";
import cameraOff from "@/public/images/cameraoff.png"
import cameraOn from "@/public/images/cameraon.png"
import micOff from "@/public/images/micoff.png"
import micOn from "@/public/images/micon.png"
import Link from "next/link";

export default function Join(){
  const [video, setVideo] = useState(undefined)
  const [audio, setAudio] = useState(undefined)
  const videoRef = useRef(null)

  useEffect(()=>{
    if (typeof window !== 'undefined'){
      getWebcam(stream => {
        videoRef.current.srcObject = stream
        setVideo(true)
        setAudio(true)
      });
    }
  }, [])

  const toggleVideo = () => {
    const videoStream = videoRef.current.srcObject
    if(videoStream != null && videoStream.getVideoTracks().length > 0){
      setVideo(!video)
      videoStream.getVideoTracks()[0].enabled = !video
    } 
  }
  
  const toggleMic = () => {
    const videoStream = videoRef.current.srcObject
    if(videoStream != null && videoStream.getAudioTracks().length > 0){
      setAudio(!audio)
      videoStream.getAudioTracks()[0].enabled = !audio
    } 
  }   

  return(
    <div className="text-center">
      <p className='text-center mt-10 font-phudu font-bold text-5xl text-emerald-900'>Welcome to vtwspring</p>
      <video ref={videoRef} width={350} className='rounded-lg bg-black mx-auto mt-10' autoPlay controls={false}/>
      <div className="mt-5">
        <button onClick={()=>{toggleVideo()}} 
              className={`${video ? 'bg-emerald-900 hover:bg-red-700' : 'bg-red-700 hover:bg-emerald-900'} rounded-3xl p-2 mx-2`}>
          <Image src={video ? cameraOn : cameraOff} width={30} height={30} alt=""></Image>
        </button>
        <button onClick={()=>{toggleMic()}} 
              className={`${audio ? 'bg-emerald-900 hover:bg-red-700' : 'bg-red-700 hover:bg-emerald-900'} rounded-3xl p-2 mx-2`}>
          <Image src={audio ? micOn : micOff} width={30} height={30} alt=""></Image>
        </button>
      </div>
      <div className="text-center mt-10 w-96 mx-auto">
        <Link href={'/test'} className='inline-block w-full rounded-xl p-4 hover:bg-emerald-900 hover:text-white font-phudu font-extrabold'>join</Link>
        <Link href={'/'} className='inline-block w-full rounded-xl mt-3 p-4 hover:bg-orange-600 hover:text-white font-phudu font-extrabold'>home</Link>
      </div>
    </div>
  )
}
