window.onload = function () {  // make sure you run after the document has been loaded, otherwise you won't have access to jquery.
	$( document ).ready(function() {
            DisableImageBackground();
            AddView3DButton();
	});
}

function DisableImageBackground() {
    $('#listing-image-link').css('background-color', 'white');
}

function AddView3DButton() {
    var $src = $('#listing-image-link img').attr('src');
    console.log($src);
    var $input = $('<a href="https://www.thesitewizard.com/" target="_blank">thesitewizard.com</a>');

}