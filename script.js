const messages = [
    "Estas segura???",
    "Segura segura segurita?",
    "Pero porque no???",
    "Enserio... completamente segura?",
    "Andale, pliiiiiiiiiiis",
    "PLIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIS",
    "Es porque programo no? por eso me rechazas???, DI QUE SIII",
    "Si apretas no denuevo tu computador va a explotar...",
    "Era broma jeje, DI QUE SIIIIII",
    "Ok... no te dare más intentos..., bueno ya, una más",
    "DI QUE SIIIIII",
    "DI QUE SIIIIII",
    "DI QUE SIIIIII",
    "DI QUE SIIIIII",
    "DI QUE SIIIIII",
    "DI QUE SIIIIII",
    "DI QUE SIIIIII",
    "DI QUE SIIIIII",
    ]

let messageindex = 0;

function handleMNOclick(){
    const MnoB = document.querySelector(".Mmmmno-B");
    const SIB = document.querySelector(".SI-B");

    //MNO
    MnoB.textContent = messages[messageindex];
    messageindex = (messageindex + 1) % messages.length;

    //SI
    const currenSize = parseFloat(window.getComputedStyle(SIB).fontSize);
    const newSize = currenSize * 1.6;
    SIB.style.fontSize = `${newSize}px`;

    //Animacion
    SIB.style.transform = "scale(1)";
    SIB.style.transition = "transform 0.3s ease";

    }

function handleSIClick(){
     window.location.href = "./SI.html";
}