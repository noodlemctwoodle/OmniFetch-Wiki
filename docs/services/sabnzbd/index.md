# SABnzbd

SABnzbd is an open-source binary newsreader written in Python. It's the most popular SABnzbd client for downloading and processing content from Usenet.
OmniFetch provides comprehensive monitoring and notification capabilities for SABnzbd.

## Status Indicators

Visual status markers used in OmniFetch for download queue items:

<div class="status-indicator">
  <span class="status-badge downloaded">Completed</span>
  <span class="status-description">Download finished successfully</span>
</div>

<div class="status-indicator">
  <span class="status-badge downloading">Downloading</span>
  <span class="status-description">Currently downloading</span>
</div>

<div class="status-indicator">
  <span class="status-badge queued">Queued</span>
  <span class="status-description">Waiting in download queue</span>
</div>

<div class="status-indicator">
  <span class="status-badge missing">Paused</span>
  <span class="status-description">Download paused</span>
</div>

<div class="status-indicator">
  <span class="status-badge error">Failed</span>
  <span class="status-description">Download failed or incomplete</span>
</div>

<div class="status-indicator">
  <span class="status-badge unmonitored">Extracting</span>
  <span class="status-description">Processing/extracting files</span>
</div>

## Documentation

### Setup & Configuration

- **[Initial Setup](setup.md)** - Add SABnzbd to OmniFetch
- **[API Configuration](setup.md)** - API key and connection settings
- **[Webhook Notifications](webhooks.md)** - Beta webhook configuration

### Features

### Troubleshooting

## Quick Links

- [SABnzbd Official Documentation](https://sabnzbd.org/wiki/)
- [SABnzbd GitHub](https://github.com/sabnzbd/sabnzbd)
- [API Documentation](https://sabnzbd.org/wiki/advanced/api)
