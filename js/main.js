$(function(){
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,

        navigation: true,
        navigationTooltips: ['Home', 'About ME', 'Skills', 'Portfolio', 'Photo Gallery', 'Contact'],
        navigationPosition: 'left',

        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: false,
        
        scrollBar: true,
        fitToSection: true,
        fitToSectionDelay: 600,
        scrollingSpeed: 1000,

        menu: '.menu',
        anchors: ['home', 'aboutme', 'skills', 'portfolio', 'gallery', 'contact'],

        responsiveWidth: 800,
    });
})