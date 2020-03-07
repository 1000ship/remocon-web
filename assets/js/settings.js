var $$ = Dom7;

console.log($$(".mouse-speed-slider"))
$$(".mouse-speed-slider").on('change', function (e) {
    var range = app.range.get(e.target).getValue();
    console.log(range)
})