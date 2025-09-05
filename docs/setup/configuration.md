# Configuration

This guide walks you through configuring OmniFetch to monitor your media services and set up notifications.

## Initial Setup

After installing OmniFetch, follow these steps to get started:

### 1. Grant Permissions

When you first open OmniFetch, you'll be prompted for permissions:

- **Notifications**: Allow push notifications to receive alerts
- **Background App Refresh**: Enable for real-time updates
- **iCloud**: Allow CloudKit sync for cross-device configuration

### 2. Add Your First Service

1. Open OmniFetch
2. Tap **"Add Service"** or the **"+"** button
3. Select your service type (Sonarr, Radarr, Lidarr, etc.)
4. Enter your service details:
   - **Name**: Display name for your service
   - **URL**: Your service's web address (e.g., `https://sonarr.yourdomain.com`)
   - **API Key**: Found in your service's settings → General → API Key
5. Tap **"Test Connection"** to verify settings
6. Tap **"Save"** when the test passes

### 3. Configure Notifications

Enable push notifications for your services:

1. Go to **Settings** → **Notifications**
2. Toggle **"Enable Notifications"** on
3. Configure per-service settings:
   - Select which events to receive notifications for
   - Set notification sounds
   - Configure quiet hours if desired

## Service Configuration

### Finding API Keys

Each service stores its API key in a different location:

**Sonarr/Radarr/Lidarr/Readarr:**
- Settings → General → Security → API Key

**Jellyseerr:**
- Settings → General → API Key

**SABnzbd:**
- Config → General → Security → API Key

**NZBGet:**
- Settings → Security → Control username/password

**Prowlarr:**
- Settings → General → Security → API Key

**Plex:**
- Account → Privacy → "Get Token" (requires Plex Pass)

### Connection Settings

**URL Format:**
- Include `http://` or `https://`
- Use your full domain or IP address
- Include port number if not standard (80/443)
- Examples:
  - `https://sonarr.mydomain.com`
  - `http://192.168.1.100:8989`
  - `https://mydomain.com:7878`

**SSL Verification:**
- Enable for production servers with valid certificates
- Disable for self-signed certificates or local testing
- Keep enabled when possible for security

## Webhook Configuration

Webhooks provide real-time push notifications when events occur in your media services. OmniFetch supports webhook integration for immediate alerts about downloads, requests, and system events.

### Prerequisites
- OmniFetch app installed and configured with your services
- Access to your service's web interface for manual setup
- Push notification permissions enabled in OmniFetch

### Automatic Setup (Sonarr/Radarr/Lidarr)

These services support automatic webhook configuration:

1. **Add Service**: Configure your service with URL and API key in OmniFetch
2. **Save Service**: OmniFetch automatically creates the webhook connection
3. **Test Connection**: Go to your service's web interface
   - Navigate to **Settings** → **Connect** → **Connections**
   - Find the **"OmniFetch"** webhook connection  
   - Click **Test** - you should receive a push notification!
4. **Verify Setup**: If test works, you're all set for automatic notifications

### Manual Setup Required

#### Jellyseerr Setup

1. **Enable Webhooks in OmniFetch**:
   - Open OmniFetch → **Settings** → **Notifications**
   - Ensure webhook notifications are enabled
   - Note your webhook configuration details

2. **Configure in Jellyseerr**:
   - Open Jellyseerr web interface
   - Go to **Settings** → **Notifications** → **Add Notification Agent** → **Webhook**
   - Configure webhook settings:
     - **Agent Name**: `OmniFetch Push Notifications`
     - **Webhook URL**: Use your OmniFetch webhook URL
     - **Notification Types**: Select events you want (Media Requested, Approved, Available, etc.)
   - Click **Test** to verify connection
   - **Save** when test succeeds

#### SABnzbd Setup

SABnzbd requires a notification script since it doesn't have built-in webhook support:

1. **Get Webhook Configuration**:
   - Open OmniFetch → **Settings** → **Notifications**
   - Copy your unique webhook identifier

2. **Download and Configure Script**:
   - Download the SABnzbd notification script from OmniFetch documentation
   - Edit the script file with your webhook details
   - Save the configured script

