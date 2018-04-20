

#Sale Banner injection script

Banner includes a number of options which are to be passed in via an options object.

The options currently available include:

* class - to be added to the banner. There is a default if this is not specified
* target - target div for the banner to appear above
* title - text to be added to the title attribute of link in banner
* link - href of link
* h1 - Any title text to be inserted
* p - any paragraph text to be inserted
* pAlt - alternate text
* cta - the details of any cta to be passed as an array of sub arrays containing details for each cta. Formatted [[href, en-title, nl-title, fr-title, de-title]]. The script will loop through the array creating as many as you have provided.
* p2 - a final paragraph element

## Invoking

saleBanner is a constructor function. So you invoke it using the new keyword. Example below

Markup : `var banner = new SaleBanner();`

