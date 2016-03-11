var gameVenObj = (function() {

    $window = $(window);
    $gameVenster = $('<div class="game-venster"/>');
    $gameInhoud = $('<div class="game-inhoud"/>');
    $sluitKnop = $('<span class="sluit-knop">&#10005;</span>');
    
    $gameVenster.append($gameInhoud);
    
    return {
        centreren: function() {
            // opdrachten centreren
        },
        openen: function(instellingen) {
            $gameInhoud.append(instellingen.inhoud, $sluitKnop);
            $gameVenster.appendTo('body');
            $sluitKnop.on('click', gameVenObj.sluiten);
        
        },
        sluiten: function() {
            // opdrachten sluiten
            $gameInhoud.empty().off('click',gameVenObj.sluiten)
            $gameVenster.detach();
            $window.off();
            
        }
    }
}());