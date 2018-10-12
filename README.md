

# Sale Banner injection script

Banner includes a number of options which are to be passed in via an options object.

The options currently available include:

* class - to be added to the banner. There is a default if this is not specified
* target - target div for the banner to appear above
* title - text to be added to the title attribute of link in banner
* links - An array of objects containing link info
* h1 - Any title text to be inserted
* p - paragraph, takes an array of 4 entries en/nl/fr/de
* pAlt - alternate text
* cta - the details of any cta to be passed as an array of sub arrays containing details for each cta. Formatted [[href, en-title, nl-title, fr-title, de-title]]. The script will loop through the array creating as many as you have provided.
* p2 - a final paragraph element
* start - start date for the banner to appear
* end - end date for banner to appear
* dataTracking - data-tracking-position tag
* html - insert any html into the banner in a string


## Invoking

saleBanner is a constructor function. So you invoke it using the new keyword. Example below

`var banner = new SaleBanner();`

## Event

Once a banner has been added to the page an event known as 'bannerAttached' will fire on the window object.