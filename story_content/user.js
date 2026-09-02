window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script4 = function()
{
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'assessmentComplete') {
        var player = GetPlayer();
        var d = event.data.data;
        player.SetVar('assessmentComplete', true);
        player.SetVar('assessmentData', JSON.stringify(d));
    }
});
}

};
