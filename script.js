function getVoice(){
    let voices = speechSynthesis.getVoices();
    if(!voices.length){
        let utterance = new SpeechSynthesisUtterance("");
        speechSynthesis.speak(utterance);
        voices = speechSynthesis.getVoices();
    }
    return voices;
}

function speak(text,voice,rate, pitch,volume){
    let speakData = new SpeechSynthesisUtterance();
    speakData.rate = rate;
    speakData.volume = volume;
    speakData.pitch = pitch;
    speakData.text = text;
    speakData.lang = 'en';
    speakData.voice = voice;
    speechSynthesis.speak(speakData);
}
function testVariable() {
    var strText = document.getElementById("spech").value;          
    // var strText1 = document.getElementById("textTWO").value;
    let result = strText;
    document.getElementById('at').textContent = result;
}


if('speechSynthesis' in window){
    let voices = getVoice();
    let rate = 1, pitch=2, valume=2;
    console.log(x); 
    let text = 'Ateesh kumar';

    
   

    setTimeout(()=>{
        rate = 0.5; 
        pitch = 1.5; 
        valume = 2;
        // text = "Speaking with valume = 1 rate = 1 pitch = 2";
        speak(text,voices[10],rate,pitch,valume);

    },2000);


}else{
    console.log('speech Synthesis Not Supported');
}