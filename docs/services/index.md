# Services Overview

OmniFetch supports monitoring and management of various media services. Each service integration provides real-time status monitoring, management capabilities, and push notifications.

## Supported Services

### Download Managers

| Service | Type | Status | Features |
|---------|------|--------|----------|
| ![Sonarr](../assets/images/sonarr-logo.png){ width="24" } [Sonarr](sonarr.md) | TV Shows | ✅ Full | Queue, Calendar, Library, Search |
| ![Radarr](../assets/images/radarr-logo.png){ width="24" } [Radarr](radarr.md) | Movies | ✅ Full | Queue, Calendar, Library, Search |
| ![Lidarr](../assets/images/lidarr-logo.png){ width="24" } [Lidarr](lidarr.md) | Music | ✅ Full | Queue, Calendar, Library, Search |

### Request Management

| Service | Type | Status | Features |
|---------|------|--------|----------|
| ![Jellyseerr](../assets/images/jellyseerr-logo.png){ width="24" } [Jellyseerr](jellyseerr.md) | Requests | ✅ Full | Requests, Approvals, Search |

### Download Clients

| Service | Type | Status | Features |
|---------|------|--------|----------|
| ![SABnzbd](../assets/images/sabnzbd-logo.png){ width="24" } [SABnzbd](sabnzbd.md) | Usenet | ✅ Full | Queue, History, Statistics |

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

- **CloudKit Sync**: Enable cross-device synchronization
- **Refresh Interval**: How often to refresh data from the service
- **Cache Duration**: How long to cache service data locally

## Getting Started

1. Choose the service you want to configure
2. Follow the service-specific setup guide
3. Test the connection to ensure it's working
4. Configure notifications and sync preferences

## Troubleshooting

For service-specific issues, check the individual service documentation. For general connection issues, see the [Common Issues](../troubleshooting/common-issues.md) guide.