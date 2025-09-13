# Jellyseerr

Jellyseerr is a fork of Overseerr for Jellyfin and Emby servers. It's a request
management and media discovery tool that allows users to request movies and TV shows.
OmniFetch provides comprehensive monitoring and notification capabilities for Jellyseerr.

## Status Indicators

Visual status markers used in OmniFetch for media requests:

<div class="status-indicator">
  <span class="status-badge downloaded">Available</span>
  <span class="status-description">Request completed and available</span>
</div>

<div class="status-indicator">
  <span class="status-badge downloading">Processing</span>
  <span class="status-description">Request being processed</span>
</div>

<div class="status-indicator">
  <span class="status-badge queued">Pending</span>
  <span class="status-description">Request awaiting approval</span>
</div>

<div class="status-indicator">
  <span class="status-badge missing">Requested</span>
  <span class="status-description">Request submitted</span>
</div>

<div class="status-indicator">
  <span class="status-badge error">Failed</span>
  <span class="status-description">Request failed or rejected</span>
</div>

<div class="status-indicator">
  <span class="status-badge unmonitored">Declined</span>
  <span class="status-description">Request was declined</span>
</div>

## Documentation

### Setup & Configuration

- **[Initial Setup](setup.md)** - Add Jellyseerr to OmniFetch
- **[API Configuration](setup.md)** - API key and connection settings
- **[Webhook Notifications](webhooks.md)** - Beta webhook configuration

### Features

### Troubleshooting

## Quick Links

- [Jellyseerr Official Documentation](https://docs.jellyseerr.dev/)
- [Jellyseerr GitHub](https://github.com/Fallenbagel/jellyseerr)
- [API Documentation](https://docs.jellyseerr.dev/api)