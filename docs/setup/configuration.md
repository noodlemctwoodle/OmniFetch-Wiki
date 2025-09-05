# Configuration Guide

This comprehensive guide covers configuring OmniFetch and each supported media service for optimal monitoring and notifications.

## OmniFetch App Configuration

### Initial Setup

After installing OmniFetch, follow these essential setup steps:

#### 1. Grant Required Permissions

When you first open OmniFetch, you'll be prompted for permissions:

- **Notifications**: Allow push notifications to receive real-time alerts
- **Background App Refresh**: Enable for continuous service monitoring
- **iCloud**: Allow CloudKit sync for cross-device configuration

#### 2. Basic App Settings

Configure OmniFetch's core settings:

1. Open OmniFetch
2. Go to **Settings** to access:
   - **Notifications**: Global notification preferences
   - **CloudKit Sync**: Cross-device synchronization settings
   - **Refresh Intervals**: How often services are checked for updates
   - **Appearance**: Dark mode and theme preferences

#### 3. Adding Services Overview

The general process for adding any service:

1. Tap **"Add Service"** or the **"+"** button
2. Select your service type from the list
3. Enter service details (Name, URL, API Key)
4. Test the connection to verify settings
5. Save when the test passes

#### 4. Global Notification Settings

Configure app-wide notification behavior:

1. Go to **Settings** → **Notifications**
2. Toggle **"Enable Notifications"** on
3. Configure global preferences:
   - Notification sounds
   - Quiet hours (do not disturb periods)
   - Badge app icon settings
   - Priority notification handling

### CloudKit Sync Configuration

Synchronize your configuration across all Apple devices:

#### Setup Requirements
- Same Apple ID on all devices
- iCloud enabled on all devices
- OmniFetch installed on devices you want to sync

#### What Gets Synced
- Service configurations (URLs, names, settings)
- Notification preferences
- App settings and widget configurations

#### Sync Verification
1. Configure services on your primary device
2. Install OmniFetch on secondary device
3. Open the app - services should appear automatically
4. If sync doesn't work, check iCloud settings and network connection

## Sonarr Configuration

Sonarr provides automated TV show management and downloading.

### Adding Sonarr to OmniFetch

1. **Locate API Key**: 
   - Open Sonarr web interface
   - Go to **Settings** → **General** → **Security** → **API Key**
   - Copy the API key

2. **Add Service in OmniFetch**:
   - Tap **"Add Service"** → **Sonarr**
   - **Name**: Choose a descriptive name (e.g., "TV Shows", "Main Sonarr")
   - **URL**: Your Sonarr URL (e.g., `https://sonarr.mydomain.com` or `http://192.168.1.100:8989`)
   - **API Key**: Paste the API key from step 1
   - **Test Connection** → **Save**

### Sonarr Webhook Setup (Automatic)

OmniFetch automatically creates webhook connections for Sonarr:

1. **After adding service**: OmniFetch creates the webhook automatically
2. **Verify setup**: Go to Sonarr → **Settings** → **Connect** → **Connections**
3. **Test webhook**: Find "OmniFetch" connection and click **Test**
4. **Receive notification**: You should get a push notification confirming setup

### Supported Sonarr Events

**Core Events:**
- Episode downloaded and imported
- TV show grabbed from indexer
- Episode file quality upgraded

**File Management:**
- Episodes renamed or reorganized
- Episode files deleted

**System Events:**
- Health issues detected
- Application updates available

**Library Management:**
- TV series removed from library

## Radarr Configuration

Radarr handles automated movie downloading and management.

### Adding Radarr to OmniFetch

1. **Locate API Key**:
   - Open Radarr web interface
   - Go to **Settings** → **General** → **Security** → **API Key**
   - Copy the API key

2. **Add Service in OmniFetch**:
   - Tap **"Add Service"** → **Radarr**
   - **Name**: Choose a descriptive name (e.g., "Movies", "4K Movies", "Main Radarr")
   - **URL**: Your Radarr URL (e.g., `https://radarr.mydomain.com` or `http://192.168.1.100:7878`)
   - **API Key**: Paste the API key from step 1
   - **Test Connection** → **Save**

### Radarr Webhook Setup (Automatic)

OmniFetch automatically creates webhook connections for Radarr:

1. **After adding service**: OmniFetch creates the webhook automatically
2. **Verify setup**: Go to Radarr → **Settings** → **Connect** → **Connections**
3. **Test webhook**: Find "OmniFetch" connection and click **Test**
4. **Receive notification**: You should get a push notification confirming setup

### Supported Radarr Events

**Core Events:**
- Movie downloaded and imported
- Movie grabbed from indexer
- Movie file quality upgraded

**File Management:**
- Movies renamed or reorganized
- Movie files deleted

**Library Management:**
- Movies added to library
- Movies removed from library

