
	var bla = $(".innericonSideBar");
	var asd = $(".innericonMessage");
	bla.hover(function() {
 	$(this).css({
 		'color': '#ebebeb',
 		'border-bottom': 'none'
 	});
		},
	function(){
  	$(this).css({
  		'color': '#4d4d4d',
  		'border-bottom': '1px dashed #4d4d4d'
  	});
});

	asd.hover(function() {
 	$(this).css({
 		'color': '#ebebeb',
 		'border-bottom': 'none'
 	});
		},
	function(){
  	$(this).css({
  		'color': '#4d4d4d',
  		'border-bottom': '1px dashed #4d4d4d'
  	});
});
	var drop = $(".dropDown");
	var dropList = $(".dropDownList");
	var sectionDrop = $(".sectionDrop")
	klik = 0;
	bleja();
	drop.hover(function(){
		drop.css({
			'background-color': '#4d4d4d',
			'height':'60px',
			'color': '#ffffff'
		});
	},
	function(){
		drop.css({
			'background-color': '#ECAF06',
			'height': '50px',
			'color': '#4d4d4d'
		});
});
	function bleja() {
		drop.on('click', function() {
			klik++;
			dropList.slideToggle("600");
			if (klik === 1) {
				sectionDrop.css('width', '100%');
			} else if (klik === 2) {
				sectionDrop.css('width', '100%');
				klik = 0;
				setTimeout(function() {
					sectionDrop.css('width', '80%');
				}, 500)
			} else {
				sectionDrop.css('width', '80%');
			}
		});
	}
	
var myCV = $('.myCV');
myCV.hover(function() {
	myCV.css({
		'background-color': '#4d4d4d',
		'color': '#ECAF06'
	});
}, function() {
		myCV.css({
		'background-color': '#ECAF06',
		'color': '#4d4d4d'
	});
});

var circle2 = $('.circle:nth-child(3)');
var circle3 = $('.circle:nth-child(5)');
var circle4 = $('.circle:nth-child(7)');
var end1 = $('.end1');
var end2 = $('.end2');
var end3 = $('.end3');

circle2.hover(function(){
	circle2.css('background', '#ECAF06');
    end1.animate({"opacity": "1"}, 40);
    }, function(){
    	circle2.css('background', 'transparent');
    	end1.animate({"opacity": "0"}, 40);
});
circle3.hover(function(){
	circle3.css('background', '#ECAF06');
    end2.animate({"opacity": "1"}, 40);
    }, function(){
    	circle3.css('background', 'transparent');
    	end2.animate({"opacity": "0"}, 40);
});
circle4.hover(function(){
	circle4.css('background', '#ECAF06');
    end3.animate({"opacity": "1"}, 40);
    }, function(){
    	circle4.css('background', 'transparent');
    	end3.animate({"opacity": "0"}, 40);
});

var listItems = $(".listItems");
listItems.hover(function() {
	$(this).css({
		'background-color': '#ECAF06',
		'font-weight': 'bolder',
		'color': '#4d4d4d'
		});
}, function() {
	$(this).css({
		'background-color': 'transparent',
		'font-weight': 'normal',
		'color': '#ffffff'
		});
});

var iconMessage = $('.innericonMessage');
messageScreen = $('.messageScreen');
iconMessage.on('click', function() {
	messageScreen.css({
		'transition': '1s',
		'display': 'grid'
	});
});

var closeMessageScreen = $('.closeMessageScreen');
closeMessageScreen.on('click', function() {
	messageScreen.css({
		'transition': '1s',
		'display': 'none'
	});
});