# Configuration Overview

This guide provides an overview of configuring OmniFetch and links to detailed setup instructions for each supported service.

## Getting Started

Before configuring individual services, ensure OmniFetch is properly set up:

1. **[OmniFetch App Configuration](omnifetch-app.md)** - Configure the app itself, permissions, and global settings
2. **Service Configuration** - Set up your individual media services (see below)

## Service Configuration Guides

OmniFetch supports several media management services, each with specific setup requirements:

### Automatic Webhook Setup

These services support automatic webhook configuration - OmniFetch creates the webhooks for you:

- **[Sonarr Configuration](services/sonarr.md)** - TV show management and monitoring
- **[Radarr Configuration](services/radarr.md)** - Movie management and monitoring  
- **[Lidarr Configuration](services/lidarr.md)** - Music management and monitoring

### Manual Webhook Setup Required

These services require manual webhook configuration in their web interfaces:

- **[Jellyseerr Configuration](services/jellyseerr.md)** - User request management (manual webhook setup)
- **[SABnzbd Configuration](services/sabnzbd.md)** - Usenet download client (requires notification script)

## Configuration Quick Reference

| Service | Port | Automatic Webhooks | Manual Setup Required |
|---------|------|-------------------|---------------------|
| **Sonarr** | 8989 | ✅ Yes | ❌ No |
| **Radarr** | 7878 | ✅ Yes | ❌ No |
| **Lidarr** | 8686 | ✅ Yes | ❌ No |
| **Jellyseerr** | 5055 | ❌ No | ✅ Webhook |
| **SABnzbd** | 8080 | ❌ No | ✅ Script |

## General Setup Process

1. **Install and Configure Service**: Ensure your media service is running and accessible
2. **Locate API Key**: Find the API key in your service's settings
3. **Add to OmniFetch**: Use the "Add Service" feature in OmniFetch
4. **Test Connection**: Verify the connection works properly
5. **Configure Notifications**: Set up webhooks (automatic or manual)
6. **Test Notifications**: Ensure you receive test notifications

## Common Issues

For detailed troubleshooting information, see the individual service configuration guides above. Here are some general issues:

### Connection Problems

- **"Connection Failed"**: Check URL format, ensure service is running, verify network access
- **"Unauthorized"**: Double-check API key, ensure no extra spaces when copying
- **Service Unreachable**: Test URL in browser, check firewall and port settings

### Notification Issues  

- **No Test Notifications**: Check iOS notification permissions for OmniFetch
- **Webhook Setup Fails**: Ensure service can reach internet, try removing and re-adding service
- **Partial Notifications**: Review webhook event selection in service settings

### Sync Problems

- **Services Not Syncing**: Check iCloud settings, ensure same Apple ID on all devices
- **Slow Sync**: Force refresh by closing and reopening OmniFetch app

For comprehensive troubleshooting, see [Common Issues](../troubleshooting/common-issues.md) and [FAQ](../troubleshooting/faq.md).
