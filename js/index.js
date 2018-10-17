    $(document).ready(function() {
     $('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 
    $('.input-group.time').datetimepicker({
                    format: 'LT'
                });
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
         
            email: {
                validators: {
                    notEmpty: {
                        message: 'Bitte gib Deine Email-Adresse an'
                    },
                    emailAddress: {
                        message: 'Bitte gib eine richtige Email-Adresse an'
                    }
                }
            },
            
            password: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Bitte gib Dein Passwort ein oder erstell Dir eins in dem Du auf Passwort vergessen gehst'
                    }
                }
              }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});


