// NOTE: to avoid multi click
var scrollFlag = false;

// for https://qiita.com/*/items/*
$(function(){
	// hide comment form
	$('.p-items_container').eq(1).hide();
	// hide footer
	$('.footer').hide();
	// extend content
	$('.p-items_container').css('max-width', 'initial');
	$('.p-items_container').css('grid-template-columns', '80px calc(100% - 200px - 80px) 200px');
	$('.p-items_toc').css('width', '100%');
	// cahnge color
	$('.p-items_article').css('background-color', '#ddf');
	$('.p-items_wrapper').css('background-color', '#ccf');
	$('.it-Header_time').css('color', '#000');

	// FYI: [【jQuery】動的にlinkタグとstyleタグを追加する \- Tsukikuro Blog](http://tsukikuro.hatenablog.com/entry/2013/12/10/192250)
		// for https://qiita.com/items
		// hide tag ranking
		// charnge main content width
		// remove color inherit (to detect visited link color)
		// NOTE: ':visited'はセキュリティの関係上jsからは操作できないとのこと
		var style = '<style type="text/css">'+
			'.ra-TagList { display: none; }'+
			'.p-home_main { width:80%; }'+
			'a.tf-ItemContent_title { color:#337ab7 !important; }'+
			'a:visited.tf-ItemContent_title { color:#685987 !important; }'+
			'</style>';
		$(style).appendTo('head');
});

// for https://qiita.com/items
$(window).bind("scroll", function() {
	let windowHeight = $(window).height();
	let scrollHeight = $(document).height();
	let scrollPosition = $(window).height() + $(window).scrollTop();
	if ( (scrollHeight - scrollPosition) / windowHeight <= 0.10) {
		if (!scrollFlag) {
			scrollFlag=true;
			// スクロールの位置が下からn%
			// auto scroll
			let elem = $('.af-ItemList_moreButton');
			$('.af-ItemList_moreButton').click();
		}
	} else {
		scrollFlag = false;
	}
});
