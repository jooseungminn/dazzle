//toggle
$(function(){
	
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
		  panel.style.maxHeight = null;
		} else {
		  panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	  });
	}

});
//tab
function openBoard(evt, boardName) {
	  var i, x, tablinks;
	  x = document.getElementsByClassName("board");
	  for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	  }
	  tablinks = document.getElementsByClassName("tablink");
	  for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" opacity", "");
	  }
	  document.getElementById(boardName).style.display = "block";
	  evt.currentTarget.className += " opacity";
}
$(function(){

	
	$(".right> li").click(function(){
		$(this).children(".text_info").slideToggle();
		$(this).siblings().children(".text_info").slideUp();
		$( '.c p' ).toggleClass( 'ab' );

	});

	

});
$(function(){
	$(".right> li").click(function(){
		$(this).children().children().children("img").toggleClass("turn");
	});
});


$(function(){

	
	$(".right> li> .font0").click(function(){
		$(this).next().slideToggle();
		$( '.c p' ).toggleClass( 'ab' );
	});
	
		$(".right> li> .font1").click(function(){
		$(this).next().slideToggle();
		$( '.d p' ).toggleClass( 'ab' );
	});
	


});

$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});

$(function(){
	AOS.init();	
});

/*pop up*/
$(function(){
    //popup 안보이게 한다.
    $('.popup').hide();
    //popup_open을 클릭하면,popup이 보인다.
    $('.popup_open a').click(function(){
        $('.popup').fadeIn(0);
    });
    //close_btn을 클릭하면,popup이 안보인다.
    $('.close_btn').click(function(){
        $(this).parent('.popup').fadeOut(0);
    });
});