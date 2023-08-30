import { constraints } from "./frame";

const getWebcam = (callback) => {
  navigator.mediaDevices.getUserMedia(constraints)
    .then(callback)
    .catch(error => console.error('Error accessing media devices.', error));
}

const getConnectedDevices = async (type) => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter(device => device.kind === type)
}

export {getWebcam, getConnectedDevices};