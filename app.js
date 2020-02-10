<?php
/*КЛЮЧИ*/
define('SITE_KEY', '6LfH-aIUAAAAANTmsRDS2lZRIjjOxL4Q9q0fIFTl');
define('SECRET_KEY', '6LfH-aIUAAAAAEWJIQJizklZldRxFeTGseZSbRxu');
...
...
?>
<script src="https://www.google.com/recaptcha/api.js?render=<?php echo SITE_KEY?>"></script>
    <script>
        grecaptcha.ready(function() {
            grecaptcha.execute('<?php echo SITE_KEY;?>', {action: 'homepage'}).then(function(token) {
                //console.log(token);
                document.getElementById('g-recaptcha-response').value=token;
            });
        });
  </script>
