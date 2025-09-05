# Sonarr Configuration

Sonarr provides automated TV show management and downloading. OmniFetch integrates seamlessly with Sonarr through automatic webhook setup.

## Prerequisites

- Sonarr v3.0+ installed and running
- Access to Sonarr web interface
- OmniFetch app installed and configured

## Adding Sonarr to OmniFetch

### 1. Locate API Key

1. Open Sonarr web interface
2. Go to **Settings** → **General** → **Security** → **API Key**
3. Copy the API key (you may need to click "Show" first)

### 2. Add Service in OmniFetch

1. Open OmniFetch app
2. Tap **"Add Service"** → **Sonarr**
3. Enter service details:
   - **Name**: Choose a descriptive name (e.g., "TV Shows", "Main Sonarr", "4K TV")
   - **URL**: Your Sonarr URL 
     - Remote: `https://sonarr.mydomain.com`
     - Local: `http://192.168.1.100:8989`
   - **API Key**: Paste the API key from step 1
4. Tap **"Test Connection"** to verify settings
5. Tap **"Save"** when the test passes

## Webhook Setup (Automatic)

OmniFetch automatically creates webhook connections for Sonarr - no manual configuration required!

### Verification Steps

1. **After adding service**: OmniFetch creates the webhook automatically
2. **Verify setup**: Go to Sonarr web interface
   - Navigate to **Settings** → **Connect** → **Connections**
   - You should see an **"OmniFetch"** webhook connection
3. **Test webhook**: Click **Test** on the OmniFetch connection
4. **Receive notification**: You should get a push notification confirming setup

### If Webhook Creation Fails

If automatic webhook creation doesn't work:

1. Check that Sonarr can reach the internet
2. Verify your API key has sufficient permissions
3. Try removing and re-adding the service in OmniFetch
4. Check Sonarr logs for any connection errors

## Supported Events

OmniFetch will send notifications for these Sonarr events:

### Core Events

- **Episode Downloaded**: When an episode is successfully downloaded and imported
- **Media Grabbed**: When Sonarr grabs a release from an indexer
- **Quality Upgraded**: When an episode file is upgraded to better quality

### File Management

- **Files Renamed**: When episode files are renamed or reorganized
- **Episode Deleted**: When episode files are deleted from the library

### Library Management

- **Series Removed**: When a TV series is removed from Sonarr

### System Events

- **Health Issues**: When Sonarr detects system problems
- **Application Updates**: When Sonarr updates are available

## Notification Examples

You'll receive clear, informative notifications like:

- **"The Office S09E23 'Finale' downloaded successfully"**
- **"Better Call Saul S06E13 grabbed from indexer"**
- **"Breaking Bad S05E14 upgraded to 1080p BluRay"**
- **"Health issue detected: Unable to connect to indexer"**

## Common Configuration Issues

### Connection Problems

**"Connection Failed" Error:**

- Verify Sonarr URL is correct and includes `http://` or `https://`
- Check that Sonarr is running and accessible
- Test the URL in a web browser from your device
- Ensure port number is included if not standard (80/443)

**"Unauthorized" Error:**

- Double-check API key is copied correctly
- Ensure no extra spaces when pasting API key
- Verify API key hasn't been regenerated in Sonarr
- Check that API key has sufficient permissions

### Webhook Issues

**Webhook Test Fails:**

- Ensure OmniFetch notification permissions are enabled in iOS Settings
- Check that Sonarr server can reach the internet
- Verify webhook URL is correct in Sonarr connections
- Try removing and re-adding the service in OmniFetch

**No Notifications Received:**

- Check iOS Settings → Notifications → OmniFetch → Allow Notifications
- Ensure device has internet connection
- Verify webhook events are enabled in Sonarr connection settings
- Test with manual notification in OmniFetch app

## Advanced Configuration

### Multiple Sonarr Instances

You can add multiple Sonarr instances (e.g., for different quality profiles):

1. Use descriptive names: "TV Shows 1080p", "TV Shows 4K", "Anime"
2. Each instance gets its own webhook configuration
3. Configure different notification sounds for different instances

### Notification Filtering

To reduce notification volume:

1. Go to OmniFetch → Settings → Notifications → Sonarr
2. Disable notifications for less important events
3. Keep enabled: Downloaded, Health Issues, Quality Upgraded
4. Consider disabling: Files Renamed, Media Grabbed

### Performance Tips

- Set appropriate refresh intervals (5-15 minutes recommended)
- Use HTTPS connections when possible for security
- Keep Sonarr updated for best compatibility
- Regular API key rotation for security

## Next Steps

After configuring Sonarr, you might want to set up:

- [Radarr Configuration](radarr.md) - For movie management
- [Lidarr Configuration](lidarr.md) - For music management  
- [Jellyseerr Configuration](jellyseerr.md) - For user requests
- [SABnzbd Configuration](sabnzbd.md) - For download management