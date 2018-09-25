(function($) {
    $('.step-1', '.stepper').click(function() {
        $(this).removeClass('active')
        $('.step-2', '.stepper').addClass('active').find('input').focus();
    });

    $('#updateSign').submit(function(event) {
        let $this = $(this);
        $('.loader', $this).show();
        let email = $('input', $this).val();
        console.log(email)

        //imitation api
        setTimeout(() => {
            $('.step-2', '.stepper').removeClass('active')
            $('.loader', $this).hide();

            $('.alert-success', '.stepper').addClass('active')
            
        }, 2000)
        event.preventDefault();
    })
})(jQuery)