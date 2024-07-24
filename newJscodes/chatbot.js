let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let sendMessage = document.getElementById("sendMsgBtn");
let chatMessage = document.getElementById("chatContainer");



function send() {
    let spanDiv=document.createElement("div");
    spanDiv.classList.add("msg-to-chatbot-container");
    chatMessage.appendChild(spanDiv);
    let paragraphEl=document.createElement("span");
    paragraphEl.classList.add("msg-to-chatbot");
    paragraphEl.textContent=userInput.value;
   
    spanDiv.appendChild(paragraphEl);
    let x = Math.floor((Math.random() * 10)%6);
    let spanDiv2=document.createElement("div");
    spanDiv2.classList.add("msg-from-chatbot-container");
    chatMessage.appendChild(spanDiv2);
    let paragraphFromBot=document.createElement("span");
    paragraphFromBot.classList.add("msg-from-chatbot");
    paragraphFromBot.textContent=chatbotMsgList[x];
    console.log(x);
   
    spanDiv2.appendChild(paragraphFromBot);
    
}

sendMessage.addEventListener("click", send);






