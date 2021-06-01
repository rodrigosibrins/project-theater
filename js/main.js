let character = document.getElementById('character');
let dialog = document.getElementById('dialog');
const playBtn = document.getElementById('play');

playBtn.addEventListener('click', ()=>{
    nameCharacter(character.value);
    playDialog(dialog.value);
});
function nameCharacter(text){
    let speech = new SpeechSynthesisUtterance(text);
    
    speech.lang = "es";
    speech.volume = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
function playDialog(text){
    let speech = new SpeechSynthesisUtterance(text);
    
    speech.lang = "es";
    speech.volume = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
//function playDialog(text){
//    speechSynthesis.speak(new SpeechSynthesisUtterance(text))
//}