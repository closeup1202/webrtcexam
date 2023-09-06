'use client'

import { useState, useEffect, useRef } from "react";
import { getWebcam } from "@/utils/webrtc/device";
import Image from "next/image";
import cameraOff from "@/public/images/cameraoff.png"
import cameraOn from "@/public/images/cameraon.png"
import micOff from "@/public/images/micoff.png"
import micOn from "@/public/images/micon.png"
import setting1 from "@/public/images/setting1.png"
import setting2 from "@/public/images/setting2.png"
import Link from "next/link";
import { conn } from "@/utils/webrtc/websocket"
import { peerConnection, dataChannel } from "@/utils/webrtc/client";

export default function Join(props){
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

  // console.log(conn)
  // console.log(peerConnection)
  // console.log(dataChannel)

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
      <p className='text-center mt-10 font-phudu font-bold text-5xl text-emerald-900'>Welcome to {props.params.id}</p>
      <video ref={videoRef} width={350} className='rounded-lg bg-black mx-auto mt-10' autoPlay controls={false}/>
      <div className="mt-5">
        <div className="inline-block mx-1">
          <button onClick={()=>{toggleVideo()}} 
                className={`${video ? 'deviceBtnHoverPositive' : 'deviceBtnHoverNegative'} rounded-l-3xl p-2 w-10 h-11`}>
            <Image src={video ? cameraOn : cameraOff} alt=""/>
          </button>
          <button className={`${video ? 'deviceBtnHoverPositive' : 'deviceBtnHoverNegative'} rounded-r-3xl p-1 w-8 h-11`}>
            <Image src={video ? setting1 : setting2} alt=""/>
          </button>
        </div>
        <div className="inline-block mx-1">
          <button onClick={()=>{toggleMic()}} 
                className={`${audio ? 'deviceBtnHoverPositive' : 'deviceBtnHoverNegative'} rounded-l-3xl p-2 w-10 h-11`}>
            <Image src={audio ? micOn : micOff} alt=""/>
          </button>
          <button className={`${audio ? 'deviceBtnHoverPositive' : 'deviceBtnHoverNegative'} rounded-r-3xl p-1 w-8 h-11`}>
            <Image src={audio ? setting1 :setting2} alt=""/>
          </button>
        </div>
      </div>
      <div className="text-center mt-10 w-96 mx-auto">
        <Link href={'/test'} className='inline-block w-full rounded-xl p-4 hover:bg-emerald-900 hover:text-white font-phudu font-extrabold'>join</Link>
        <Link href={'/'} className='inline-block w-full rounded-xl mt-3 p-4 hover:bg-orange-600 hover:text-white font-phudu font-extrabold'>home</Link>
      </div>
    </div>
  )
}
