
// REQUIRES saleBannerInvoke.js and saleBanner.css to function
// MEAT
// OPTIONS - class, target, title, link, links, h1, p, pAlt, cta, p2, date
// translations format en/nl/fr/de
function SaleBanner(options) {
    var ref = this;
    this.createNewElement = function () {
        var saleLink = document.createElement('a');
        saleLink.setAttribute('href', options.link);
        saleLink.setAttribute('title', options.title);
        saleLink.setAttribute('class', 'sale-main-a');
        return saleLink;
    };
    this.createCTA = function (ctaInfo) {
        var element = document.createElement('a');
        element.setAttribute('class', 'dark-rounded-cta sale-live-cta');
        element.setAttribute('href', ctaInfo[0]);
        element.setAttribute('title', options.title);
        element = ref.appendDataTranslate(element);
        element.innerHTML = '<span class="en-inline">' + ctaInfo[1] + '</span><span class="nl-inline">' + ctaInfo[2] + '</span><span class="fr-inline">' + ctaInfo[3] + '</span><span class="de-inline">' + ctaInfo[4] + '</span>';
        return element;
    };

    this.createLink = function (href, title, aclass) {
        var element = document.createElement('a');
        element.setAttribute('class', aclass);
        element.setAttribute('href', href);
        element.setAttribute('title', title);
        return element;
    };

    this.pAlt = function () {
        if (options.pAlt) {
            var pAlt = document.createElement('p');
            pAlt.setAttribute('class', 'alt-para');
            pAlt = ref.appendDataTranslate(pAlt);
            pAlt.innerHTML = ref.createRegionalString(options.pAlt);
            return pAlt;
        }
    };
    this.liveArea = function () {
        if (typeof (options.cta) === 'object' && options.cta.length > 0) {
            var liveArea = document.createElement('div');
            liveArea.setAttribute('class', 'live-area');
            if (options.h1) {
                var h1 = document.createElement('h1');
                h1 = ref.appendDataTranslate(h1);
                h1.innerHTML = ref.createRegionalString(options.h1);
                liveArea.appendChild(h1);
            }
            if (options.p) {
                var p = document.createElement('p');
                p.setAttribute('class', 'first-para');
                p = ref.appendDataTranslate(p);
                p.innerHTML = ref.createRegionalString(options.p);
                liveArea.appendChild(p);
            }
            if (options.pAlt) {
                var pAlt = document.createElement('p');
                pAlt.setAttribute('class', 'alt-para');
                pAlt = ref.appendDataTranslate(pAlt);
                pAlt.innerHTML = ref.createRegionalString(options.pAlt);
                liveArea.appendChild(pAlt);
            }
            liveArea.appendChild(ref.createNewElement());
            options.cta.forEach(function (element, index) {
                liveArea.appendChild(ref.createCTA(options.cta[index]));
            });
            if (options.p2) {
                var p2 = document.createElement('p');
                p2.setAttribute('class', 'second-para');
                p2 = ref.appendDataTranslate(p2);
                p2.innerHTML = ref.createRegionalString(options.p2);
                liveArea.appendChild(p2);
            }
            return liveArea;
        }
    };
    this.appendDataTranslate = function (element) {
        element.setAttribute('data-translated', '');
        element.setAttribute('nl', '');
        element.setAttribute('fr', '');
        element.setAttribute('de', '');
        return element;
    };
    this.createRegionalString = function (array) {
        return '<span class="en-inline">' + array[0] + '</span><span class="nl-inline">' + array[1] + '</span><span class="fr-inline">' + array[2] + '</span><span class="de-inline">' + array[3] + '</span>';
    };
    this.insertElBefore = function (el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode);
    };
    this.appendToPage = function () {
        var targetElement = document.querySelector(options.target);
        var targetMobElement = document.querySelector(options.target + '-mob');

        if (targetElement) {
            var saleBanner = document.createElement('div');
            saleBanner.setAttribute('class', 'sale-banner image');
            if (options.class) {
                saleBanner.setAttribute('class', options.class + " image");
            }
            saleBanner.appendChild(ref.createNewElement());
            if (ref.liveArea()) {
                saleBanner.appendChild(ref.liveArea());
            }
            if (options.pAlt) {
                saleBanner.appendChild(this.pAlt());
            }
            if (options.dataTracking) {
                saleBanner.setAttribute('data-tracking-position', options.dataTracking);
            } else {
                saleBanner.setAttribute('data-tracking-position', 'promo-banner');
            }
            if (options.links) {
                options.links.forEach(function (element, index) {
                    saleBanner.appendChild(ref.createLink(element.href, element.title, element.class));
                });
            }

            ref.insertElBefore(saleBanner, targetElement);
        }

        if (targetMobElement) {
            var mobSaleBanner = document.createElement('div');
            mobSaleBanner.setAttribute('class', 'sale-banner-mob image');
            if (options.class) {
                mobSaleBanner.setAttribute('class', options.class + "-mob image");
            }
            mobSaleBanner.appendChild(ref.createNewElement());
            if (ref.liveArea()) {
                mobSaleBanner.appendChild(ref.liveArea());
            }
            if (options.pAlt) {
                mobSaleBanner.appendChild(this.pAlt());
            }
            // mobSaleBanner.setAttribute('data-tracking-position', 'promo-banner');
            if (options.dataTracking) {
                mobSaleBanner.setAttribute('data-tracking-position', options.dataTracking);
            } else {
                mobSaleBanner.setAttribute('data-tracking-position', 'promo-banner');
            }
            if (options.links) {
                options.links.forEach(function (element, index) {
                    mobSaleBanner.appendChild(ref.createLink(element.href, element.title, element.class));
                });
            }
            ref.insertElBefore(mobSaleBanner, targetMobElement);
        }
    };
    this.timeCheck = function () {
        if (!options.start || !options.end) {
            return true;
        }
        var serverDate;
        if (document.getElementById('embargoDate') !== null && document.getElementById('embargoDate').value.length === 16) {
            serverDate = document.getElementById('embargoDate').value.split('/');
        } else {
            serverDate = document.body.dataset.gen.split('/');
        }
        var yearAndTime = serverDate[2].split(' ');
        var currentDate = {
            year: yearAndTime[0],
            month: serverDate[1],
            day: serverDate[0],
            time: yearAndTime[1],
            dayTimeString: function () {
                return this.year + '-' + this.month + '-' + this.day + 'T' + this.time;
            }
        };
        var todayDate = new Date(currentDate.dayTimeString());
        var startDate = new Date(options.start);
        var endDate = new Date(options.end);
        var runScript = todayDate >= startDate && todayDate < endDate ? true : false;
        return runScript;
    };

    this.init = (function () {
        // checks for staging and presence of date string
        if (window.location.href.indexOf('staging') !== -1) {
            var interval = setInterval(function () {
                ref.timeCheck();
                if (document.getElementById('embargoDate')) {
                    clearInterval(interval);
                    if (ref.timeCheck()) {
                        ref.appendToPage();
                    }
                }
            }, 10);
            // to run if on www.
        } else {
            if (ref.timeCheck()) {
                ref.appendToPage();
            }
        }
    })();
}

$(document).ready(function () {
    setTimeout(function () {
        trackingGenerator();
    }, 10);
});

