# Sonarr Webhook Notifications

Configure push notifications for Sonarr events using webhooks (private beta feature).

## Overview

Webhook notifications provide real-time push notifications when events occur in Sonarr. This feature requires beta access.

## Prerequisites

- OmniFetch app with Sonarr configured
- Private beta key from support
- iOS push notifications enabled

## Setup Process

### Step 1: Enable Beta Access

1. Open OmniFetch
2. Go to **Settings** → **Notification Settings** → **Push Notifications**
3. Enter your **Private Beta Key** in the designated field
4. Tap **Save** - look for green confirmation
5. Beta features are now activated
6. Enable the button to on

<div class="hero-image-container">
  <a href="/OmniFetch-Wiki/assets/images/app/settings/notifications-push/settings-push-sonarr-light.png" class="glightbox light-mode-only"
     data-gallery="Sonarr Push Notifications" data-glightbox="title: Sonarr Push Notifications">
    <img src="/OmniFetch-Wiki/assets/images/app/settings/notifications-push/settings-push-sonarr-light.png"
         alt="Sonarr Push Notifications Light Mode" class="hero-image">
  </a>
  <a href="/OmniFetch-Wiki/assets/images/app/settings/notifications-push/settings-push-sonarr-dark.png" class="glightbox dark-mode-only"
     data-gallery="Sonarr Push Notifications" data-glightbox="title: Sonarr Push Notifications">
    <img src="/OmniFetch-Wiki/assets/images/app/settings/notifications-push/settings-push-sonarr-dark.png"
         alt="Sonarr Push Notifications Dark Mode" class="hero-image">
  </a>
</div>

### Step 2: Automatic Webhook Configuration

Once beta access is enabled:

1. **Add or Update Sonarr:**
   - If adding new: Complete normal setup process
   - If existing: Edit and re-save the service

2. **Automatic Process:**
   - OmniFetch registers your device for push notifications
   - Creates webhook connection in Sonarr
   - Configures all supported events
   - No manual configuration needed

### Step 3: Verify Webhook Creation

1. Open Sonarr web interface
2. Navigate to **Settings** → **Connect** → **Connections**
3. Look for **"OmniFetch"** connection
4. Verify it shows as enabled

### Step 4: Test Notifications

1. In Sonarr connections, find OmniFetch
2. Click **Test** button
3. You should receive a push notification
4. If successful, setup is complete

## Supported Events

### Core Events

#### Download/Import Completed

- **Event**: Episode successfully downloaded and imported
- **Includes**: Quality upgrades
- **Notification**: "Show Name S01E01 downloaded successfully"

#### Media Grabbed

- **Event**: Episode grabbed from indexer
- **Notification**: "Show Name S01E01 grabbed from IndexerName"

#### Test Notification

- **Event**: Manual test from Sonarr
- **Notification**: "Test notification from Sonarr"

### File Management Events

#### Files Renamed

- **Event**: Episode files renamed/organised
- **Notification**: "3 episodes renamed in Show Name"

#### Episode Deleted

- **Event**: Episode file deleted from disk
- **Notification**: "Show Name S01E01 deleted"

### Library Events

#### Series Deleted

- **Event**: TV series removed from Sonarr
- **Notification**: "Show Name removed from library"

### System Events

#### Health Issues

- **Event**: Sonarr detects system problems
- **Priority**: High
- **Examples**:
  - "Unable to connect to download client"
  - "Indexer unavailable"
  - "Root folder missing"

#### Application Updates

- **Event**: Sonarr update available
- **Notification**: "Sonarr update available: v3.0.9"

## Notification Management

### Configure Event Types

1. In OmniFetch, go to Sonarr settings
2. Tap **Notification Settings**
3. Toggle individual events on/off
4. Save preferences

### Recommended Settings

**Essential Notifications:**

- ✅ Download/Import Completed
- ✅ Health Issues
- ✅ Download Failed

**Optional Notifications:**

- ⚪ Media Grabbed
- ⚪ Files Renamed
- ⚪ Quality Upgraded

**Avoid Overload:**

- ❌ Test notifications (after initial test)
- ❌ Verbose file operations

### Notification Sounds

Configure custom sounds:

1. iOS Settings → Notifications → OmniFetch
2. Choose notification sound
3. Or set per-service sounds in app

## Troubleshooting

### No Webhook in Sonarr

**Issue**: OmniFetch connection not appearing in Sonarr

**Solutions:**

1. Verify beta key is saved
2. Edit and re-save Sonarr in OmniFetch
3. Check Sonarr API permissions
4. Restart Sonarr service

### Test Fails

**Issue**: Test notification doesn't arrive

**Check:**

- iOS notification permissions
- Beta key validity
- Internet connectivity
- Sonarr can reach webhook server

### Duplicate Notifications

**Issue**: Receiving multiple notifications for same event

**Fix:**

1. Remove any manual webhook configurations
2. Ensure only one OmniFetch connection exists
3. Disable Sonarr's built-in notifications

### 403 Forbidden Error

**Issue**: Webhook returns authentication error

**Solutions:**

- Re-enter beta key in OmniFetch
- Generate new webhook (if using manual setup)
- Contact support for key verification

## Advanced Configuration

### Performance Optimization

## Debug Information

For troubleshooting:
1. Go to **Settings** → **Developer**
2. Enable **Debug Logging**
3. Check webhook status and errors
4. Share logs with support if needed

## Beta Limitations

Current beta limitations:

- Webhook URL changes require reconfiguration
- Some events may have delays
- Rate limiting during high activity
- Beta key required for all features

## FAQ

**Q: Do I need to configure anything in Sonarr?**
A: No, OmniFetch handles everything automatically once beta key is entered.

**Q: Can I customise the webhook URL?**
A: No, the webhook URL is managed by OmniFetch.

**Q: Will webhooks work without beta key?**
A: No, webhook notifications require beta access.

**Q: How do I disable webhooks?**
A: Remove beta key or disable notifications in settings.
