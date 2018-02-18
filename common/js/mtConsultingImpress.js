/**
 * Created by Maciej on 2015-06-30.
 */
function addKeyListener() {
    document.addEventListener("keyup", function ( event ) {
        if ( event.keyCode === 79 || event.keyCode === 66 ) {
           showOverview();
        } if (event.keyCode === 78 || event.keyCode === 175) {
            toggleNotes()
        } if (event.keyCode === 72) {
            help();
        } if( event.keyCode === 80) {
            impressConsole().open(); // If you want them to open automatically
        } if (event.keyCode === 174) {
            history.back();
        }
});
}
function help() {
    alert("press on element of presentation to go directly to it\npress 'n' to show/hide notes\npress 'o' to show overview\npress 'p' to show presenter view");
}
function toggleNotes() {
    var viewerNotes = document.getElementsByClassName('viewerNotes');
    for(var i = 0; i < viewerNotes.length; i++){
        viewerNotes.item(i).classList.toggle('showNotes');
    }
}
function showOverview() {
    impress().goto("overview");
}

addKeyListener();