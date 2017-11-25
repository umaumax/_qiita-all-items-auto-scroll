$(window).bind("scroll", function() {
	scrollHeight = $(document).height();
	scrollPosition = $(window).height() + $(window).scrollTop();
	if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.10) {
		// スクロールの位置が下からn%
		$('#main > div > div > div.col-sm-9 > div.streamContainer > div > div.public-stream.active > div > div.tail > div').click();
		$('#main > div > div > div.col-sm-9 > div.streamContainer > div > div.following-stream.active > div > div.tail > div').click();
	}
});
