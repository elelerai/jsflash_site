$(document).ready(function() {
  $(".clickable").click(function() {
    $(".clickable").removeClass();
    $(".T1-showing").toggle();
    $(".T1meaning-hidden").toggle();
    $(".clickable").addClass(".T1meaning-hidden");
      });

      $(".clickable2").click(function() {
        $(".clickable2").removeClass();
        $(".T2-showing").toggle();
        $(".T2meaning-hidden").toggle();
        $(".clickable2").addClass(".T2meaning-hidden");
          });

        $(".clickable3").click(function() {
        $(".clickable3").removeClass();
        $(".T3-showing").toggle();
        $(".T3meaning-hidden").toggle();
        $(".clickable3").addClass(".T3meaning-hidden");
         });

         $(".clickable4").click(function() {
           $(".clickable4").removeClass();
           $(".T4-showing").toggle();
           $(".T4meaning-hidden").toggle();
           $(".clickable4").addClass(".T4meaning-hidden");
             });

             $(".clickable5").click(function() {
               $(".clickable5").removeClass();
               $(".T5-showing").toggle();
               $(".T5meaning-hidden").toggle();
               $(".clickable5").addClass(".T5meaning-hidden");
                 });







});
