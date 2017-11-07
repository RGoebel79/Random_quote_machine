var newQuote = "";
var newBy = "";

function quote() {
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', // The URL to the API. 
    headers: {
      "X-Mashape-Key": "NrLzQQSJBzmshMUpwmeBa2spDc4up12TtKyjsnHD2I9NQWA62E",
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    },

    success: function(data) {
      var r = JSON.parse(data);
      newQuote = r.quote;
      newBy = r.author;

    },
    error: function(err) {
      alert(err);

    }
  });
}

$(document).ready(function() {

  $(".but1").on("click", function() {
    quote();
    $(".div1").animate({
      height: "73%"
    });
    /*animation*/
    $(".div1").text("Changing Quote...");

    var myButton = $('.but1');
    var myBox = $('.div1');

    myBox.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
      function(e) {
      If (newQuote == ""){
        $(".pquote").text("No quote recieved from API");
        $(".by").text("Random Quote Machine");
      } else {
        $(".pquote").text('"' + newQuote + '"');
        $(".by").text("- " + newBy);
        $(".but2").attr('href', 'https://twitter.com/intent/tweet?text=' + '"' + newQuote + '" - ' + newBy);
      }
        myBox.animate({
          height: "0px"
        });
        // code to execute after transition ends
      });
    myBox.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
      function(e) {

        // code to execute after transition ends again
        myBox.text("");
        myButton.style("background-color: white");

      });
  });
});
