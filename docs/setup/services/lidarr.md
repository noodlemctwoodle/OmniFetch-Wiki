# Lidarr Configuration

Lidarr manages music collections and automated album downloading. OmniFetch integrates seamlessly with Lidarr through automatic webhook setup.

## Prerequisites

- Lidarr v1.0+ installed and running
- Access to Lidarr web interface
- OmniFetch app installed and configured

## Adding Lidarr to OmniFetch

### 1. Locate API Key

1. Open Lidarr web interface
2. Go to **Settings** → **General** → **Security** → **API Key**
3. Copy the API key (you may need to click "Show" first)

### 2. Add Service in OmniFetch

1. Open OmniFetch app
2. Tap **"Add Service"** → **Lidarr**
3. Enter service details:
   - **Name**: Choose a descriptive name (e.g., "Music", "Main Lidarr", "FLAC Collection")
   - **URL**: Your Lidarr URL
     - Remote: `https://lidarr.mydomain.com`
     - Local: `http://192.168.1.100:8686`
   - **API Key**: Paste the API key from step 1
4. Tap **"Test Connection"** to verify settings
5. Tap **"Save"** when the test passes

## Webhook Setup (Automatic)

OmniFetch automatically creates webhook connections for Lidarr - no manual configuration required!

### Verification Steps

1. **After adding service**: OmniFetch creates the webhook automatically
2. **Verify setup**: Go to Lidarr web interface
   - Navigate to **Settings** → **Connect** → **Connections**
   - You should see an **"OmniFetch"** webhook connection
3. **Test webhook**: Click **Test** on the OmniFetch connection
4. **Receive notification**: You should get a push notification confirming setup

### If Webhook Creation Fails

If automatic webhook creation doesn't work:

1. Check that Lidarr can reach the internet
2. Verify your API key has sufficient permissions
3. Try removing and re-adding the service in OmniFetch
4. Check Lidarr logs for any connection errors

## Supported Events

OmniFetch will send notifications for these Lidarr events:

### Core Events

- **Album Downloaded**: When an album is successfully downloaded and imported
- **Media Grabbed**: When Lidarr grabs a release from an indexer
- **Quality Upgraded**: When album files are upgraded to better quality

### File Management

- **Files Renamed**: When music files are renamed or reorganized
- **Track Imported**: When individual tracks are imported into the library

### Artist Management

- **Artist Added**: When a new artist is added to Lidarr
- **Artist Removed**: When an artist is removed from Lidarr

### System Events

- **Health Issues**: When Lidarr detects system problems
- **Application Updates**: When Lidarr updates are available

## Notification Examples

You'll receive clear, informative notifications like:

- **"The Beatles - Abbey Road (1969) downloaded successfully"**
- **"Pink Floyd - Dark Side of the Moon grabbed from indexer"**
- **"Queen - Bohemian Rhapsody upgraded to FLAC"**
- **"Health issue detected: Unable to connect to music indexer"**
- **"Artist added: Taylor Swift with 12 monitored albums"**

## Common Configuration Issues

### Connection Problems

**"Connection Failed" Error:**

- Verify Lidarr URL is correct and includes `http://` or `https://`
- Check that Lidarr is running and accessible
- Test the URL in a web browser from your device
- Ensure port number is included if not standard (80/443)

**"Unauthorized" Error:**

- Double-check API key is copied correctly
- Ensure no extra spaces when pasting API key
- Verify API key hasn't been regenerated in Lidarr
- Check that API key has sufficient permissions

### Webhook Issues

**Webhook Test Fails:**

- Ensure OmniFetch notification permissions are enabled in iOS Settings
- Check that Lidarr server can reach the internet
- Verify webhook URL is correct in Lidarr connections
- Try removing and re-adding the service in OmniFetch

**No Notifications Received:**

- Check iOS Settings → Notifications → OmniFetch → Allow Notifications
- Ensure device has internet connection
- Verify webhook events are enabled in Lidarr connection settings
- Test with manual notification in OmniFetch app

## Advanced Configuration

### Multiple Lidarr Instances

You can add multiple Lidarr instances for different music collections:

1. Use descriptive names: "Music FLAC", "Music MP3", "Classical Music"
2. Each instance gets its own webhook configuration
3. Configure different notification sounds for different instances

### Quality Profile Considerations

#### Lossless Collection (FLAC)

- **Name**: "Music FLAC"
- **Purpose**: Audiophile-quality collection
- **Quality**: FLAC, 24-bit when available
- **Size**: Large file sizes
- **Note**: Best for dedicated listening setups

#### Compressed Collection (MP3)

- **Name**: "Music MP3"
- **Purpose**: Portable/streaming collection
- **Quality**: 320kbps MP3 or V0 VBR
- **Size**: Moderate file sizes
- **Note**: Good balance of quality and storage

#### Specialized Collections

- **Classical**: Different organizational needs
- **Podcasts**: Episode-based rather than album-based
- **Live Recordings**: Bootlegs and concert recordings

### Notification Filtering

To reduce notification volume:

1. Go to OmniFetch → Settings → Notifications → Lidarr
2. Disable notifications for less important events
3. Keep enabled: Album Downloaded, Health Issues, Quality Upgraded
4. Consider disabling: Files Renamed, Media Grabbed, Artist Added

### Performance Tips

- Set appropriate refresh intervals (10-30 minutes recommended)
- Use HTTPS connections when possible for security
- Keep Lidarr updated for best compatibility
- Regular API key rotation for security

## Music Library Organization

### Folder Structure

Lidarr works best with organized folder structures:

```
Music/
├── Artist Name/
│   ├── Album Name (Year)/
│   │   ├── 01 - Track Name.flac
│   │   └── 02 - Track Name.flac
│   └── Another Album (Year)/
└── Another Artist/
```

### Metadata Management

- **Enable**: Automatic metadata fetching
- **Configure**: Preferred release types (Studio, Live, Compilation)
- **Set**: File naming conventions for consistency
- **Monitor**: Album availability and quality upgrades

## Integration with Music Players

### Plex Music

- Ensure Lidarr points to Plex music library folder
- Configure Plex to monitor library for changes
- Set appropriate scan intervals

### Local Players

- iTunes/Music app: Add library folder to monitored locations
- VLC/Other players: Point to Lidarr root folder
- Streaming servers: Configure access to music directory

## Next Steps

After configuring Lidarr, you might want to set up:

- [Sonarr Configuration](sonarr.md) - For TV show management
- [Radarr Configuration](radarr.md) - For movie management
- [Jellyseerr Configuration](jellyseerr.md) - For user requests
- [SABnzbd Configuration](sabnzbd.md) - For download management