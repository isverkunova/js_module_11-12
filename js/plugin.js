$(document).ready(function() {
    var leftUIEl = $('.carouselLeftArrow');
    var rightUIEl = $('.carouselRightArrow');
    var elementsList = $('.carouselList');

    var pixelsOffset = 175;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {

        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 175;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {

        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 175;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

});