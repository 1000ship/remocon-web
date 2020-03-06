var webSocket = new WebSocket("ws://192.168.0.12:2362");
var messageTextArea = document.getElementById("messageTextArea");

// 소켓 접속이 되면 호출되는 함수
webSocket.onopen = function(message){
    messageTextArea.value += "Server connect...\n";
};

// 소켓 접속이 끝나면 호출되는 함수
webSocket.onclose = function(message){
    messageTextArea.value += "Server Disconnect...\n";
};
// 소켓 통신 중에 에러가 발생되면 호출되는 함수
webSocket.onerror = function(message){
    messageTextArea.value += "error...\n";
};

// 소켓 서버로 부터 메시지가 오면 호출되는 함수.
webSocket.onmessage = function(message){
    messageTextArea.value += "Recieve From Server => "+message.data+"\n";
};

// 서버로 메시지를 전송하는 함수
function sendMessage(){
    var message = document.getElementById("textMessage");
    messageTextArea.value += "Send to Server => "+message.value+"\n";
    webSocket.send(message.value);
    message.value = "";
}

// set --
function remoteMoveRel( relX, relY )
{
    webSocket.send("m " + relX + " " + relY);
}
function remoteClick()
{
    webSocket.send("c");
}


/*
m : move
c : click
*/

// ---

function printLog ( log )
{
    messageTextArea.value += log + "\n";
}

function disconnect(){
    webSocket.close();
}