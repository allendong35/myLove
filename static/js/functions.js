/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 95);
		});
		return this;
	};
})(jQuery);


function getDaysInMonth(month) {
	var data = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	return data[month];
}

function timeElapse(date,mode){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds";
//   	var current = new Date();
//	var years = NaN;
//	var months = NaN;
//	var days = NaN;
//	var hours = NaN;
//	var minutes = NaN;
//	var seconds = NaN;
//	seconds = current.getSeconds() - date.getSeconds();
//	if (seconds < 0) {
//		seconds += 60;
//		current.setMinutes(current.getMinutes() - 1);
//	}
//	minutes = current.getMinutes() - date.getMinutes();
//	if (minutes < 0) {
//		minutes += 60;
//		current.setHours(current.getHours() - 1);
//	}
//	hours = current.getHours() - date.getHours();
//	if (hours < 0) {
//		hours += 24;
//		current.setDate(current.getDate() - 1);
//	}
//	if (mode == 1) {
//		days = current.getDate() - date.getDate();
//		if (days < 0) {
//			days += getDaysInMonth(current.getMonth());
//			current.setDate(current.getDate() - 1);
//		}
//		months = current.getMonth() - date.getMonth();
//		if (months < 0) {
//			months += 12;
//			current.setYear(current.getFullYear() - 1);
//		}
//		years = current.getFullYear() - date.getFullYear();
//	} else {
//        days = current.getDate() - date.getDate();
//		if (days < 0) {
//			days += getDaysInMonth(current.getMonth());
//			current.setDate(current.getDate() - 1);
//		}
//		months = current.getMonth() - date.getMonth();
//		if (months < 0) {
//			months += 12;
//			current.setYear(current.getFullYear() - 1);
//		}
//		years = current.getFullYear() - date.getFullYear();
//        if(years>0)
//            days = days+years*365;
//        if(months == 0){
//            days = days+30;
//        }else if(months == 1){
//            days = days+30+31;
//        }else if(months == 2){
//            days = days+30+31+30;
//        }else if(months == 3){
//            days = days+30+31+30+31;
//        }else if(months == 4){
//            days = days+30+31+30+31+31;
//        }else if(months == 5){
//            days = days+30+31+30+31+31+30;
//        }else if(months == 6){
//            days = days+30+31+30+31+31+30+31;
//        }else if(months == 7){
//            days = days+30+31+30+31+31+30+31+30;
//        }else if(months == 8){
//            days = days+30+31+30+31+31+30+31+30+31;
//        }else if(months == 9){
//            days = days+30+31+30+31+31+30+31+30+31+31;
//        }else if(months == 10){
//            days = days+30+31+30+31+31+30+31+30+31+31+28;
//        }else if(months == 11){
//            days = days+30+31+30+31+31+30+31+30+31+31+28+31;
//        }
//        months = -1;
//		//days = Math.floor((current.getTime() - date.getTime()) / (1000* 3600 * 24));
//    }
//    
//	if (hours < 10) {
//		hours = "0" + hours;
//	}
//	if (minutes < 10) {
//		minutes = "0" + minutes;
//	}
//	if (seconds < 10) {
//		seconds = "0" + seconds;
//	}
//	var result = (years > 0 ? "<span class=\"digit\">" + years + "</span> year ":"")
//	result += (months >= 0 ? "<span class=\"digit\">" + months + "</span> month ":"");
//	result += "<span class=\"digit\">" + days+ "</span> day ";
//	result += "<span class=\"digit\">" + hours + "</span> hr "
//	result += "<span class=\"digit\">" + minutes + "</span> min "
//	result += "<span class=\"digit\">" + seconds + "</span> sec";
//	//$("#elapseClock").html(result);
//	$("#clock").html(result);
 //   var current = new Date();
//	var years = NaN;
//	var month = NaN;
//	var days = NaN;
//	var hours = NaN;
//	var minutes = NaN;
//	var seconds = NaN;
//	if (mode == 1) {
//		years = current.getFullYear() - date.getFullYear();
//		if (years > 0) {
//			current.setYear(current.getFullYear() - years);
//		}
//		months = current.getMonth() - date.getMonth();
//		if (months > 0) {
//			current.setMonth(current.getMonth() - months);
//		}
//		days = current.getDate() - date.getDate();
//		if (days > 0) {
//			current.setDate(current.getDate() - months);
//		}
//	}
//	seconds = Math.round((current.getTime() - date.getTime()) / 1000);
//	if (isNaN(days)) {
//		days = Math.floor(seconds / (3600 * 24));
//	}
//	seconds = seconds % (3600 * 24);
//	hours = Math.floor(seconds / 3600);
//	seconds = seconds % 3600;
//	minutes = Math.floor(seconds / 60);
//	seconds = seconds % 60;
//	
//	if (seconds < 0) {
//		seconds += 60;
//		minutes--;
//	}
//	if (minutes < 0) {
//		minutes += 60;
//		hours--;
//	}
//	if (hours < 0) {
//		hours += 24;
//		days--;
//	}
//	if (days < 0) {
//		days += getDaysInMonth(new Date().getMonth());
//		months--;
//	}
//	if (months < 0) {
//		months += 12;
//		years--;
//	}
//	if (hours < 10) {
//		hours = "0" + hours;
//	}
//	if (minutes < 10) {
//		minutes = "0" + minutes;
//	}
//	if (seconds < 10) {
//		seconds = "0" + seconds;
//	}
//	
//	var result = "";
///	if (mode == 1) {
	//	result = (years > 0 ? "<span class=\"digit\">" + years + "</span> year ":"")
    //   + (months >= 0 ? "<span class=\"digit\">" + months + "</span> month ":"")
//        + "<span class=\"digit\">" + days + "</span> days "
//        + "<span class=\"digit\">" + hours + "</span> hours "
 //       + "<span class=\"digit\">" + minutes + "</span> minutes "
   //     + "<span class=\"digit\">" + seconds + "</span> seconds";
//	} else {
//		result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds";
//	}
	
	$("#clock").html(result);
}
