// TEST all pages on SHOP OFFER using below
// document.querySelector('.womens-landing-page').classList.add('ri-home');
// document.querySelector('.womens-landing-page').classList.remove('womens-landing-page');

// OPTIONS - class, target, title, link, h1, p, pAlt, cta, p2, start, end, dataTracking
// translations format en/nl/fr/de
// INVOCATIONS


var exampleBanner = new SaleBanner({
    target: '.hero',
    class: 'true-fw image example-banner',
    title: '20% OFF',
    link: '/example',
    start: '11 april, 2018, 05:00',
    end: '30 december, 2018, 09:00',
    dataTracking: 'example-banner',
    links: [
        {href: '/example', title: 'example', class: 'example'},
        {href: '/example', title: 'example', class: 'example'},
        {href: '/example', title: 'example', class: 'example'}
    ]
});

setTimeout(function(){
    trackingGenerator();
}, 10);