# Initial Setup

Complete guide for first-time OmniFetch app configuration.

## First Launch

When you first open OmniFetch, you'll go through an initial setup process.

### 1. Welcome Screen

- Tap **Get Started** to begin setup
- Review app capabilities and features
- Accept terms of service if prompted

### 2. Grant Required Permissions

OmniFetch requires several permissions to function properly:

#### Notifications

- **Purpose**: Receive push notifications for service events
- **Required**: Yes, for webhook notifications
- **Action**: Tap "Allow" when prompted

#### Background App Refresh

- **Purpose**: Keep service data updated in background
- **Required**: Recommended for real-time monitoring
- **Action**: Enable in iOS Settings if prompted

#### iCloud Access

- **Purpose**: Sync configurations across devices
- **Required**: Optional but recommended
- **Action**: Allow access for CloudKit sync

### 3. Initial Configuration

After permissions are granted:

1. **Choose Setup Mode:**
   - Quick Setup - Add your first service immediately
   - Manual Setup - Configure app settings first
   - Import Configuration - Restore from backup (if available)

2. **Set Basic Preferences:**
   - Display name for your setup
   - Default refresh intervals
   - Notification preferences

## Adding Your First Service

### Quick Add Process

1. Tap **Add Service** from the main screen
2. Choose your service type:
   - Sonarr (TV Shows)
   - Radarr (Movies)
   - Lidarr (Music)
   - Jellyseerr (Requests)
   - SABnzbd (Downloads)

3. Enter service details:
   - **Name**: Descriptive name for the service
   - **URL**: Service address (local or remote)
   - **API Key**: From service settings

4. Test and save the connection

### Connection Testing

OmniFetch automatically tests:

- Network connectivity
- API key validity
- Service version compatibility
- Available endpoints

## Beta Access Setup

If you have beta access:

### 1. Enable Beta Features

1. Go to **Settings** → **Notification Settings** → **Push Notifications**
2. Enter your **Private Beta Key**
3. Tap **Save** to activate beta features

### 2. Verify Beta Status

- Check for "Beta" badge in settings
- Webhook notifications become available
- Additional debug options appear

## Post-Setup Checklist

After initial setup, verify:

- [ ] Notifications are working (test from settings)
- [ ] At least one service is configured
- [ ] Service shows green status indicator
- [ ] CloudKit sync is enabled (if desired)
- [ ] Background refresh is enabled
- [ ] Beta key is saved (if applicable)

## Next Steps

- [Configure additional services](../../services/index.md)
- [Set up widgets](../../features/widgets.md)
- [Configure notifications](notifications.md)
- [Enable CloudKit sync](../../features/cloudkit-sync.md)
