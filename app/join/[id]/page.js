'use client'

import JoinBtn from "@/app/components/joinRoomBtn";
import { useState, useEffect } from "react";
import { constraints } from "@/utils/webrtc/frame";
import Image from "next/image";
import cameraOff from "@/public/images/cameraoff.png"
import cameraOn from "@/public/images/cameraon.png"
import micOff from "@/public/images/micoff.png"
import micOn from "@/public/images/micon.png"

export default function Join(){
  let [camera, setCamera] = useState(true)
  let localStream;
  let localStreamOn;

  useEffect(()=>{
    if (typeof window !== 'undefined'){
      navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => { 
        console.log('Got MediaStream:', stream);
        localStream = stream;
        const video = document.querySelector('video#localVideo');
        video.srcObject = stream;
      })
      .catch(error => { console.error('Error accessing media devices.', error); });
    }
  }, [])

  const videoSwitch = () => {
    console.log(localStreamOn)

    if(localStream && camera){
      const videoTrack = localStream.getVideoTracks();
      videoTrack.forEach(track => {
        localStream.removeTrack(track);
        const video = document.querySelector('video#localVideo');
        video.srcObject = localStream;
        console.log("camera off")
      });
    } else {
      console.log(localStreamOn);
      console.log("camera on")
    }
    setCamera(!camera);
  }

  async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
  }

  return(
    <div className="text-center">
      <p className='text-center mt-20 font-phudu font-bold text-5xl'>Welcome to 채팅방 변수</p>
      <video width={390} className='border-2 border-lime-400 rounded-lg bg-black mx-auto mt-20' id='localVideo' autoPlay controls={false}/>
      <div className="mt-5">
        <button onClick={()=>{videoSwitch()}} className="rounded-full bg-emerald-900 p-3 mx-5 hover:bg-red-700 hover:text-fuchsia-100">
          <Image src={cameraOn} width={40} height={40} alt=""></Image>
        </button>
        <button onClick={()=>{console.log(localStream)}} className="rounded-full bg-emerald-900 hover:bg-red-700 p-3 mx-5">
          <Image src={micOn} width={40} height={40} alt=""></Image>
        </button>
      </div>
      <JoinBtn/>
    </div>
  )
}
