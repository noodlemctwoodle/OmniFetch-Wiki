# CloudKit Sync

OmniFetch uses Apple's CloudKit to synchronise your service configurations, preferences,
and data across all your Apple devices seamlessly.

## Overview

CloudKit sync ensures that your OmniFetch setup is consistent across all your devices.
When enabled, your settings are automatically backed up to iCloud and synchronised
in real-time. Your data is encrypted and stored securely in your private
iCloud database.

<div class="hero-image-container">
  <a href="../../../assets/images/settings-icloud/settings-icloud-light.png" class="glightbox light-mode-only"
     data-gallery="CloudKit Sync" data-glightbox="title: CloudKit Sync Settings">
    <img src="../../../assets/images/settings-icloud/settings-icloud-light.png"
         alt="CloudKit Sync Settings Light Mode" class="hero-image">
  </a>
  <a href="../../../assets/images/settings-icloud/settings-icloud-dark.png" class="glightbox dark-mode-only"
     data-gallery="CloudKit Sync" data-glightbox="title: CloudKit Sync Settings">
    <img src="../../../assets/images/settings-icloud/settings-icloud-dark.png"
         alt="CloudKit Sync Settings Dark Mode" class="hero-image">
  </a>
</div>

## What Gets Synced

### Service Configurations

- **Service Details**: Names, URLs, and connection settings
- **Authentication**: API keys and credentials (encrypted)
- **Custom Settings**: Service-specific preferences and options
- **Connection Status**: Last known status and health information

## Setting Up CloudKit Sync

### Prerequisites

- **iCloud Account**: Must be signed in to iCloud on all devices
- **iCloud Drive**: Enable iCloud Drive in device settings
- **Same Apple ID**: All devices must use the same Apple ID
- **Network Access**: Devices need internet connection for syncing

### Initial Setup

!!! warning "Important: Enable During Onboarding"
    CloudKit sync must be enabled during the initial app onboarding process.
    Enabling sync during onboarding ensures all your configurations are backed up from the start.

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

### How Sync Works

CloudKit sync operates seamlessly with these key features:

- **Validated Configurations**: Only validated configurations sync across devices
- **Quick Updates**: New configurations sync within 5-10 minutes
- **Force Sync**: Pull down to force sync and refresh status
- **Auto-Restore**: Reinstalling automatically restores synced configurations

### Manual Sync

Force a manual sync when needed:

1. **Pull to Refresh**: Pull down on main service list
2. **Settings Sync**: Check sync status in CloudKit settings
3. **Re-launch App**: Close and reopen app to trigger sync
4. **Network Check**: Ensure stable internet connection

## Sync Status

### Status Dashboard

The iCloud Sync screen provides comprehensive status information:

- **iCloud Sync Toggle**: Blue cloud icon shows sync is active
- **Sync Status**: Green indicator confirms "All configurations synced to iCloud"
- **Total Configurations**: Displays count of all stored configurations
- **Syncing to iCloud**: Real-time count of items currently syncing
- **Last Sync**: Shows elapsed time since last sync (e.g., "Last synced in 0 seconds")

### Sync Details

The sync details section shows:

- **Configuration Count**: Total number of service configurations (e.g., "5")
- **Active Syncing**: Number of items currently uploading to iCloud
- **Sync Timing**: Automatic sync occurs within 5-10 minutes of changes
- **Force Refresh**: Pull down on any screen to trigger immediate sync

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

1. Go to OmniFetch Settings → tap five times on about
2. Tap "Factory Reset" (this will clear all synced data and all setting)
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
- Apple doesn't scan or analyse your OmniFetch content
- Data stays in your personal iCloud account

## Limitations

### CloudKit Limits

- **Storage**: Limited by your iCloud storage plan
- **Frequency**: Sync frequency limited by Apple's CloudKit quotas
- **Device Limit**: Works with devices signed into the same Apple ID
- **Network Required**: Cannot sync without internet connection

### Service Limitations

- **Local-Only Services**: Services only accessible on local network don't sync status
- **Real-Time Limits**: Not all changes sync instantly
- **Conflict Priority**: Recent changes generally take priority in conflicts

CloudKit sync makes OmniFetch a truly unified experience across all your Apple devices,
ensuring your media monitoring setup is always available and up to date wherever you are.
