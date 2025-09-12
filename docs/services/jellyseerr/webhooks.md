# Jellyseerr Webhook Notifications (Private Beta)

Configure push notifications for Jellyseerr events using webhooks (beta feature).

## Overview

Webhook notifications provide real-time push notifications when request events occur in Jellyseerr. This feature requires beta access and manual webhook configuration.

> **Note**: The webhook setup process has been streamlined. OmniFetch now automatically generates and stores your webhook URL when you enable Jellyseerr notifications, making it easy to retrieve later from the Notification Debug screen.

## Prerequisites

- OmniFetch app with Jellyseerr configured
- Private beta key from support
- iOS push notifications enabled
- Admin access to Jellyseerr

## Setup Process

### Step 1: Enable Beta Access

1. Open OmniFetch
2. Go to **Settings** → **Notification Settings** → **Push Notifications**
3. Enter your **Private Beta Key** in the designated field
4. Tap **Save** - look for green confirmation
5. Beta features are now activated
6. Enable the button to on

<div class="hero-image-container">
  <a href="../../assets/images/app/discover/settings-push-jellyseerr-light.png" class="glightbox light-mode-only"
     data-gallery="Jellyseerr Push Notifications" data-glightbox="title: Jellyseerr Push Notifications">
    <img src="../../assets/images/app/discover/settings-push-jellyseerr-dark.png"
         alt="Jellyseerr Push Notifications Light Mode" class="hero-image">
  </a>
  <a href="../../assets/images/app/settings/notifications-push/settings-push-jellyseerr-dark.png" class="glightbox dark-mode-only"
     data-gallery="Jellyseerr Push Notifications" data-glightbox="title: Jellyseerr Push Notifications">
    <img src="../../assets/images/app/discover/settings-push-jellyseerr-light.png"
         alt="Jellyseerr Push Notifications Dark Mode" class="hero-image">
  </a>
</div>

### Step 2: Enable Jellyseerr Notifications

1. In OmniFetch, go to **Settings** → **Notification Settings**
2. Find **Jellyseerr** in the service list
3. Toggle the switch to **ON**
4. The webhook URL will be automatically generated

### Step 3: Retrieve Webhook URL

1. Go to **Settings** → Tap **About OmniFetch** 5x → **Notification Debug**
2. Scroll to **Webhook URLs** section
3. Find your **Jellyseerr Webhook URL**
4. Tap **Copy** to copy the URL to clipboard
5. Keep this URL for the next step

### Step 4: Configure Webhook in Jellyseerr

1. Open Jellyseerr web interface
2. Navigate to **Settings** → **Notifications**  →  **Webhook**
3. Check **Enable Agent**

#### Webhook Configuration

**Name**: `OmniFetch`

**Webhook URL**:

- Paste the URL you copied from OmniFetch Notification Debug
- Format will be: `https://[worker-domain]/push/[your-unique-identifier]`

**Authorization Header**:

```text
Basic [base64-encoded-credentials]
```

The authorization credentials are:

- Username: `omnifetch-beta`
- Password: Your beta key (provided separately)

To create the authorization header:

1. Combine username and password with a colon: `omnifetch-beta:YOUR_BETA_KEY`
2. Base64 encode this string
3. Add "Basic " prefix to the encoded string

Example format:

```text
Basic b21uaWZldGNoLWJldGE6WU9VUl9CRVRBX0tFWQ==
```

**JSON Payload**: Use the default Jellyseerr webhook payload

### Step 5: Configure Events

Enable these notification triggers:

**Essential Events:**

- ✅ Media Requested
- ✅ Media Auto-Approved  
- ✅ Media Approved
- ✅ Media Declined
- ✅ Media Available
- ✅ Media Failed

**Optional Events:**

- ⚪ Issue Reported
- ⚪ Issue Resolved
- ⚪ Issue Reopened

### Step 6: Test Webhook

1. In Jellyseerr webhook settings
2. Click **Test** button next to the OmniFetch webhook
3. You should receive a push notification
4. If successful, setup is complete

## Supported Events

### Request Events

#### Media Requested

- **Event**: New content request submitted
- **Notification**: "New request: Movie/Show Name by Username"

#### Media Auto-Approved

- **Event**: Request automatically approved
- **Notification**: "Auto-approved: Movie/Show Name"

