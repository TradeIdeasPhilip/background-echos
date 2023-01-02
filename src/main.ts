/**
 * Test of speech API.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#
 * https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
 * https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/
 * https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/
 */

import './style.css'


const utterThis = new SpeechSynthesisUtterance("What is thy bidding my master?");
const voices = speechSynthesis.getVoices();
console.log(voices);
if (voices.length == 0) {
  // always!
  setTimeout(() => {
    const voices = speechSynthesis.getVoices();
    console.log(voices);
    const voice = voices.find((voice) => voice.name == "Google UK English Male");
    if (voice) {
      utterThis.voice = voice;
    }        
  }, 1);
}
const voice = voices.find((voice) => voice.name == "Google UK English Male");
if (voice) {  // Never!
  utterThis.voice = voice;
}
document.getElementById("speak")?.addEventListener("click", () => speechSynthesis.speak(utterThis));