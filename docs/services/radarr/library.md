# Radarr Library

Browse your complete movie collection from your Radarr library through OmniFetch.

## Overview

The Library tab displays all movies in your Radarr collection, providing a mobile-friendly interface to browse your complete movie library.
This is the default view when accessing your Radarr service in OmniFetch.

<div class="hero-image-container" style="max-width: 800px;">
  <a href="../../../assets/images/service-radarr/radarr-library-light.png" class="glightbox light-mode-only"
     data-gallery="Radarr Library" data-glightbox="title: Radarr Library View">
    <img src="../../../assets/images/service-radarr/radarr-library-light.png"
         alt="Radarr Library Light Mode" class="hero-image" style="width: 100%; max-width: none;">
  </a>
  <a href="../../../assets/images/service-radarr/radarr-library-dark.png" class="glightbox dark-mode-only"
     data-gallery="Radarr Library" data-glightbox="title: Radarr Library View">
    <img src="../../../assets/images/service-radarr/radarr-library-dark.png"
         alt="Radarr Library Dark Mode" class="hero-image" style="width: 100%; max-width: none;">
  </a>
</div>

## Library Display

The Library tab presents your movie collection using OmniFetch's unified service interface:

- **Movie List**: All movies from your Radarr library
- **Visual Layout**: Optimized for mobile viewing
- **Status Indicators**: Visual markers showing movie status
- **Smooth Scrolling**: Efficient loading for large libraries

## Movie Information

Each movie in the library displays information provided by Radarr, including:

- **Title and Year**: Movie identification
- **Status**: Current download/monitoring state
- **Quality Information**: When available from Radarr
- **Visual Indicators**: Status symbols for quick recognition

### Status Indicators

Visual status markers used in OmniFetch:

<div class="status-indicator">
  <span class="status-badge downloaded">Downloaded</span>
  <span class="status-description">Movie is in your library</span>
</div>

<div class="status-indicator">
  <span class="status-badge downloading">Downloading</span>
  <span class="status-description">Currently downloading</span>
</div>

<div class="status-indicator">
  <span class="status-badge queued">Queued</span>
  <span class="status-description">Waiting to download</span>
</div>

<div class="status-indicator">
  <span class="status-badge missing">Missing</span>
  <span class="status-description">Not yet downloaded</span>
</div>

<div class="status-indicator">
  <span class="status-badge error">Error</span>
  <span class="status-description">Cannot be found or failed</span>
</div>

<div class="status-indicator">
  <span class="status-badge unmonitored">Unmonitored</span>
  <span class="status-description">Not tracking this movie</span>
</div>

## Sorting & Filtering

The Library tab supports the standard OmniFetch filtering options:

- **Search Text**: Filter movies by title
- **Sort Options**: Available sort methods (configured in Radarr)
- **Sort Direction**: Ascending or descending order
- **Monitored Only**: Show only monitored content (when available)

## Navigation

From the Library tab, you can:

- **Navigate to Media Details**: Tap any movie to view detailed information
- **Search Content**: Use the search bar to filter your library
- **Access Service Actions**: Use the toolbar to perform Radarr-specific actions
- **Browse Collection**: Scroll through your complete movie library

## Integration with Radarr

The Library tab displays data directly from your Radarr instance. Movie management actions (editing metadata, changing monitoring status, etc.)
should be performed through Radarr's interface. OmniFetch provides a convenient mobile interface to browse and view your collection.
