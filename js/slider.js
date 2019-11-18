 $(function() {

	 $('.team__slider').slick({
	 	nextArrow: '<button type="button" class="slick-button slick-next"></button>',
		prevArrow: '<button type="button" class="slick-button slick-prev"></button>',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
		      breakpoint: 1126,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 900, 
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
	    ]
	});

 });