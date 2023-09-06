let configuration = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]};
const peerConnection = new RTCPeerConnection(configuration);
const dataChannel = peerConnection.createDataChannel("dataChannel", { reliable: true });

dataChannel.onerror = (error) => console.log("Error:", error)
dataChannel.onclose = () => console.log("Data channel is closed")

peerConnection.createOffer().then((result)=>{
  console.log(result)
}).catch((error) => {
  console.log(error)
})

peerConnection.onicecandidate = (event) => {
  if (event.candidate) {
      send({
          event : "candidate",
          data : event.candidate
      });
  }
};

export { peerConnection, dataChannel }