#### Media Approved

- **Event**: Admin manually approved request
- **Notification**: "Approved: Movie/Show Name"

#### Media Declined

- **Event**: Admin declined request
- **Notification**: "Declined: Movie/Show Name - Reason"

#### Media Available

- **Event**: Requested content is now available
- **Notification**: "Available: Movie/Show Name ready to watch"

#### Media Failed

- **Event**: Download/processing failed
- **Notification**: "Failed: Movie/Show Name download failed"

### Issue Events

#### Issue Reported

- **Event**: User reports issue with content
- **Notification**: "Issue reported: Movie/Show Name"

#### Issue Resolved

- **Event**: Admin resolves reported issue
- **Notification**: "Issue resolved: Movie/Show Name"

#### Issue Reopened

- **Event**: Resolved issue reopened
- **Notification**: "Issue reopened: Movie/Show Name"

## Notification Management

### Configure Event Types

1. In OmniFetch, go to Jellyseerr settings
2. Tap **Notification Settings**
3. Toggle individual events on/off
4. Save preferences

### Recommended Settings

**For Administrators:**

- ✅ Media Requested (new requests)
- ✅ Issue Reported (user issues)
- ✅ Media Failed (processing failures)

**For Users:**

- ✅ Media Approved (your requests approved)
- ✅ Media Available (ready to watch)
- ✅ Media Declined (with reasons)

### Notification Sounds

Configure custom sounds:

1. iOS Settings → Notifications → OmniFetch
2. Choose notification sound
3. Or set Jellyseerr-specific sounds in app

## Troubleshooting

### Webhook Not Working

**Issue**: No notifications received from Jellyseerr

**Check:**

1. Webhook URL is correct with your unique ID
2. Authorization header includes correct beta password
3. Webhook is enabled in Jellyseerr
4. Test webhook returns successful response

### 403 Forbidden Error

**Issue**: Webhook returns authentication error

**Solutions:**

- Verify beta password in authorization header
- Re-generate webhook ID in OmniFetch
- Contact support for beta password verification

### Duplicate Notifications

**Issue**: Receiving multiple notifications for same event

**Fix:**

1. Ensure only one OmniFetch webhook exists
2. Check for duplicate notification rules
3. Disable any other webhook integrations

### Test Notification Fails

**Issue**: Test webhook doesn't send notification

**Check:**

- Beta key is valid and saved in OmniFetch
- Webhook URL format is correct
- Authorization header is properly formatted
- Jellyseerr can reach external webhook server

## Advanced Configuration

### Custom Payload Templates

You can customise the JSON payload sent to OmniFetch:

```json
{
  "notification_type": "{{notification_type}}",
  "subject": "{{subject}}",
  "message": "{{message}}",
  "image": "{{image}}",
  "requestedBy": "{{requestedBy}}",
  "extra": {
    "media_type": "{{media_type}}",
    "tmdbId": "{{tmdbId}}"
  }
}
```

### Rate Limiting

Webhooks are subject to rate limits:

- Maximum 100 notifications per hour
- Burst limit of 10 per minute
- Failed webhooks retry with backoff

## Debug Information

For troubleshooting:

1. **OmniFetch Logs:**
   - Go to **Settings** → **Developer**
   - Enable **Debug Logging**
   - Check webhook reception logs

2. **Jellyseerr Logs:**
   - Check Jellyseerr logs for webhook send attempts
   - Look for HTTP response codes
   - Verify payload formatting

3. **Network Testing:**
   - Test webhook URL accessibility
   - Verify DNS resolution
   - Check firewall rules

## Beta Limitations

Current beta limitations:

- Manual webhook configuration required
- Single webhook URL format
- Limited to specific event types
- Beta password required for authentication

## FAQ

**Q: Why isn't webhook configuration automatic like other services?**
A: Jellyseerr requires manual webhook setup due to its notification system architecture.

**Q: Does OmniFetch support multiple Jellyseerr instances?**
A: Currently, OmniFetch supports one Jellyseerr instance per configuration. Multiple instance support is planned for future releases.

**Q: What happens if my beta password changes?**
A: Update the authorization header in all Jellyseerr webhook configurations.

**Q: How do I disable webhooks?**
A: Remove the OmniFetch webhook from Jellyseerr notification settings or disable it.
