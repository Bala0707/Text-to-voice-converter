let textBox = document.getElementById(`textbox`);
let button = document.getElementById(`button`);

//when button click
button.addEventListener("click",() => { 
    let text = textBox.value.trim();   
    if(text === ""){
        alert("please enter some text")
        return;
    }
    //create a speech 
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = select.value;
    // speak the text
    window.speechSynthesis.speak(speech);
})