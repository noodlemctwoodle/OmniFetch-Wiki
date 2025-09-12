# OmniFetch Documentation - CSS Architecture

This directory contains the modular CSS architecture for the OmniFetch documentation site. The previous single `extra.css` file (1,583 lines) has been reorganized into focused, maintainable modules.

## File Structure

The CSS files are loaded in a specific order to ensure proper cascade and dependencies:

### 1. `_base.css` (133 lines)
- **Purpose**: CSS custom properties, root variables, and global resets
- **Contains**:
  - Brand color variables (--omnifetch-blue, --omnifetch-purple, etc.)
  - Global image reset styles for transparency preservation
  - Custom scrollbar styling
  - Performance optimizations
  - Custom emoji styles

### 2. `_navigation.css` (93 lines)
- **Purpose**: Header, navigation tabs, search, and footer styling
- **Contains**:
  - Enhanced header with gradient background
  - Navigation tabs with backdrop blur effects
  - Search input improvements
  - Footer gradient styling
  - Mobile navigation adaptations

### 3. `_components.css` (252 lines)
- **Purpose**: Reusable UI components and widgets
- **Contains**:
  - Enhanced cards for home page
  - Service status badges
  - Admonition styling (info, tip, warning, note)
  - Button and link enhancements
  - Code block improvements
  - Table styling with hover effects
  - Icon enhancements

### 4. `_layout.css` (256 lines)
- **Purpose**: Responsive layout and mobile optimizations
- **Contains**:
  - Mobile image optimizations
  - Tablet-specific sizing
  - Desktop image constraints
  - Mobile table improvements with proper responsive design
  - Responsive breakpoints for different screen sizes

### 5. `_consent.css` (636 lines)
- **Purpose**: Cookie consent banner and privacy settings
- **Contains**:
  - Enhanced overlay with backdrop blur
  - Consent form styling
  - Uniform button controls
  - iOS-style toggle switches
  - Clean privacy settings panel
  - Mobile responsive improvements
  - Accessibility features (focus states, high contrast, reduced motion)

### 6. `_gallery.css` (158 lines)
- **Purpose**: Image gallery and lightbox functionality
- **Contains**:
  - Image wrapper classes (img-large, img-medium, img-small, etc.)
  - Service logo styling
  - Theme-aware images for light/dark mode
  - GLightbox customization
  - Responsive image adjustments

### 7. `_animations.css` (48 lines)
- **Purpose**: Keyframe animations and loading effects
- **Contains**:
  - Page load fade-in animations
  - Cookie consent animations
  - Utility animation classes

### 8. `custom.css` (Empty placeholder)
- **Purpose**: Site-specific overrides and customizations
- **Usage**: Add any custom styling that doesn't fit into the modular structure

## Load Order

The CSS files are loaded in the following order via `mkdocs.yml`:

```yaml
extra_css:
  - assets/stylesheets/_base.css          # Variables and root styles first
  - assets/stylesheets/_navigation.css    # Header and navigation
  - assets/stylesheets/_components.css    # Cards, buttons, tables, admonitions
  - assets/stylesheets/_layout.css        # Responsive layout and mobile styles
  - assets/stylesheets/_gallery.css       # Image gallery and lightbox
  - assets/stylesheets/_consent.css       # Cookie consent banner
  - assets/stylesheets/_animations.css    # Keyframe animations and effects
  - assets/stylesheets/custom.css         # Site-specific overrides
```

## Benefits of This Structure

### Maintainability
- Each file focuses on a specific area of functionality
- Files are reasonably sized (48-636 lines vs. 1,583 lines)
- Easy to locate and modify specific styling
- Reduced merge conflicts in version control

### Performance
- Logical grouping allows for potential lazy loading
- CSS cascade is preserved through proper load order
- Minification works better with focused files

### Development Experience
- Clear separation of concerns
- Easy to understand which file to modify
- Better code organization and documentation
- Simplified debugging and testing

## Modification Guidelines

When making changes to the styling:

1. **Identify the correct file** based on the component or area you're modifying
2. **Maintain the established patterns** within each file
3. **Consider responsive implications** when adding new styles
4. **Test across all breakpoints** (mobile, tablet, desktop)
5. **Preserve accessibility features** (focus states, high contrast support)

## Backup

The original `extra.css` file has been preserved as `extra-backup.css` for reference and emergency rollback if needed.

## Testing

Always test changes by running:

```bash
# In the project root
source .venv/bin/activate
mkdocs build --clean --strict
mkdocs serve
```

Visit the local development server to verify styling changes before deployment.

## Color Scheme Support

All files include proper support for both light and dark themes using:
- `[data-md-color-scheme="slate"]` selectors for dark mode
- CSS custom properties for consistent theming
- Proper contrast ratios for accessibility