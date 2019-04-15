$(function () {
	localpath = "/sklinovpro";
	//var flag = false;
	var imgurl;	
	var caseindex=0;
	var lastindex=cases.length-1;

	var hh = $('header').height(); //header height
	var wh = $(window).height();   //window height
	var ch = wh-hh;				   //content area height
	//console.log(hh+' '+wh+' '+ch);
	
	$('#cases').css('height', ch+'px');

	applyCase(caseindex);

//	initialposition();
	//flag = false;

	$(window).on('wheel', function(event) {
		
		var scrolly = event.originalEvent.deltaY;
		var position=$('#screen-extra-bg').position();
		var delta = scrolly/5;
		var newtop = position.top + delta;
		var newleft = position.left + delta;
		
		var rect=document.getElementById('screen-extra-bg').getBoundingClientRect();

		var deltax = delta;
 		var deltay = delta/(rect.width/rect.height)
		
		$('#screen-extra-bg').animate({ "left": "+="+deltax+"px", "top": "+="+deltay+"px" }, 100);
		position=$('#screen-extra-bg').position();
		//console.log(position);
	});
	$("#next-case").click(function(){
		if(caseindex<lastindex)	{
			caseindex++;
		}
		else {
			caseindex=0;
		}
		applyCase(caseindex);
		//initialposition();
	});
	$("#prev-case").click(function(){
		if(caseindex>0)	{
			caseindex--;
		}
		else {
			caseindex=lastindex;
		}
		applyCase(caseindex);
		//initialposition();
	});
});

// function initialposition() {
	
// 	var hh = $('header').height(); //header height
// 	var wh = $(window).height();   //window height
// 	var ch = wh-hh;				   //content area height
// 	//console.log(hh+' '+wh+' '+ch);
	
// 	$('#cases').css('height', ch+'px');
// 	var img = '<img src="" id="screen-extra-bg">';
// 	$('#screen-image').html(img);
// 	$('#screen-extra-bg').attr("src",imgurl);
// 	$('#screen-extra-bg').addClass('screen__extrabg');
// 	$('#screen-extra-bg').parent().siblings().children().addClass('ontop');
// 	$('#menu').addClass('ontop');
	
// 	//console.log($('#screen-extra-bg').height());

// 	var img = document.getElementById('screen-image'); 

// 	var width = img.clientWidth;
// 	var height = img.clientHeight;
// 	console.log("W:",width,"  H:",height);


// 	var rect=document.getElementById('screen-extra-bg').getBoundingClientRect();
// 	console.log("Rectangle screen-exta-bg:",rect);
// 	console.log("Height",$('#screen-image').height());
// 	var position=$('#main-container').offset();
// 	console.log("Main container offset:",position);
// 	var left=rect.left*-1+position.left;
// 	var top=rect.top*-1+hh;
// 	$('#screen-extra-bg').css({
// 								'left':left+'px',
// 								'top':top+'px'
	
// 	});

// 	$('#case-title').css('top',wh/2+'px');
// 	$('#case-description').css('top',wh/2+100+'px');
// 	$('#case-auximage').css('top',wh/2+200+'px');
	
// }

function getCases(i) {
	console.log(cases[i]);
}

function applyCase(index) {
	var c = JSON.parse(cases[index]);
	$("#case-title").text(c.data.project_name);
	$("#case-title").css('color',c.style.hcolor);
	$("#case-description").text(c.data.description);
	imgurl = adjustURL(c.images.main_image_url);
	img = `<img src="{{img_url}}" id="screen-extra-bg" class="screen__extrabg">`;
	img = img.replace(/{{img_url}}/,imgurl);
	$("#screen-extra-bg").replaceWith(img);
	$("#case-subtitle").text(c.data.subtitle);
	var bgstyle='linear-gradient(180deg, var(--white),'+c.style.bgcolor+')';
	$("#cases").css('background', bgstyle);
	$('#screen-extra-bg').parent().siblings().children().addClass('ontop');
	$('#menu').addClass('ontop');

}

function adjustURL(url) {
	var location = window.location.href;
	if(location.includes("localhost"))
	{
		url=localpath+url;
	}
	
	return url;
}