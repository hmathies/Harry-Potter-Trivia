/*----when the page loads, the trivia div will be displayed with title and start button only*/
	  $(document).ready(function() {
          var timeRemaining = 10;
          var timerId;
          var correct = 0;
          var incorrect = 0;
          var unanswered = 0; 

          $("#questionPage").hide();
          $("#resultsPage").hide();
      // when the button is clicked, load the trivia questions and begin countdown timer
    			$('.btn').on("click", function() {
              $("#startPage").hide();
              $("#questionPage").show();
              run(); 
          });
          /*this function starts the timer*/
          function run() {
          timerId = setInterval(decrement, 1000);
          }
          /*this function has the timer count down*/
          function decrement(){
            timeRemaining--;
            $("#timer").html("<h3>" + "Time Remaining: " + timeRemaining + "</h3>"); 
            if (timeRemaining === 0 ) {
            stop();
           //displays the results to the screen (i can't access the html)
            $("#correct").html("<h3>" + "Correct: " + correct + "</h3>");
            $("#incorrect").html("<h3>" + "Incorrect: " + incorrect + "</h3>");
            $("#unanswered").html("<h3>" + "Unanswered: " + unanswered + "</h3>");
        //  Alert the user that time is up.
          }  }
            function stop() {
              clearInterval(timerId);
              displayResults();
          }

          $('#PotterForm').submit(function(e) {
            // this command keeps the form on the page after clicking submit
            e.preventDefault();
           
            var q1 = $("input[type='radio'][name='underwater']:checked").val();
            var q2 = $("input[type='radio'][name='joke']:checked").val();
            var q3 = $("input[type='radio'][name='curses']:checked").val();

            if (q1 === 'right') {
              correct++;
              console.log('right: ' + correct);
            }
            else if (q1 == undefined) {
              unanswered++;
              console.log('unanswered: '+ unanswered);
            }
            else{
              incorrect++;
              console.log('incorrect: '+ incorrect);
            }
                if (q2 === 'right') {
              correct++;
              console.log('right: '+ correct);
            }
            else if (q2 == undefined) {
              unanswered++;
              console.log('unanswered: '+ unanswered);
            }
            else{
              incorrect++;
              console.log('incorrect: '+ incorrect);
            }
            if (q3 === 'right') {
              correct++;
              console.log('right: '+ correct);
            }
            else if (q3 == undefined) {
              unanswered++;
              console.log('unanswered: '+ unanswered);
            }
            else{
              incorrect++;
              console.log('incorrect: '+ incorrect);
            }
           
          })
         
           function displayResults () {
              $("#resultsPage").show();
           }
    });