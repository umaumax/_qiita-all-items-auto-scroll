// NOTE: to avoid multi click
var scrollFlag = false;
$(window).bind("scroll", function() {
	let windowHeight = $(window).height();
	let scrollHeight = $(document).height();
	let scrollPosition = $(window).height() + $(window).scrollTop();
	// hide tag ranking
	$('.ra-TagList').hide();
	// charnge main content width
	$('.p-home_main').css('width', '80%');
	// remove color inherit (to detect visited link color)
	$('a').css('color', '-webkit-link');
	if ( (scrollHeight - scrollPosition) / windowHeight <= 0.10) {
		if (!scrollFlag) {
			scrollFlag=true;
			// スクロールの位置が下からn%
			// auto scroll
			let elem = $('.af-ItemList_moreButton');
			console.log('hello');
			console.log(elem);
			$('.af-ItemList_moreButton').click();
		}
	} else {
		scrollFlag = false;
	}
});