**System Events:**
- Health issues detected
- Application updates available
- Manual interaction required

## Lidarr Configuration

Lidarr manages music collections and automated album downloading.

### Adding Lidarr to OmniFetch

1. **Locate API Key**:
   - Open Lidarr web interface
   - Go to **Settings** → **General** → **Security** → **API Key**
   - Copy the API key

2. **Add Service in OmniFetch**:
   - Tap **"Add Service"** → **Lidarr**
   - **Name**: Choose a descriptive name (e.g., "Music", "Main Lidarr")
   - **URL**: Your Lidarr URL (e.g., `https://lidarr.mydomain.com` or `http://192.168.1.100:8686`)
   - **API Key**: Paste the API key from step 1
   - **Test Connection** → **Save**

### Lidarr Webhook Setup (Automatic)

OmniFetch automatically creates webhook connections for Lidarr:

1. **After adding service**: OmniFetch creates the webhook automatically
2. **Verify setup**: Go to Lidarr → **Settings** → **Connect** → **Connections**
3. **Test webhook**: Find "OmniFetch" connection and click **Test**
4. **Receive notification**: You should get a push notification confirming setup

### Supported Lidarr Events

**Core Events:**
- Album downloaded and imported
- Music grabbed from indexer
- Album quality upgraded

**File Management:**
- Music files renamed or reorganized

**System Events:**
- Health issues detected
- Application updates available

## Jellyseerr Configuration

Jellyseerr manages media requests from users across your media stack.

### Adding Jellyseerr to OmniFetch

1. **Locate API Key**:
   - Open Jellyseerr web interface
   - Go to **Settings** → **General** → **API Key**
   - Copy the API key

2. **Add Service in OmniFetch**:
   - Tap **"Add Service"** → **Jellyseerr**
   - **Name**: Choose a descriptive name (e.g., "Requests", "Main Jellyseerr")
   - **URL**: Your Jellyseerr URL (e.g., `https://requests.mydomain.com` or `http://192.168.1.100:5055`)
   - **API Key**: Paste the API key from step 1
   - **Test Connection** → **Save**

### Jellyseerr Webhook Setup (Manual)

Jellyseerr requires manual webhook configuration:

1. **Get Webhook URL from OmniFetch**:
   - Open OmniFetch → **Settings** → **Notifications**
   - Copy your webhook URL for Jellyseerr

2. **Configure in Jellyseerr**:
   - Open Jellyseerr web interface
   - Go to **Settings** → **Notifications** → **Add Notification Agent** → **Webhook**
   - Configure webhook settings:
     - **Agent Name**: `OmniFetch Push Notifications`
     - **Webhook URL**: Paste your OmniFetch webhook URL
     - **Notification Types**: Select desired events (Media Requested, Approved, Available, etc.)
   - **Test** the connection → **Save**

### Supported Jellyseerr Events

**Request Events:**
- Media requested by users
- Requests approved or declined
- Media now available to watch
- Request processing failed

**Issue Management:**
- Issues created or resolved
- Comments added to issues

**System Events:**
- System health notifications

## SABnzbd Configuration

SABnzbd handles Usenet downloads and post-processing.

### Adding SABnzbd to OmniFetch

1. **Locate API Key**:
   - Open SABnzbd web interface
   - Go to **Config** → **General** → **Security** → **API Key**
   - Copy the API key

2. **Add Service in OmniFetch**:
   - Tap **"Add Service"** → **SABnzbd**
   - **Name**: Choose a descriptive name (e.g., "Downloads", "Main SABnzbd")
   - **URL**: Your SABnzbd URL (e.g., `https://sabnzbd.mydomain.com` or `http://192.168.1.100:8080`)
   - **API Key**: Paste the API key from step 1
   - **Test Connection** → **Save**

### SABnzbd Webhook Setup (Script Required)

SABnzbd requires a notification script for webhooks:

1. **Get Notification Script**:
   - Download the SABnzbd notification script from OmniFetch documentation
   - Configure the script with your webhook details

2. **Install Script**:
   - Place script in SABnzbd's scripts directory:
     - Linux/Mac: `~/.sabnzbd/scripts/`
     - Windows: `C:\Users\[user]\AppData\Local\sabnzbd\scripts\`
   - Make executable (Linux/Mac): `chmod +x omnifetch-notify.py`

3. **Configure SABnzbd**:
   - Go to **Config** → **Notifications**
   - Enable notification script
   - Select OmniFetch script from dropdown
   - Choose notification events and **Test** setup

### Supported SABnzbd Events

**Download Events:**
- Downloads started, completed, or failed
- Queue completed
- Downloads paused or resumed

**System Events:**
- Disk space warnings
- Extraction completed or failed
- Speed limit changes

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

With proper configuration, OmniFetch provides comprehensive monitoring and notification capabilities for your entire media stack.
