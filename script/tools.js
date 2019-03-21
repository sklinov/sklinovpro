$(function() {
    localpath = "/sklinovpro";
    lastindex_tools=tools.length-1;
    template=createToolTemplate();
    for(var i=0;i<=lastindex_tools;i++)
    {
        //console.log(i);
        getTool(i);
    }
});

function createToolTemplate() {
    var tooltemplate=`<div class="card text-center">
    <a href="{{url}}"><div class="card-img-top tool__imgcontainer"><img src="{{logo}}" class="tool__img"></div></a>
        <div class="card-body">
        <p class="card-text"><a href="{{url}}">{{name}}</a></p>
    </div>
    </div>`;
    return tooltemplate;
}

function getTool(index) {
    var t = JSON.parse(tools[index]);
    var logo; 
    logo=adjustURL(t.logo);
    var newtool=template.replace(/{{logo}}/, logo)
                    .replace(/{{url}}/, t.url)
                    .replace(/{{name}}/, t.name);
    $("#tools-deck").append(newtool);
}

function adjustURL(url) {
	var location = window.location.href;
	if(location.includes("localhost"))
	{
		url=localpath+url;
	}
    return url;
}