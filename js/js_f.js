function MyFunction()
{
	// ...
	return false;
}
function loadContent()
{
	//loadHeader();
	//loadCarousel();
	loadFooter();
	loadIframe('#iframe1', 'zoryana.json');
	//loadIframe('#iframe2', 'zoryana.json');
	loadIframe('#iframe2', 'ira.json');
}
/*function loadCarousel()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			var div = document.createElement("div");
			div.innerHTML = xhttp.responseText;
			div.setAttribute("class", "container");
			document.getElementsByTagName("body")[0].appendChild(div);
	    }
	};
	xhttp.open("GET", "container.html", true);
	xhttp.send();
}*/
function loadFooter()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			var footer = document.createElement("footer");
			footer.innerHTML = xhttp.responseText;
			footer.setAttribute("class", "page-footer");
			document.getElementsByTagName("body")[0].appendChild(footer);
	    }
	};
	xhttp.open("GET", "footer.html", true);
	xhttp.send();
}
$(document).ready(function(){
      $('.parallax').parallax();
    });

function loadIframe(iframe, filename)
{
	var iframes = document.getElementById("iframes").children;
	/*//
	for(var i = 0; i < count(iframes); ++i)
	{
		//iframes[i];
	}
	//*/
	/*//
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	//if(this.responseXML == null)
	    	{
	    		//xhttp.responseXML = JSON.parse(xhttp.responseText);
	    		document.getElementById("iframes").innerHTML = xhttp.responseText;
        		//iframes[0].src = xhttp.responseXML[0]["url"];
        		//iframes[1].src = xhttp.responseXML[1]["url"];
	    	}
	    }
	};
	xhttp.open("GET", "zoryana.json", true);
	xhttp.send();
	//alert(iframes.length);
	//alert(xhttp.responseXML.length);
	//*/
	var list = [];
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			list = JSON.parse( xhttp.responseText);
			var number1 = Math.random() * (list.length - 1) + 0;
			number1 = parseInt(number1);
			$(iframe).attr('src', list[number1].url);
	    }
	};
	xhttp.open("GET", filename, true);
	xhttp.send();
};
