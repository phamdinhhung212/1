// header
// xử lí ẩn hiện respon left và respon right
$(document).ready(function() {
	$("#header span#icon-respon-menu").click(function() {
		$("#header #respon-right .pt").stop().slideToggle();
	});
});

// open respon left
$(document).ready(function() {
	$("#wp-respon #respon-left span#icon-tabbar").click(function() {
		$("#site").toggleClass('open-respon-left');
		$("#icon-tabbar").toggleClass("fa-chevron-circle-right fa-chevron-circle-left");
	});
	$("#content").click(function() {
		$("#site").removeClass('open-respon-left');
		$("#icon-tabbar").removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right');
	});
});	
// xử lí ẩn hiện menu respon
$(document).ready(function() {
	$("#header span#icon-menu").click(function() {
		$(this).toggleClass("move"); 
		$(this).toggleClass("fa-bars fa-chevron-circle-up");
		$("#menu-respon").stop().slideToggle(500);
	})
});


// content -> widget.product -> widget content hide-2 ( xử lý ẩn hiện hình ảnh con )
$(document).ready(function() {
	$("ul.list-product li").hover( function() {
		// hover in 
		$(this).addClass('open-list-thumb');
		$(this).children('.more-product').addClass('open-list-thumb');
		$(this).children('.add-basket').stop().fadeIn(1000);
		// đếm số ảnh con
		var cout = 0;
		$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').children('li').each(function() {
			cout ++ ;
		});
		if( cout == 3 ) {
			$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').addClass('three-img');
		}
		if( cout == 2 ) {
			$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').addClass('two-img');
		}
		if( cout == 1 ) {
			$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').addClass('one-img');
		}
		if( cout == 0 ) {
			$(this).removeClass('open-list-thumb');
			$(this).children('.more-product').removeClass('open-list-thumb');
		}
	}, function() {
		// hover out
		$(this).removeClass('open-list-thumb');
		$(this).children('.more-product').removeClass('open-list-thumb');
		$(this).children('.add-basket').stop().fadeOut(500);
	});
})