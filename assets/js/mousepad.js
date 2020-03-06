
var prevX = 0
var prevY = 0
var isMouseDown = false

function mouseDownEvent(e) {
    prevX = e.pageX
    prevY = e.pageY
    isMouseDown = true
}

function mouseUpEvent(e){
    isMouseDown = false
}

function mouseMoveEvent(e){
    if (!isMouseDown)
        return;
    let currentX = e.pageX;
    let currentY = e.pageY;
    remoteMoveRel( e.pageX - prevX, e.pageY - prevY );
    prevX = currentX;
    prevY = currentY;
    e.preventDefault()
}

function sendKeyboardInput (){
    let str = $("#keyboardInput")[0].value;
    $("#keyboardInput")[0].value = "";
    remoteTyping( str );
}

// $(".mousepad").mousedown(mouseDownEvent);
$(".mousepad").touchstart(mouseDownEvent);
// $("body").mouseup(mouseUpEvent);
$("body").touchend(mouseUpEvent);
// $(".mousepad").mousemove( mouseMoveEvent );
$(".mousepad").touchmove( mouseMoveEvent );
$(".mousepad").click( function(e){
    remoteClick();
});
