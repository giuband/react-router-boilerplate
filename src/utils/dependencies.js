export function areDepenciesSupported() {
  const isAudioContextSupported = window.AudioContext || window.webkitAudioContext;
  const isFileReaderSupported = window.FileReader;
  const isRequestAnimationFrameSupported = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame;
  const isCancelAnimationFrameSupported = window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
  const isWebWorkerSupporter = window.Worker;
  return (isAudioContextSupported && isFileReaderSupported &&
    isRequestAnimationFrameSupported && isCancelAnimationFrameSupported &&
    isWebWorkerSupporter && true);
}

export function getEnvironmentDependencies() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame;
  const cancelAnimationFrame = window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
  return { AudioContext, requestAnimationFrame,
    cancelAnimationFrame };
}
