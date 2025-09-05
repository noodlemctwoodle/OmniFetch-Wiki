# Radarr Configuration

Radarr handles automated movie downloading and management. OmniFetch can monitor Radarr activity, and with a beta key, receive push notifications for events.

## Prerequisites

- Radarr v3.0+ installed and running
- Access to Radarr web interface
- OmniFetch app installed and configured

## Adding Radarr to OmniFetch

### 1. Locate API Key

1. Open Radarr web interface
2. Go to **Settings** → **General** → **Security** → **API Key**
3. Copy the API key (you may need to click "Show" first)

### 2. Add Service in OmniFetch

1. Open OmniFetch app
2. Tap **"Add Service"** → **Radarr**
3. Enter service details:
   - **Name**: Choose a descriptive name (e.g., "Movies", "4K Movies", "Main Radarr")
   - **URL**: Your Radarr URL
     - Remote: `https://radarr.mydomain.com`
     - Local: `http://192.168.1.100:7878`
   - **API Key**: Paste the API key from step 1
4. Tap **"Test Connection"** to verify settings
5. Tap **"Save"** when the test passes

## Webhook Notifications (Beta)

Webhook notifications require a **private beta key** to enable push notifications for Radarr events.

### Setup Requirements

1. **Beta Access**: You must have a private beta key
2. **Enable in OmniFetch**: 
   - Go to **Settings** → **Notifications**
   - Enter your beta key when prompted
   - Enable notifications for Radarr

### Without Beta Key

Without a beta key, you can still:
- Monitor Radarr activity through the app
- View queue, history, and calendar
- Check system health and status
- Manually refresh for updates

Push notifications for events listed below require beta access.

## Supported Events (Beta)

With beta access, OmniFetch can send notifications for these Radarr events:

### Core Events

- **Movie Downloaded**: When a movie is successfully downloaded and imported
- **Media Grabbed**: When Radarr grabs a release from an indexer
- **Quality Upgraded**: When a movie file is upgraded to better quality

### File Management

- **Files Renamed**: When movie files are renamed or reorganized
- **Movie Deleted**: When movie files are deleted from the library

### Library Management

- **Movie Added**: When a new movie is added to Radarr
- **Movie Removed**: When a movie is removed from Radarr

### System Events

- **Health Issues**: When Radarr detects system problems
- **Application Updates**: When Radarr updates are available
- **Manual Interaction Required**: When manual intervention is needed

## Notification Examples

You'll receive clear, informative notifications like:

- **"Avengers: Endgame (2019) downloaded successfully"**
- **"Top Gun: Maverick (2022) grabbed from indexer"**
- **"The Batman (2022) upgraded to 4K BluRay"**
- **"Health issue detected: Unable to connect to download client"**
- **"Manual interaction required: Movie import blocked"**

## Common Configuration Issues

### Connection Problems

**"Connection Failed" Error:**

- Verify Radarr URL is correct and includes `http://` or `https://`
- Check that Radarr is running and accessible
- Test the URL in a web browser from your device
- Ensure port number is included if not standard (80/443)

**"Unauthorized" Error:**

- Double-check API key is copied correctly
- Ensure no extra spaces when pasting API key
- Verify API key hasn't been regenerated in Radarr
- Check that API key has sufficient permissions

### Notification Issues (Beta)

**No Beta Key:**

- Webhook notifications require a private beta key
- Contact support to request beta access
- Without beta key, only manual monitoring is available

**No Notifications Received (With Beta Key):**

- Check iOS Settings → Notifications → OmniFetch → Allow Notifications
- Ensure device has internet connection
- Verify beta key is entered correctly in OmniFetch settings
- Check that notifications are enabled for Radarr in OmniFetch
- Try re-entering beta key if notifications stop working

## Advanced Configuration

### Multiple Radarr Instances

You can add multiple Radarr instances (e.g., for different quality profiles):

1. Use descriptive names: "Movies 1080p", "Movies 4K", "Foreign Films"
2. Each instance gets its own webhook configuration
3. Configure different notification sounds for different instances

### Notification Filtering

To reduce notification volume:

1. Go to OmniFetch → Settings → Notifications → Radarr
2. Disable notifications for less important events
3. Keep enabled: Downloaded, Health Issues, Quality Upgraded
4. Consider disabling: Files Renamed, Media Grabbed, Movie Added

### Performance Tips

- Set appropriate refresh intervals (5-15 minutes recommended)
- Use HTTPS connections when possible for security
- Keep Radarr updated for best compatibility
- Regular API key rotation for security

## Quality Profile Considerations

When setting up multiple Radarr instances:

### Standard Setup (1080p)

- **Name**: "Movies 1080p"
- **Purpose**: General movie collection
- **Quality**: 1080p BluRay/WEB-DL
- **Size**: Moderate file sizes

### 4K Setup

- **Name**: "Movies 4K"
- **Purpose**: Premium quality collection
- **Quality**: 2160p BluRay/WEB-DL
- **Size**: Large file sizes
- **Note**: Requires 4K-capable playback devices

### Specialty Collections

- **Foreign Films**: Different language requirements
- **Documentaries**: Separate organization
- **Kids Movies**: Family-appropriate content filtering

## Next Steps

After configuring Radarr, you might want to set up:

- [Sonarr Configuration](sonarr.md) - For TV show management
- [Lidarr Configuration](lidarr.md) - For music management
- [Jellyseerr Configuration](jellyseerr.md) - For user requests
- [SABnzbd Configuration](sabnzbd.md) - For download management