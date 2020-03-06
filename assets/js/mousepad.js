$(function(){
    var prevX = 0
    var prevY = 0
    var isMouseDown = false

    mouseDownEvent = function(e){
        prevX = e.pageX
        prevY = e.pageY
        isMouseDown = true
        printLog("mousedown " + e.pageX + ", " + e.pageY);
    }

    mouseUpEvent = function(e){
        isMouseDown = false
        printLog("mouseup " + e.pageX + ", " + e.pageY);
    }

    mouseMoveEvent = function(e){
        if (!isMouseDown)
            return;
        let currentX = e.pageX;
        let currentY = e.pageY;
        remoteMoveRel( e.pageX - prevX, e.pageY - prevY );
        prevX = currentX;
        prevY = currentY;
        e.preventDefault()
    }

    $(".mousepad").on("mousedown", mouseDownEvent);
    $(".mousepad").on("touchstart", mouseDownEvent);
    $("body").on("mouseup", mouseUpEvent);
    $("body").on("touchend", mouseUpEvent);
    $(".mousepad").on("mousemove", mouseMoveEvent );
    $(".mousepad").on("touchmove", mouseMoveEvent );
    $(".mousepad").on("click", function(e){
        remoteClick();
    });
    
})