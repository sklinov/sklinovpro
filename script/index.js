$(function() {
    //modal windows
	$('#order-call,#order-call-small,#order-call-footer').click(function() {
		show_modal(true,"Hi,");
	});
	$('#know-more,#know-price,#know-project').click(function() {
		show_modal(true,"Hello,");
	});
});

function show_modal(show_mail,label) {
	$('.h3.h3-modal').html(label);
	if(show_mail)
	{
		$('.modal__form').css("height","60%");
		$('#mail, #mail-label').show();

	}
	if(!show_mail)
	{
		$('.modal__form').css("height","50%");
		$('#mail, #mail-label').hide();
	}
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
            url: 'script/mail.php',
            data: formData,
            success: function(results) {
                $('.modal__form').hide();
                $('.h3.h3-modal').html(results);
                //$('#modal-call').delay(3000).fadeOut(200);
                
            },
            error: function() {
                console.log('ajax error');
            }
        });
			
	});
}