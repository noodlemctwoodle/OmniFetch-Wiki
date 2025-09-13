# Radarr Calendar

View movie release dates and upcoming releases from your Radarr library through OmniFetch.

## Overview

The Calendar tab displays release dates for movies in your Radarr collection, providing a chronological view of when movies were or will be released.
This helps you understand release timing for your monitored content.

<div class="hero-image-container" style="max-width: 800px;">
  <a href="../../../assets/images/service-radarr/radarr-calendar-light.png" class="glightbox light-mode-only"
     data-gallery="Radarr Calendar" data-glightbox="title: Radarr Calendar View">
    <img src="../../../assets/images/service-radarr/radarr-calendar-light.png"
         alt="Radarr Calendar Light Mode" class="hero-image" style="width: 100%; max-width: none;">
  </a>
  <a href="../../../assets/images/service-radarr/radarr-calendar-dark.png" class="glightbox dark-mode-only"
     data-gallery="Radarr Calendar" data-glightbox="title: Radarr Calendar View">
    <img src="../../../assets/images/service-radarr/radarr-calendar-dark.png"
         alt="Radarr Calendar Dark Mode" class="hero-image" style="width: 100%; max-width: none;">
  </a>
</div>

## Calendar Display

The Calendar tab presents movie release information using OmniFetch's unified service interface:

- **Movie List**: Movies displayed in chronological order by release date
- **Release Information**: Shows when movies were or will be released
- **Status Indicators**: Visual markers showing movie status
- **Mobile Optimized**: Designed for easy viewing on mobile devices

## Movie Information

Each calendar entry displays information provided by Radarr, including:

- **Title and Year**: Movie identification
- **Release Date**: When the movie was/will be released
- **Status**: Current download/monitoring state
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

The Calendar tab supports the standard OmniFetch filtering options:

- **Search Text**: Filter movies by title
- **Sort Options**: Available sort methods (configured in Radarr)
- **Sort Direction**: Ascending or descending order
- **Monitored Only**: Show only monitored content (when available)

## Navigation

From the Calendar tab, you can:

- **Navigate to Media Details**: Tap any movie to view detailed information
- **Search Content**: Use the search bar to filter calendar entries
- **Access Service Actions**: Use the toolbar to perform Radarr-specific actions
- **View Release Timeline**: Browse movies by their release dates

## Integration with Radarr

The Calendar tab displays data directly from your Radarr instance. Release date information comes from your Radarr movie database.
Movie management actions should be performed through Radarr's interface. OmniFetch provides a convenient way to view release timing on mobile devices.
