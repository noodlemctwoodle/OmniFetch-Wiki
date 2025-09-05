# Configuration Overview

This guide provides an overview of configuring OmniFetch and links to detailed setup instructions for each supported service.

## Getting Started

Before configuring individual services, ensure OmniFetch is properly set up:

1. **[OmniFetch App Configuration](omnifetch-app.md)** - Configure the app itself, permissions, and global settings
2. **Service Configuration** - Set up your individual media services (see below)

## Service Configuration Guides

OmniFetch supports several media management services. All services can be monitored, but webhook notifications require a private beta key.

### Supported Services

- **[Sonarr Configuration](services/sonarr.md)** - TV show management and monitoring
- **[Radarr Configuration](services/radarr.md)** - Movie management and monitoring  
- **[Lidarr Configuration](services/lidarr.md)** - Music management and monitoring
- **[Jellyseerr Configuration](services/jellyseerr.md)** - User request management
- **[SABnzbd Configuration](services/sabnzbd.md)** - Usenet download client

### Webhook Support (Beta)

Webhook notifications are configured through OmniFetch's Notification Settings and require **beta access**. Beta testers receive:
- Beta password for authentication
- Webhook server URL
- Setup documentation

Without beta access, you can still monitor services through the app but won't receive push notifications for events. Contact support to request beta access.

## Configuration Quick Reference

| Service | Default Port | Monitoring | Webhook Notifications |
|---------|--------------|------------|---------------------|
| **Sonarr** | 8989 | ✅ Available | 🔑 Beta Access Required |
| **Radarr** | 7878 | ✅ Available | 🔑 Beta Access Required |
| **Lidarr** | 8686 | ✅ Available | 🔑 Beta Access Required |
| **Jellyseerr** | 5055 | ✅ Available | 🔑 Beta Access Required (Manual) |
| **SABnzbd** | 8080 | ✅ Available | 🔑 Beta Access Required (Script) |

## General Setup Process

1. **Install and Configure Service**: Ensure your media service is running and accessible
2. **Locate API Key**: Find the API key in your service's settings
3. **Add to OmniFetch**: Use the "Add Service" feature in OmniFetch
4. **Test Connection**: Verify the connection works properly
5. **Configure Notifications** (Beta): If you have beta access, configure webhook notifications
6. **Test Notifications** (Beta): Test webhook setup according to beta documentation

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
