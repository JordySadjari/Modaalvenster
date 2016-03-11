$(document).ready( function() {
    var game1Inhoud = $('#game1').detach();
    var game2Inhoud = $('#game2').detach();
    var game3Inhoud = $('#game3').detach();
    var game4Inhoud = $('#game4').detach();
    var game5Inhoud = $('#game5').detach();
    
    // modaal  venster plaatsen
    $('#game1Thumb').on('click', function() {
        gameVenObj.openen({inhoud: game1Inhoud});
    });
    
    $('#game2Thumb').on('click', function() {
        gameVenObj.openen({inhoud: game2Inhoud});
    });
    
    $('#game3Thumb').on('click', function() {
        gameVenObj.openen({inhoud: game3Inhoud});
    });
    
    $('#game4Thumb').on('click', function() {
        gameVenObj.openen({inhoud: game4Inhoud});
    });
    
    $('#game5Thumb').on('click', function() {
        gameVenObj.openen({inhoud: game5Inhoud});
    });
});