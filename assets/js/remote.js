
app.data.socketIp = "172.30.1.43";
app.data.socketPort = "2362"

app.dialog.preloader( "Connecting to\nws://"+app.data.socketIp+":"+app.data.socketPort );
var webSocket = new WebSocket("ws://" + app.data.socketIp + ":" + app.data.socketPort);

webSocket.onopen = function()
{
    printLog("Connect successfully!");
    app.dialog.close();
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