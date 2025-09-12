# Analytics & Privacy

OmniFetch documentation uses privacy-first analytics to understand how users interact with our documentation and improve the user experience.

## Analytics Platform

We use [Plausible Analytics](https://plausible.io), a privacy-friendly, cookieless web analytics platform that:

- ✅ **No cookies** - Doesn't use cookies or local storage
- ✅ **GDPR compliant** - No personal data collection
- ✅ **Lightweight** - Minimal performance impact
- ✅ **Open source** - Transparent and auditable
- ✅ **No consent required** - Respects user privacy by design

## What We Track

Our analytics collect anonymous, aggregated data about:

### Page Analytics

- **Page views** - Which documentation pages are most visited
- **Referral sources** - How users discover our documentation
- **Popular content** - Most accessed guides and tutorials

### User Experience

- **Download tracking** - Documentation downloads and resources accessed
- **Outbound links** - External links clicked (to understand user journeys)
- **Hash changes** - Single-page navigation within documentation sections

### Technical Insights

- **Device types** - Desktop vs mobile usage patterns
- **Geographic regions** - General location data (country level only)
- **Browser types** - Technical compatibility insights

## What We DON'T Track

- Personal identifiers (IP addresses, user agents, etc.)
- Individual user sessions or behaviour patterns
- Cookies, fingerprinting, or persistent identifiers
- Personal data or account information
- Cross-site tracking

## Data Usage

Analytics data helps us:

1. **Improve Documentation** - Identify gaps and popular content areas
2. **Optimize User Experience** - Understand navigation patterns
3. **Resource Planning** - Focus development on high-traffic features
4. **Performance Monitoring** - Ensure documentation loads efficiently

## Technical Implementation

The analytics are implemented using Plausible's lightweight script:

```html
<script defer data-domain="omnifetch.app" 
        src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js">
</script>
```

This script:

- Loads asynchronously to avoid blocking page rendering
- Tracks file downloads, navigation, and outbound links
- Operates without cookies or local storage
- Sends data to Plausible's EU-based infrastructure

## Opting Out

While Plausible doesn't require consent due to its privacy-first design, you can still opt out:

### Browser Extensions

- uBlock Origin, AdBlock Plus, or similar ad blockers automatically block analytics
- Privacy Badger and similar privacy extensions block tracking scripts

### Browser Settings

- Enable "Do Not Track" in your browser preferences
- Use private/incognito browsing mode
- Disable JavaScript (though this affects documentation functionality)

## Transparency

- **Public Dashboard**: Analytics data is available publicly at [plausible.io/OmniFetch.app](https://plausible.io/OmniFetch.app)
- **No Third Parties**: Data isn't shared with advertisers or data brokers
- **EU Infrastructure**: All data processed within European Union servers
- **Data Retention**: Analytics data retained for 2 years maximum

## Migration from Google Analytics

In September 2024, we migrated from Google Analytics to Plausible Analytics to:

- Eliminate cookie consent requirements
- Improve page loading performance
- Enhance user privacy protection
- Comply with GDPR without consent banners
- Provide transparent, public analytics data

This change reflects our commitment to user privacy while maintaining insights needed to improve documentation quality.

## Questions or Concerns

If you have questions about our analytics practices:

- **Technical Issues**: [Open a GitHub issue](https://github.com/noodlemctwoodle/OmniFetch-Wiki/issues)
- **Privacy Questions**: Contact us through our GitHub repository
- **Plausible Documentation**: [plausible.io/docs](https://plausible.io/docs)

---

## Last Updated

September 2024
