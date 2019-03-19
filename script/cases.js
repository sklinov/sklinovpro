$(function () {
	var flag = true;
	var imgurl;	
	var caseindex=0;
	var caseslength=cases.length;

	applyCase(caseindex);

	initialposition(flag);
	var flag = false;
	$(window).on('wheel', function(event) {
		//console.log(event);
		var scrolly = event.originalEvent.deltaY;
		var position=$('#screen-extra-bg').position();
		//console.log("scrolly:"+scrolly);
		//console.log(position);
		var delta = scrolly/5;
		//console.log("delta:"+delta);
		var newtop = position.top + delta;
		var newleft = position.left + delta;
		//console.log('newtop:'+newtop+'  '+'newleft:'+newleft);
		
		var rect=document.getElementById('screen-extra-bg').getBoundingClientRect();

		var deltax = delta;
 		var deltay = delta/(rect.width/rect.height)
		
		$('#screen-extra-bg').animate({ "left": "+="+deltax+"px", "top": "+="+deltay+"px" }, 100);
		position=$('#screen-extra-bg').position();
		//console.log(position);
	});

});

function initialposition(flag) {
	if(flag)
	{
	var hh = $('header').height();
	var wh = $(window).height();
	var ch = wh-hh;
	//console.log(hh+' '+wh+' '+ch);
	$('#cases').css('height', ch+'px');
	var img = '<img src="" id="screen-extra-bg">';
	$('#cases').prepend(img);
	$('#screen-extra-bg').attr("src",imgurl);
	$('#screen-extra-bg').addClass('screen__extrabg');
	$('#screen-extra-bg').siblings().children().addClass('ontop');
	$('#menu').addClass('ontop');
	//console.log($('#screen-extra-bg').height());

	var rect=document.getElementById('screen-extra-bg').getBoundingClientRect();
	//console.log(rect);
	var position=$('#main-container').offset();
	//console.log(position);
	var left=rect.left*-1+position.left;
	var top=rect.top*-1+hh;
	$('#screen-extra-bg').css({
								'left':left+'px',
								'top':top+'px'
	
	});

	$('#case-title').css('top',wh/2+'px');
	$('#case-description').css('top',wh/2+100+'px');
	$('#case-auximage').css('top',wh/2+200+'px');
	flag=false;
	}
	//console.log(flag);
	//return flag;
}

function getCases(i) {
	console.log(cases[i]);
}

function applyCase(index) {
	var c = JSON.parse(cases[index]);
	$("#case-title").text(c.data.project_name);
	$("#case-description").text(c.data.description);
	imgurl = ".."+c.images.main_image_url;
	console.log(imgurl);
}