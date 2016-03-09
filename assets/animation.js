
(function() {
    $(document).ready(function(){
        var quotes = $(".words");
        var quoteIndex = -1;

        console.log(quotes)
        $(".words").hide()

        function showNextQuote() {
            quoteIndex++;

            $(quotes.eq(quoteIndex % quotes.length))
                .fadeIn(1500)
                .delay(2500)
                .fadeOut(1500, showNextQuote);
        }
        
        showNextQuote();
        
    })
   
})();
