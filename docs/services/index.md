# Services Overview

OmniFetch supports monitoring and management of various media services. Each service integration
provides real-time status monitoring, management capabilities, and push notifications.

## Supported Services

### Download Managers

| Service | Type | Status | Features |
|---------|------|--------|----------|
| ![Sonarr](../assets/images/service-icons/sonarr-logo.png){ width="24" } [Sonarr](sonarr/index.md) | TV Shows | **Supported** | Queue, Calendar, Library, Search |
| ![Radarr](../assets/images/service-icons/radarr-logo.png){ width="24" } [Radarr](radarr/index.md) | Movies | **Supported** | Queue, Calendar, Library, Search |
| ![Lidarr](../assets/images/service-icons/lidarr-logo.png){ width="24" } [Lidarr](lidarr/index.md) | Music | **Supported** | Queue, Calendar, Library, Search |

### Request Management

| Service | Type | Status | Features |
|---------|------|--------|----------|
| ![Jellyseerr](../assets/images/service-icons/jellyseerr-logo.png){ width="24" } [Jellyseerr](jellyseerr/index.md) | Requests | **Supported** | Requests, Approvals, Search |

### Download Clients

| Service | Type | Status | Features |
|---------|------|--------|----------|
| ![SABnzbd](../assets/images/service-icons/sabnzbd-logo.png){ width="24" } [SABnzbd](sabnzbd/index.md) | Usenet | **Supported** | Queue, History, Statistics |

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
