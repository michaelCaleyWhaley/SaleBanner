// TEST all pages on wlp using below
// document.querySelector('.womens-landing-page').classList.add('ri-home');
// document.querySelector('.womens-landing-page').classList.remove('womens-landing-page');

// OPTIONS - class, target, title, link, h1, p, pAlt, cta, p2
// translations format en/nl/fr/de
// INVOCATIONS


var exampleBanner = new SaleBanner({
    target: '.hero',
    class: 'true-fw image student-banner',
    title: '20% OFF',
    link: '/terms',
    start: '11 april, 2018, 05:00',
    end: '30 december, 2018, 09:00',
    dataTracking: 'student-banner'
});

setTimeout(function(){
    trackingGenerator();
}, 10);