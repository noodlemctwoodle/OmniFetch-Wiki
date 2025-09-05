# Webhook Notifications

OmniFetch supports webhook-based push notifications to keep you updated on important events from your media services in real-time.

## Overview

Webhooks allow your services (Sonarr, Radarr, Lidarr, etc.) to send instant notifications directly to your iPhone, iPad, or Apple TV when important events occur. This means you'll know immediately when downloads complete, new media is added, or issues need your attention.

## Supported Services

### Fully Automated Setup

These services support automatic webhook configuration:

- **Sonarr** - TV series management
- **Radarr** - Movie management  
- **Lidarr** - Music management

### Manual Setup Required

These services require additional configuration:

- **Jellyseerr** - Request management
- **SABnzbd** - Usenet downloader (requires notification script)

## Getting Started

### Automatic Setup (Sonarr/Radarr/Lidarr)

1. **Enable Notifications**: In OmniFetch Settings, ensure push notifications are enabled
2. **Add Your Service**: Configure your service with URL and API key
3. **Save Configuration**: OmniFetch automatically creates the webhook connection
4. **Test**: Go to your service's web interface → Settings → Connections → Test the OmniFetch webhook

That's it! You'll now receive push notifications for all supported events.

### Manual Setup (Jellyseerr)

For Jellyseerr, you'll need to manually configure the webhook:

1. **Get Webhook URL**: Check your OmniFetch app's notification settings for your unique webhook URL
2. **Configure in Jellyseerr**:
   - Go to Settings → Notifications → Add Webhook
   - Enter your OmniFetch webhook URL
   - Select which events you want to receive
   - Test the connection

### Manual Setup (SABnzbd)

SABnzbd requires a notification script since it doesn't have built-in webhook support:

1. **Download Script**: Get the OmniFetch notification script from the app
2. **Configure Script**: Add your unique webhook URL to the script
3. **Install Script**: Place it in your SABnzbd scripts directory
4. **Enable in SABnzbd**: Configure SABnzbd to use the notification script

## Supported Events

### Sonarr Events

- Download completed
- Media grabbed from indexer
- Files renamed
- Episode files deleted
- Series removed from library
- Health issues detected/resolved
- Application updates

### Radarr Events

- Download completed
- Media grabbed from indexer
- Files renamed  
- Movie files deleted
- Movies added/removed from library
- Health issues detected/resolved
- Application updates
- Manual interaction required

### Lidarr Events

- Download completed
- Media grabbed from indexer
- Files renamed
- Health issues detected/resolved
- Application updates

### Jellyseerr Events

- Media requested by users
- Requests approved/declined
- Media now available
- Request processing failed
- Issues created/resolved/reopened
- Comments added to issues

### SABnzbd Events

- Downloads started/completed/failed
- Queue completed
- Downloads paused/resumed
- Disk space warnings
- Extraction completed/failed

## Notification Examples

You'll receive clear, actionable notifications like:

- **"The Office S09E23 downloaded successfully"** - Sonarr download completion
- **"Avengers: Endgame added to library"** - Radarr movie added
- **"User requested Spider-Man: No Way Home"** - Jellyseerr request
- **"Low disk space warning on Downloads folder"** - SABnzbd system alert

## Privacy & Security

- **No Personal Data**: Only notification content is transmitted
- **Secure Delivery**: All webhooks use authenticated endpoints
- **Local Control**: All sensitive configuration stays on your device
- **iCloud Integration**: Uses your existing iCloud account for delivery

## Troubleshooting

### Common Issues

**No notifications arriving:**

- Check that OmniFetch has notification permissions in iOS Settings
- Verify the webhook test passes in your service's web interface
- Ensure your device has an active internet connection

**Webhook test fails:**

- Confirm your service configuration is correct (URL, API key)
- Check that OmniFetch is properly configured for the service
- Try removing and re-adding the service in OmniFetch

**Some events not triggering:**

- Verify the event types are enabled in your service's webhook settings
- Check your service's activity history to confirm events are actually occurring

### Getting Help

If you continue to experience issues:

1. Check the notification settings within OmniFetch
2. Test your service connections in the OmniFetch app
3. Verify your services are configured correctly and accessible
4. Review your device's general notification settings

## Benefits

- **Instant Updates**: Know immediately when important events occur
- **Stay Informed**: Monitor your media stack from anywhere
- **Proactive Management**: Address issues before they become problems
- **Customizable**: Choose which events matter to you
- **Cross-Device**: Notifications sync across all your Apple devices