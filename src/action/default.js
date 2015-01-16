var tablink;

function start() {

	$('#savePage').on('click',function(){
		var url = "http://cabretio.herokuapp.com/docs/page.docx?page=" + tablink;
	   	$.fileDownload(url, {
		});
	});
}

$(function(){
    chrome.tabs.getSelected(null,function(tab) {
		tablink = tab.url;
		// document.write(tablink);
		start();
	});
});