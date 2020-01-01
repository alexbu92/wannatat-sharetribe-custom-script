window.onload = function () {  // make sure you run after the document has been loaded, otherwise you won't have access to jquery.
	$( document ).ready(function() {
            DisableImageBackground();
            AddView3DButton();
            DisableQuantitySelector();
            AddLandbot();
	});
}

function DisableImageBackground() {
    $('#listing-image-link').css('background-color', 'white');
}

function AddView3DButton() {
    var $src = $('#listing-image-link img').attr('src');
    $src = $src.replace(/\?(?:.(?!\?))+$/g, "");
    console.log($src);
    var uuid = uuidv4();
    var $input = $('<a href="https://wannatat.firebaseapp.com/?image=' + $src + "?" + uuid + '" target="_blank">View on 3D model</a>');
    console.log($input);
    $('.listing-description-content').append($input);
}

function DisableQuantitySelector() {
    $('#quantity').attr("disabled", true);
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

function AddLandbot() {
    $("<script src='https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js'></script>").appendTo(document.body);
    $("<script> var myLandbot = new LandbotLivechat({index: 'https://landbot.io/u/H-335773-6DOHR4VX5MJ9639B/index.html',}); </script>").appendTo(document.body);
}