3. **Install Script**:
   - Place script in SABnzbd's scripts directory:
     - Linux/Mac: `~/.sabnzbd/scripts/`
     - Windows: `C:\Users\[user]\AppData\Local\sabnzbd\scripts\`
   - Make executable (Linux/Mac): `chmod +x script-name.py`

4. **Configure SABnzbd**:
   - Open SABnzbd web interface
   - Go to **Config** → **Notifications**
   - Enable **notification script**
   - Select your OmniFetch script from dropdown
   - Choose notification events:
     - Download completed/failed
     - Queue finished
     - Extraction completed/failed
     - System warnings
   - **Test Notification Script** to verify setup

### Supported Events by Service

#### Sonarr (Automatic Setup)
**Core Events:**
- Download/Import completed (including upgrades)
- Media grabbed from indexer
- Test notifications

**File Management:**
- Files renamed or reorganized
- Episode files deleted

**Library Management:**
- TV series removed from library

**System Events:**
- Health issues detected/resolved
- Application updates

#### Radarr (Automatic Setup)
**Core Events:**
- Download/Import completed (including upgrades)
- Media grabbed from indexer
- Test notifications

**File Management:**
- Files renamed or reorganized
- Movie files deleted

**Library Management:**
- Movies added to/removed from library

**System Events:**
- Health issues detected/resolved
- Application updates
- Manual interaction required

#### Lidarr (Automatic Setup)
**Core Events:**
- Download/Import completed (including upgrades)
- Media grabbed from indexer
- Test notifications

**File Management:**
- Files renamed or reorganized

**System Events:**
- Health issues detected/resolved
- Application updates

#### Jellyseerr (Manual Setup)
**Request Events:**
- Media requested by users
- Requests approved/declined/pending
- Media now available to watch
- Request processing failed

**Issue Management:**
- Issues created/resolved/reopened
- Comments added to issues

**System Events:**
- Test notifications

#### SABnzbd (Manual Script Setup)
**Download Events:**
- Downloads started/completed/failed
- Queue completed
- Downloads paused/resumed

**System Events:**
- Disk space warnings
- Speed limit changes
- Extraction completed/failed

### Notification Examples

You'll receive clear, informative notifications like:

- **"The Office S09E23 downloaded successfully"** - Sonarr completion
- **"Avengers: Endgame added to library"** - Radarr movie added  
- **"User requested Spider-Man: No Way Home"** - Jellyseerr request
- **"Big.Movie.2024.1080p.BluRay.x264.mkv - Download started (8.5 GB)"** - SABnzbd download
- **"Health issue detected: Unable to connect to indexer"** - System warning

## CloudKit Sync

Synchronize your configuration across all Apple devices:

### Setup Requirements
- Same Apple ID on all devices
- iCloud enabled on all devices
- OmniFetch installed on devices you want to sync

### What Gets Synced
- Service configurations (URLs, names, settings)
- Notification preferences
- App settings and preferences
- Widget configurations

### Sync Verification
1. Configure services on your primary device
2. Install OmniFetch on secondary device
3. Open the app - services should appear automatically
4. If sync doesn't work, check iCloud settings and network connection

## Troubleshooting Configuration

### Service Connection Issues

**"Connection Failed" Error:**
- Verify URL is correct and includes http/https
- Check that service is running and accessible
- Ensure API key is correct and not expired
- Test URL in a web browser

**"Unauthorized" Error:**
- Double-check API key is copied correctly
- Ensure no extra spaces in API key
- Verify API key hasn't been regenerated
- Check service user permissions

### Webhook Issues

**Webhook Test Fails:**
- Ensure OmniFetch notification permissions are enabled
- Check that service can reach the internet
- Verify webhook URL is correct
- Try removing and re-adding the service

**No Notifications Received:**
- Check iOS notification settings for OmniFetch
- Ensure device has internet connection
- Verify webhook events are enabled in service
- Test with manual notification in app

### Sync Problems

**Services Not Syncing:**
- Check iCloud settings on all devices
- Ensure same Apple ID is used
- Verify internet connection on all devices
- Try signing out and back into iCloud

**Partial Sync:**
- Some settings may take longer to sync
- Force refresh by closing and reopening app
- Check available iCloud storage space

## Best Practices

### Security
- Use HTTPS URLs when possible
- Keep API keys secure and don't share them
- Regularly rotate API keys for security
- Use strong passwords for service accounts

### Performance
- Enable Background App Refresh for real-time updates
- Configure appropriate refresh intervals
- Don't duplicate services across multiple apps
- Regularly clean up unused service configurations

### Organization
- Use descriptive names for services
- Group related services logically
- Configure notifications thoughtfully to avoid spam
- Set up quiet hours for sleep periods

### Maintenance
- Regularly test service connections
- Update API keys when services are updated
- Review notification settings periodically
- Keep OmniFetch updated for latest features

## Advanced Configuration

### Custom Refresh Intervals
- Adjust how often services are checked for updates
- Balance between real-time updates and battery life
- Consider network bandwidth for frequent checks

### Notification Filtering
- Configure which events are important to you
- Use different notification sounds for different services
- Set up priority services for critical alerts

### Multi-Environment Setup
- Configure development and production services separately
- Use different notification settings for different environments
- Consider using service names that indicate environment

With proper configuration, OmniFetch provides comprehensive monitoring and notification capabilities for your entire media stack.