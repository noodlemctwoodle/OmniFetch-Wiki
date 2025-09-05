# OmniFetch App Configuration

This guide covers configuring the OmniFetch app itself, including initial setup, permissions, and global settings.

## Initial Setup

After installing OmniFetch, follow these essential setup steps:

### 1. Grant Required Permissions

When you first open OmniFetch, you'll be prompted for permissions:

- **Notifications**: Allow push notifications to receive real-time alerts
- **Background App Refresh**: Enable for continuous service monitoring
- **iCloud**: Allow CloudKit sync for cross-device configuration

### 2. Basic App Settings

Configure OmniFetch's core settings:

1. Open OmniFetch
2. Go to **Settings** to access:
   - **Notifications**: Global notification preferences
   - **CloudKit Sync**: Cross-device synchronization settings
   - **Refresh Intervals**: How often services are checked for updates
   - **Appearance**: Dark mode and theme preferences

### 3. Adding Services Overview

The general process for adding any service:

1. Tap **"Add Service"** or the **"+"** button
2. Select your service type from the list
3. Enter service details (Name, URL, API Key)
4. Test the connection to verify settings
5. Save when the test passes

### 4. Global Notification Settings

Configure app-wide notification behavior:

1. Go to **Settings** → **Notifications**
2. Toggle **"Enable Notifications"** on
3. Configure global preferences:
   - Notification sounds
   - Quiet hours (do not disturb periods)
   - Badge app icon settings
   - Priority notification handling

## CloudKit Sync Configuration

Synchronize your configuration across all Apple devices:

### Setup Requirements

- Same Apple ID on all devices
- iCloud enabled on all devices
- OmniFetch installed on devices you want to sync

### What Gets Synced

- Service configurations (URLs, names, settings)
- Notification preferences
- App settings and widget configurations

### Sync Verification

1. Configure services on your primary device
2. Install OmniFetch on secondary device
3. Open the app - services should appear automatically
4. If sync doesn't work, check iCloud settings and network connection

## General Connection Settings

These settings apply to all services when configuring URLs and connections.

### URL Format Guidelines

- **Protocol**: Always include `http://` or `https://`
- **Address**: Use your full domain or IP address
- **Port**: Include port number if not standard (80/443)
- **Examples**:
  - `https://sonarr.mydomain.com`
  - `http://192.168.1.100:8989`
  - `https://mydomain.com:7878`

### SSL Verification

- **Enable** for production servers with valid certificates
- **Disable** for self-signed certificates or local testing
- **Keep enabled** when possible for security

## Next Steps

Once OmniFetch is configured, proceed to set up your individual services:

- [Sonarr Configuration](services/sonarr.md) - TV show management
- [Radarr Configuration](services/radarr.md) - Movie management
- [Lidarr Configuration](services/lidarr.md) - Music management
- [Jellyseerr Configuration](services/jellyseerr.md) - Request management
- [SABnzbd Configuration](services/sabnzbd.md) - Download management