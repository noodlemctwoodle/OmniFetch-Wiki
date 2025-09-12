# CloudKit Sync

OmniFetch uses Apple's CloudKit to synchronize your service configurations, preferences,
and data across all your Apple devices seamlessly.

## Overview

CloudKit sync ensures that your OmniFetch setup is consistent across all your devices.
When you add a new service on your iPhone, it automatically appears on your iPad,
Apple TV, and Mac. All your preferences, notification settings, and service
configurations stay in sync.

## What Gets Synced

### Service Configurations

- **Service Details**: Names, URLs, and connection settings
- **Authentication**: API keys and credentials (encrypted)
- **Custom Settings**: Service-specific preferences and options
- **Connection Status**: Last known status and health information

### App Preferences

- **Notification Settings**: Push notification preferences per service
- **Display Options**: Theme, layout, and interface preferences
- **Widget Configuration**: Home screen widget settings and data sources
- **Refresh Intervals**: How often to check services for updates

### User Data

- **Favorites**: Starred or bookmarked content
- **History**: Recently viewed items and search history
- **Custom Lists**: User-created collections and watchlists
- **Usage Analytics**: App usage patterns for personalization (optional)

## Setting Up CloudKit Sync

### Prerequisites

- **iCloud Account**: Must be signed in to iCloud on all devices
- **iCloud Drive**: Enable iCloud Drive in device settings
- **Same Apple ID**: All devices must use the same Apple ID
- **Network Access**: Devices need internet connection for syncing

### Initial Setup

1. **Enable iCloud**: Ensure you're signed in to iCloud in iOS Settings
2. **First Device Setup**: Configure OmniFetch completely on your primary device
3. **Install on Additional Devices**: Download OmniFetch on other devices
4. **Automatic Sync**: Data will sync automatically when you open the app

### Verification

To verify sync is working:

1. **Add Test Service**: Add a new service on one device
2. **Check Other Devices**: Open OmniFetch on other devices after a few minutes
3. **Confirm Sync**: The new service should appear automatically
4. **Test Changes**: Modify settings on one device and check others

## Sync Process

### Automatic Syncing

CloudKit sync happens automatically in the background:

- **Real-Time**: Changes sync within seconds when devices are online
- **Background Sync**: Updates download when app is backgrounded
- **Launch Sync**: Full sync check when opening the app
- **Conflict Resolution**: Automatic handling of conflicting changes

### Manual Sync

Force a manual sync when needed:

1. **Pull to Refresh**: Pull down on main service list
2. **Settings Sync**: Check sync status in CloudKit settings
3. **Re-launch App**: Close and reopen app to trigger sync
4. **Network Check**: Ensure stable internet connection

## Sync Status

### Indicators

OmniFetch shows sync status in several ways:

- **Cloud Icons**: Indicate sync status next to services
- **Loading Indicators**: Show when sync is in progress  
- **Error Badges**: Alert to sync problems or conflicts
- **Status Messages**: Detailed sync information in settings

### Status Types

**Synced**: Service is up to date across all devices
**Syncing**: Currently uploading or downloading changes
**Error**: Sync failed - requires attention
**Paused**: Sync temporarily disabled or offline

## Troubleshooting Sync Issues

### Common Problems

**Services Not Syncing:**

- Verify iCloud is enabled and signed in on all devices
- Check internet connection on affected devices
- Ensure devices are using the same Apple ID
- Try signing out and back in to iCloud

**Sync Conflicts:**

- OmniFetch automatically resolves most conflicts
- Manual resolution may be required for major differences
- Check sync status in settings for conflict details
- Clear local data and re-sync if problems persist

**Slow Syncing:**

- Poor internet connection can delay sync
- iCloud service outages may affect sync speed
- Background App Refresh must be enabled
- Close and reopen app to refresh sync process

### Advanced Troubleshooting

**Reset CloudKit Data:**

1. Go to OmniFetch Settings → CloudKit Sync
2. Tap "Reset CloudKit Data" (this will clear all synced data)
3. Confirm the reset action
4. Reconfigure services from scratch
5. Data will sync to other devices automatically

**Check iCloud Status:**

- iOS Settings → [Your Name] → iCloud
- Verify iCloud Drive is enabled
- Check available iCloud storage space
- Review which apps can use iCloud

## Privacy & Security

### Data Encryption

- All synced data is encrypted in transit and at rest
- API keys and passwords are encrypted with additional security
- Apple cannot access your personal OmniFetch data
- Local device encryption provides additional security layer

### Data Control

- **Your Data**: All data remains under your control
- **No Sharing**: Data is never shared with third parties
- **Local Fallback**: App works fully even without CloudKit
- **Delete Anytime**: You can disable sync and delete cloud data anytime

### Apple's Privacy

CloudKit sync follows Apple's strict privacy guidelines:

- End-to-end encryption for sensitive data
- No ads or tracking based on your data
- Apple doesn't scan or analyze your OmniFetch content
- Data stays in your personal iCloud account

## Managing Sync

### Sync Settings

Control how CloudKit sync behaves:

- **Auto-Sync**: Enable/disable automatic syncing
- **Sync on Cellular**: Allow syncing over cellular data
- **Sync Frequency**: Control how often to check for updates
- **Conflict Resolution**: Choose how to handle sync conflicts

### Storage Management

Monitor and manage your CloudKit usage:

- **Storage Used**: View how much iCloud space OmniFetch uses
- **Cleanup Options**: Remove old or unnecessary synced data
- **Selective Sync**: Choose which data types to sync
- **Local Cache**: Manage locally cached data from other devices

## Best Practices

### Optimal Sync Experience

- **Stable Network**: Use Wi-Fi for initial sync of large configurations
- **Regular Updates**: Keep OmniFetch updated on all devices
- **Consistent Usage**: Regular app usage helps maintain sync accuracy
- **Backup Important Data**: Export critical configurations as backup

### Multi-Device Workflow

- **Primary Device**: Designate one device for major configuration changes
- **Consistent Timing**: Make changes when other devices can sync quickly
- **Verify Changes**: Check that important changes sync to all devices
- **Avoid Conflicts**: Don't make simultaneous changes on multiple devices

### Performance Tips

- **Background Refresh**: Enable Background App Refresh for best sync performance
- **Good Storage**: Maintain adequate free space on all devices
- **Network Quality**: Stable internet improves sync reliability
- **iOS Updates**: Keep iOS updated for latest CloudKit improvements

## Limitations

### CloudKit Limits

- **Storage**: Limited by your iCloud storage plan
- **Frequency**: Sync frequency limited by Apple's CloudKit quotas
- **Device Limit**: Works with devices signed into the same Apple ID
- **Network Required**: Cannot sync without internet connection

### Service Limitations

- **Local-Only Services**: Services only accessible on local network don't sync status
- **Large Data**: Very large datasets may sync slowly
- **Real-Time Limits**: Not all changes sync instantly
- **Conflict Priority**: Recent changes generally take priority in conflicts

CloudKit sync makes OmniFetch a truly unified experience across all your Apple devices,
ensuring your media monitoring setup is always available and up to date wherever you are.
