$(function() {
	//modal windows
	
	$('.call').click(function() {
		show_modal("#modal-call");
	});
	

});

function show_modal(modal) {
	
	$(modal).show();
	//close button
	$('.modal__clear').click(function() {
		$(modal).hide();//show_modal();
	});
	//main form contents
	if(modal=="#modal-call")
	{
		$('#modal-call-h3').html("Hello, ");
		$('.modal__form').css("height","70%");
		$('#mail, #mail-label').show();
		$('#phone').mask("+99(999)999-99-99",{placeholder:" "});
		$('#order-call-button').click(function() {
			var formData = {};
			formData.name=$("#name").val();
			formData.phone=$("#phone").val();
			formData.email=$("#mail").val();
			$.ajax({
				type: 'post',
				url:  'script/mail.php',
				data: formData,
				success: function(results) {
					$('.modal__form').hide();
					$('#modal-call-h3').html(results);
					$('#modal-call').delay(3000).fadeOut(200);	
				},
				error: function() {
					console.log('ajax error');
				}
			});
				
		});
		$('.call').click(function() {
			show_modal("#modal-already");
		});

	}
	else if (modal=="#modal-already")
	{
		$(modal).delay(3000).fadeOut(200);
	}
} 