function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YeGbVXG7aD":
        Script1();
        break;
  }
}

function Script1()
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

