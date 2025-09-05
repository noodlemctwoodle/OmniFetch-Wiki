# Notifications

OmniFetch provides comprehensive notification support to keep you informed about your media services across all your Apple devices.

## Types of Notifications

### Push Notifications
Receive instant notifications on your iPhone, iPad, and Apple TV when important events occur in your media services.

**Features:**
- Real-time delivery
- Rich content with service details
- Actionable notifications where applicable
- Automatic grouping by service
- Sound and vibration customization

### Webhook Notifications
Advanced webhook integration for real-time event delivery from your services. See the [Webhooks Guide](webhooks.md) for detailed setup instructions.

## Notification Settings

### Global Settings
Configure notification preferences across all your services:

- **Enable/Disable Notifications**: Master switch for all push notifications
- **Notification Sounds**: Choose custom sounds for different event types
- **Badge App Icon**: Show notification count on the app icon
- **Lock Screen**: Display notifications on lock screen
- **Notification Center**: Keep notifications in Notification Center

### Per-Service Settings
Customize notifications for each individual service:

- **Service-Specific Sounds**: Different sounds for different services
- **Event Filtering**: Choose which events trigger notifications
- **Quiet Hours**: Disable notifications during specific time periods
- **Priority Levels**: Set high-priority services for immediate alerts

## Supported Events

### Download Events
- **Download Started**: New download begins
- **Download Completed**: Download finished successfully
- **Download Failed**: Download encountered an error
- **Quality Upgraded**: Media upgraded to better quality

### Library Events
- **Media Added**: New movies/shows/music added to library
- **Media Removed**: Content removed from library
- **Files Renamed**: Media files renamed or reorganized
- **Missing Episodes**: Episodes that should be available but aren't

### System Events
- **Health Warnings**: Service health issues detected
- **Update Available**: New version of service available
- **API Errors**: Connection or authentication problems
- **Disk Space Low**: Storage warnings from download clients

### Request Events (Jellyseerr)
- **New Requests**: Users request new media
- **Approved Requests**: Requests approved for download
- **Available Media**: Requested media now available
- **Request Issues**: Problems with specific requests

## Setting Up Notifications

### Initial Setup
1. **Grant Permissions**: Allow OmniFetch to send notifications when prompted
2. **Configure Services**: Add your media services with proper API keys
3. **Test Notifications**: Use the test function to verify delivery
4. **Customize Settings**: Adjust notification preferences to your liking

### iOS Notification Settings
Ensure OmniFetch has proper permissions in iOS Settings:

1. **Settings** → **Notifications** → **OmniFetch**
2. Enable **Allow Notifications**
3. Configure **Lock Screen**, **Notification Center**, and **Banners**
4. Set **Sounds** and **Badges** as desired
5. Choose **Notification Grouping** preference

## Notification Management

### Managing Notification History
- View recent notifications in the app's notification history
- Mark notifications as read/unread
- Clear notification history
- Export notification logs for troubleshooting

### Notification Scheduling
- **Quiet Hours**: Set time periods when notifications are suppressed
- **Weekend Mode**: Different notification settings for weekends
- **Do Not Disturb Integration**: Respect iOS Focus modes

## Troubleshooting

### Not Receiving Notifications

**Check Permissions:**
- iOS Settings → Notifications → OmniFetch → Allow Notifications
- Verify Lock Screen, Notification Center, and Banners are enabled

**Check Service Configuration:**
- Ensure services are properly configured with correct URLs and API keys
- Test service connections in OmniFetch settings
- Verify webhook setup for supported services

**Check Network:**
- Ensure reliable internet connection
- Verify services are accessible from your device
- Check firewall settings if using local network services

### Delayed Notifications

**Network Issues:**
- Notifications may be delayed on poor connections
- Check your internet connection speed and stability

**Service Issues:**
- Some services may delay webhook delivery
- Check service logs for webhook delivery status

**iOS Restrictions:**
- Background app refresh must be enabled
- Low Power Mode can delay notifications
- Do Not Disturb mode affects delivery timing

### Too Many Notifications

**Filter Events:**
- Disable notifications for less important events
- Use per-service settings to customize which events notify
- Set up quiet hours for periods when you don't want interruptions

**Group by Service:**
- Enable notification grouping in iOS settings
- This prevents notification spam from active services

## Best Practices

### Notification Strategy
- Start with essential notifications only (downloads, failures, requests)
- Gradually add more notification types as needed
- Use different sounds for different priority levels
- Set up quiet hours for sleep and work periods

### Service Optimization
- Configure services to only send webhooks for events you care about
- Regularly review and clean up notification settings
- Test notifications after service updates or configuration changes

### Privacy Considerations
- Notification content may be visible on lock screen
- Consider disabling lock screen previews for sensitive content
- Use Focus modes to control when notifications appear

## Advanced Features

### Notification Actions
Some notifications support quick actions:
- **Retry Failed Downloads**: Restart failed downloads directly from notification
- **View in App**: Jump directly to relevant section in OmniFetch
- **Mark as Read**: Dismiss notification without opening app

### Integration with Shortcuts
Create iOS Shortcuts that interact with OmniFetch notifications:
- Auto-respond to certain notification types
- Log notifications to external services
- Create custom notification workflows

### Cross-Device Sync
Notifications are synchronized across all your Apple devices:
- Mark as read on one device, cleared on all
- Notification settings sync via iCloud
- Service configurations available on all devices