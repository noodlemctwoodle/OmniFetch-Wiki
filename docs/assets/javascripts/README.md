# OmniFetch Documentation JavaScript

This directory contains JavaScript files used to enhance the OmniFetch documentation experience.

## File Structure

### Active JavaScript Files

| File | Purpose | Description |
|------|---------|-------------|
| `carousel.js` | Hero Image Carousel | Infinite scrolling carousel for homepage with light/dark theme support, auto-scroll, and manual navigation |
| `consent.js` | Privacy Consent Management | Handles cookie consent for analytics (currently disabled as Plausible Analytics is privacy-friendly) |
| `extra.js` | Custom Extensions | Placeholder for additional custom functionality and site-specific enhancements |

## Carousel.js

**Features:**

- **Infinite Auto-Scroll**: Cycles through 12+ app screenshots every 4 seconds
- **Manual Navigation**: Previous/next buttons and clickable indicators
- **Keyboard Support**: Arrow key navigation
- **Theme Awareness**: Automatically switches between light/dark images
- **Responsive Design**: Adapts to mobile, tablet, desktop, and ultra-wide screens
- **GLightbox Integration**: Click images for full-screen gallery view
- **User Interaction**: Pauses auto-scroll on hover/interaction

**Implementation:**

```javascript
// Initializes automatically on pages with #heroCarousel element
new HeroCarousel('heroCarousel');
```

**Image Sets**: Includes screenshots from Discover, Sonarr, Radarr, Lidarr, and Jellyseerr views.

## Consent.js

**Current Status**: Configured but disabled since Plausible Analytics doesn't require user consent.

**Features:**

- GDPR-compliant consent management
- Apple-inspired UI design with smooth animations
- Theme-aware styling for light/dark modes
- Settings panel for granular privacy controls
- Smooth scroll behavior and responsive layout

**Note**: File remains for potential future use if analytics requiring consent are added.

## Extra.js

**Purpose**: Reserved for additional site-specific JavaScript functionality.

**Usage**: Currently contains only placeholder content. Future enhancements can be added here for:

- Custom search functionality
- Enhanced navigation features
- Site-specific interactive elements
- Performance optimizations

## Configuration

JavaScript files are loaded via `mkdocs.yml`:

```yaml
extra_javascript:
  - assets/javascripts/consent.js
  - assets/javascripts/extra.js  
  - assets/javascripts/carousel.js
```

**Loading Order**: Files load in the specified order, allowing for proper dependency management.

## CSS Dependencies

JavaScript functionality depends on corresponding CSS in:

- `assets/stylesheets/custom.css` - Carousel styling
- `assets/stylesheets/_consent.css` - Consent banner styling
- `assets/stylesheets/_components.css` - Interactive component styles

## Browser Support

All JavaScript is written using modern ES6+ features with broad browser support:

- **Chrome/Edge**: 88+
- **Firefox**: 85+
- **Safari**: 14+
- **iOS Safari**: 14+
- **Android Chrome**: 88+

## Performance Considerations

- **Lazy Loading**: Carousel images load progressively
- **GPU Acceleration**: CSS transforms use hardware acceleration
- **Memory Management**: Proper cleanup of event listeners
- **Bundle Size**: Minimal footprint with no external dependencies

## Development Guidelines

When adding new JavaScript functionality:

1. **ES6+ Syntax**: Use modern JavaScript features
2. **Performance First**: Minimize DOM manipulation and use efficient selectors
3. **Accessibility**: Ensure keyboard navigation and screen reader compatibility
4. **Mobile Friendly**: Test on touch devices and various screen sizes
5. **Theme Awareness**: Support both light and dark themes
6. **Error Handling**: Graceful degradation if features fail to load

## Maintenance Notes

- **Carousel**: Auto-scroll timing can be adjusted in `HeroCarousel` constructor
- **Theme Detection**: Uses MkDocs Material's `data-md-color-scheme` attribute
- **Image Paths**: Update carousel image arrays when adding new screenshots
- **Dependencies**: All features work without external JavaScript libraries

---

Last updated: September 2024
