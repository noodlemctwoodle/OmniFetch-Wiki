# Radarr Wanted

View movies that are monitored but not yet downloaded in your Radarr library through OmniFetch.

## Overview

The Wanted tab displays movies from your Radarr instance that are being monitored but haven't been downloaded yet. 
This provides a quick way to see what content is still missing from your collection.

<div class="hero-image-container" style="max-width: 800px;">
  <a href="../../../assets/images/service-radarr/radarr-wanted-light.png" class="glightbox light-mode-only"
     data-gallery="Radarr Wanted" data-glightbox="title: Radarr Wanted View">
    <img src="../../../assets/images/service-radarr/radarr-wanted-light.png"
         alt="Radarr Wanted Light Mode" class="hero-image" style="width: 100%; max-width: none;">
  </a>
  <a href="../../../assets/images/service-radarr/radarr-wanted-dark.png" class="glightbox dark-mode-only"
     data-gallery="Radarr Wanted" data-glightbox="title: Radarr Wanted View">
    <img src="../../../assets/images/service-radarr/radarr-wanted-dark.png"
         alt="Radarr Wanted Dark Mode" class="hero-image" style="width: 100%; max-width: none;">
  </a>
</div>

## Wanted Content

The Wanted tab shows movies that match these criteria:

- **Monitored**: Movie is actively tracked in Radarr
- **Not Downloaded**: Movie file is not in your library
- **Missing**: Content that Radarr is looking for

This view provides visibility into what your Radarr instance is actively trying to acquire.

## Viewing Options

The Wanted tab in OmniFetch displays content from your Radarr service using the same interface components as other tabs:

- **Search**: Filter wanted movies by title
- **Sort Options**: Available through the service detail toolbar
- **Item Count**: Shows total number of wanted items

## Sorting & Filtering

The Wanted tab supports the standard OmniFetch filtering options:

- **Search Text**: Filter by movie title
- **Sort Options**: Available sort methods (configured in Radarr)
- **Sort Direction**: Ascending or descending order
- **Monitored Only**: Show only monitored content (when available)

## Status Indicators

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

## Navigation

From the Wanted tab, you can:

- **Navigate to Media Details**: Tap any movie to view detailed information
- **Search Content**: Use the search bar to filter wanted movies
- **Access Service Actions**: Use the toolbar to perform Radarr-specific actions

## Integration with Radarr

The Wanted tab displays data directly from your Radarr instance. All management actions (adding movies,
changing monitoring status, etc.) should be performed through Radarr's interface. OmniFetch provides a
convenient way to view your wanted content on mobile devices.
