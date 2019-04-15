$(function() {
	//modal windows
	var messageIsSent = false;

	$('#order-call,#order-call-small,#order-call-footer,#know-more,#know-price,#know-project').click(function() {
		messageIsSent = show_modal(messageIsSent,"Hello,");
		console.log(messageIsSent);
	});
	
	
});

function show_modal(msgIsSent,label) {
	if(!msgIsSent)
	{
		$('.h3.h3-modal').html(label);
		$('.modal__form').css("height","70%");
		$('#mail, #mail-label').show();

		var completed=false;
		$('#phone').mask("+99(999)999-99-99",{placeholder:" "});
		$('#modal-call').toggle();
		$('#modal__clear').click(function() {
			show_modal();
		});
		
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
					$('.h3.h3-modal').html(results);
					$('#modal-call').delay(3000).fadeOut(200);
					mesgIsSent = true;	
				},
				error: function() {
					console.log('ajax error');
				}
			});
				
		});
		return msgIsSent;
	}
	else if(msgIsSent) {
		$('.h3.h3-modal').html("Inquery already sent. Thank you!");
		$('#modal__clear').click(function() {
			show_modal();
		});
		$('#modal-call').delay(3000).fadeOut(200);
		return msgIsSent;	
	}
}