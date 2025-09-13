# Services Overview

OmniFetch supports monitoring and management of various media services. Each service integration
provides real-time status monitoring, management capabilities, and push notifications.

## Supported Services

### Download Managers

| Service | Type | Features |
|---------|------|----------|
| <img src="assets/images/app/service-icons/sonarr-logo.png" width="32" alt="Sonarr"> [Sonarr](services/sonarr/index.md) | TV Shows | Queue monitoring, calendar view, automatic webhooks |
| <img src="assets/images/app/service-icons/radarr-logo.png" width="32" alt="Radarr"> [Radarr](services/radarr/index.md) | Movies | Library management, download tracking, health monitoring |
| <img src="assets/images/app/service-icons/lidarr-logo.png" width="32" alt="Lidarr"> [Lidarr](services/lidarr/index.md) | Music | Album monitoring, artist management, release tracking |

### Request Management

| Service | Type | Status | Features |
|---------|------|--------|----------|
| <img src="assets/images/app/service-icons/jellyseerr-logo.png" width="32" alt="Jellyseerr"> [Jellyseerr](services/jellyseerr/index.md) | Requests | Request approval, user management, issue tracking |

### Download Clients

| Service | Type | Status | Features |
|---------|------|--------|----------|
| <img src="assets/images/app/service-icons/sabnzbd-logo.png" width="32" alt="SABnzbd"> [SABnzbd](services/sabnzbd/index.md) | Downloads | Queue management, completion tracking, system alerts |

## Common Configuration

All services share common configuration options:

### Connection Settings

- **Name**: Display name for the service
- **URL**: Base URL of your service (e.g., `https://sonarr.example.com`)
- **API Key**: Service API key for authentication
- **SSL Verification**: Enable/disable SSL certificate verification

### Notification Settings

- **Push Notifications**: Enable push notifications for this service
- **Webhook URL**: Optional webhook for external integrations
- **Notification Types**: Configure which events trigger notifications

### Sync Settings

- **CloudKit Sync**: Enable cross-device synchronisation
- **Refresh Interval**: How often to refresh data from the service
- **Cache Duration**: How long to cache service data locally

## Getting Started

1. Choose the service you want to configure
2. Follow the service-specific setup guide
3. Test the connection to ensure it's working
4. Configure notifications and sync preferences

## Troubleshooting

For service-specific issues, check the individual service documentation. For general connection issues,
see the [Common Issues](../troubleshooting/common-issues.md) guide.
