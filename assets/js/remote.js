var webSocket = new WebSocket("ws://172.30.1.43:2362");

// set --
function remoteMoveRel( relX, relY )
{
    webSocket.send("m " + relX + " " + relY);
}

function remoteClick()
{
    webSocket.send("c");
}

function remoteTyping( str )
{
    webSocket.send("t " + str);
}

function remoteHotkey( ...arg )
{
    webSocket.send("h " + arg.join(" "));
}

function remoteScreenshot()
{
    webSocket.send("ss");
}

/*
m : move
c : click
h : hotkey
t : typing
ss : screenshot
*/

function printLog ( log )
{
    app.toast.create({
        text: log,
        position: 'top',
        closeTimeout: 2000,
      }).open();
}

function disconnect(){
    webSocket.close();
}