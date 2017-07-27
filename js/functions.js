jQuery(document).ready(function() {
								
	<!-- COUNTDOWN JS START -->
	var startDate = new Date(startYear,startMonth-1,startDay,startHour,startMin,startSec);
	var startTime = startDate.getTime();
	
	var endDate = new Date(endYear,endMonth-1,endDay,endHour,endMin,endSec);
	var endTime = endDate.getTime();  
	jQuery(function () {
		  jQuery('#countdown').countdown({until: endDate,
	  format: 'odhms',
	  layout: cdnmsg+' <span class="timer">{o<}{on}M{o>} {d<}{dn}D{d>} {h<}{hn}H{h>} {m<}{mn}m{m>} {s<}{sn}s{s>}</span></p>'
		});
	});
	
	<!-- SPEEDOMETER JS START -->
	jQuery(function () {
		var now = new Date();
		var nowTime = now.getTime();
		var speedDiff = (endTime - startTime);
		var speed_elapsed = (nowTime - startTime);
	
		var pctDiff = (speed_elapsed * 100) / speedDiff;
		var pct = pctDiff.toFixed(0);			
		if (nowTime > endTime) pct=100;
	
		jQuery('#speedometer').speedometer({ 
			percentage : pct
		});
	});
	
	<!-- PROGRESSBAR JS START -->
	var auto_refresh = setInterval(
		function()
		{
			var current = new Date();
			var currentTime = current.getTime();
			var timeDiff = (endTime - startTime);
			var time_elapsed = (currentTime - startTime);
	
			var percentDiff = (time_elapsed * 100) / timeDiff;
			var percent = percentDiff.toFixed(0);
			if (currentTime > endTime) percent=100;
	
			jQuery(function(){
				jQuery("#progress").progression({ 
					Current: percent,
					Easing: 'easeOutBack',
					aBackgroundImg: progressbar
				});
			});
		}
	, 900);

	jQuery.fn.progression.defaults.Current = 0 
	jQuery.fn.progression.defaults.Background = '';
	jQuery.fn.progression.defaults.aBackground = '';
	jQuery.fn.progression.defaults.TextColor = ''; 
	jQuery.fn.progression.defaults.aTextColor = ''; 
								
	<!-- CENTERING WRAPPER -->
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var wrapperHeight = jQuery("#wrapper").height();
	var wrapperWidth = jQuery("#wrapper").width();
	//centering
	jQuery("#wrapper").css({
		"position": "absolute",
		"top": windowHeight/2-wrapperHeight/1,
		"left": windowWidth/2-wrapperWidth/2
	});
	
	<!-- ROUNDED CORNER -->
    jQuery('.switch-menu li a,#menu li').corner("5px");
    jQuery('.subscriberForm,#progress_container').corner("5px");
	jQuery(".subscriberButton").css({
		"-moz-border-radius": "3px",
		"-webkit-border-radius": "3px",
		"border-radius": "3px"
	});
	jQuery(".popupbox-1,.popupbox-2").css({
		"-moz-border-radius": "15px",
		"-webkit-border-radius": "15px",
		"border-radius": "15px"
	});
	jQuery(".insidePop-R").css({
		"-moz-border-radius": "10px",
		"-webkit-border-radius": "10px",
		"border-radius": "10px"
	});
    jQuery('.switch-menu li a').corner("3px");
	
	<!-- SET DIV .MENU WIDTH -->
	var menu1 = jQuery("li.info").width();
	var menu2 = jQuery("li.contact").width();
	var menu3 = jQuery("li.tweeturl").width();
	var menu4 = jQuery("li.fburl").width();
	jQuery("#menu ul").css({
		"width": menu1+menu2+menu3+menu4+8
	});
	
	<!-- SET DIV .MESSAGE HEIGHT -->
	var pop2Height = jQuery(".popupbox-2").height();
	//Get height
	jQuery(".message").css({
		"height": pop2Height-200
	});
	
	<!-- TWITTER JS START -->
	jQuery('#twitterUserTimeline').liveTwitter(twetUser, {limit: twetNum, refresh: true, mode: 'user_timeline'});

	<!-- Start AJAX Subscriber Form JS -->
	var options = { 
	target:  '#warning'
	}; 
	jQuery('.subscriberForm').ajaxForm(options); 
	
	<!-- Subscribers Form AJAX Loader Image -->
	jQuery(".loader").hide();
	
	jQuery('.subscriberForm').bind('submit', function(e){
		jQuery(".loader").show();
				var mail = jQuery('input#email').val();
		e.preventDefault();
		
		jQuery.ajax({
			type: 'POST',
			url: subsprocessor,
			data: '',
			success: function(theResponse){
				jQuery(".loader").hide();
			},
			error: function(){
				jQuery(".loader").hide();
			}		
		});
	});

	<!-- Start AJAX Contact Form JS -->
	var options = { 
	target : '#alert'
	}; 
	jQuery('#contactForm').ajaxForm(options); 

	<!-- Contact Form AJAX Loader Image -->
	jQuery(".process").hide();
	
	jQuery('form#contactForm').bind('submit', function(e){
		jQuery(".process").show();
				var name = jQuery('input#name').val();
				var mail = jQuery('input#mail').val();
				var subject = jQuery('input#subject').val();
				var message = jQuery('textarea#message').val();
		e.preventDefault();
		
		jQuery.ajax({
			type: 'POST',
			url: contactprocessor,
			data: '',
			success: function(theResponse){
				jQuery(".process").hide();
			},
			error: function(){
				jQuery(".process").hide();
			}		
		});
	});

	<!-- Clear Form after Submit -->
	jQuery.fn.clearForm = function() {
	  return this.each(function() {
		var type = this.type, tag = this.tagName.toLowerCase();
		if (tag == 'form')
		  return $(':input',this).clearForm();
		if (type == 'text' || type == 'password' || tag == 'textarea')
		  this.value = '';
		else if (type == 'checkbox' || type == 'radio')
		  this.checked = false;
		else if (tag == 'select')
		  this.selectedIndex = -1;
	  });
	};

	<!-- START POPUP JS -->
	// Here we will write a function when link click under class popup				   
	jQuery('a.popup').click(function() {
										
	// Here we will describe a variable popupid which gets the
	// rel attribute from the clicked link							
	var popupid = jQuery(this).attr('rel');
	
	// Now we need to popup the marked which belongs to the rel attribute
	// Suppose the rel attribute of click link is popuprel then here in below code
	// #popuprel will fadein
	jQuery('#' + popupid).fadeIn();
	
	// append div with id fade into the bottom of body tag
	// and we allready styled it in our step 2 : CSS
	jQuery('body').append('<div id="fade"></div>');
	jQuery('#fade').css({'filter' : 'alpha(opacity=90)'}).fadeIn();
	
	// Now here we need to have our popup box in center of 
	// webpage when its fadein. so we add 10px to height and width 
	var popuptopmargin = (jQuery('#' + popupid).height() + 10) / 1.8;
	var popupleftmargin = (jQuery('#' + popupid).width() + 10) / 2;
	
	// Then using .css function style our popup box for center allignment
	$('#' + popupid).css({
	'margin-top' : -popuptopmargin,
	'margin-left' : -popupleftmargin
	});
	
	// Now define one more function which is used to fadeout the 
	// fade layer and popup window as soon as we click on fade layer
	jQuery('#fade').click(function() {
		// Add markup ids of all custom popup box here 						  
		jQuery('#fade , #popuprel-1 , #popuprel-2').fadeOut()
		return false;
		});
	});
	
});
	
<!-- Start Cufon Replacement -->
Cufon.replace('h1, h2, h3, h4, h5, h6, .popContent b, .txt1, .txt2',{hover: true});
