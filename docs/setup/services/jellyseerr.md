# Jellyseerr Configuration

Jellyseerr manages media requests from users across your media stack. Unlike other services, Jellyseerr requires manual webhook configuration.

## Prerequisites

- Jellyseerr v1.0+ installed and running
- Access to Jellyseerr web interface
- OmniFetch app installed and configured

## Adding Jellyseerr to OmniFetch

### 1. Locate API Key

1. Open Jellyseerr web interface
2. Go to **Settings** → **General** → **API Key**
3. Copy the API key (you may need to generate one if none exists)

### 2. Add Service in OmniFetch

1. Open OmniFetch app
2. Tap **"Add Service"** → **Jellyseerr**
3. Enter service details:
   - **Name**: Choose a descriptive name (e.g., "Requests", "Main Jellyseerr", "User Requests")
   - **URL**: Your Jellyseerr URL
     - Remote: `https://requests.mydomain.com`
     - Local: `http://192.168.1.100:5055`
   - **API Key**: Paste the API key from step 1
4. Tap **"Test Connection"** to verify settings
5. Tap **"Save"** when the test passes

## Webhook Setup (Manual Required)

Jellyseerr requires manual webhook configuration - OmniFetch cannot create these automatically.

### 1. Get Webhook URL from OmniFetch

1. Open OmniFetch app
2. Go to **Settings** → **Notifications** → **Jellyseerr**
3. Copy your unique webhook URL for Jellyseerr

### 2. Configure Webhook in Jellyseerr

1. Open Jellyseerr web interface
2. Go to **Settings** → **Notifications**
3. Click **Add Notification Agent** → **Webhook**
4. Configure webhook settings:
   - **Agent Name**: `OmniFetch Push Notifications`
   - **Enable Agent**: Toggle ON
   - **Webhook URL**: Paste your OmniFetch webhook URL from step 1
   - **Authorization Header**: Leave blank (not required)
   - **JSON Payload**: Use default (OmniFetch handles Jellyseerr format)

### 3. Select Notification Types

Choose which events should trigger notifications:

**Recommended Events:**
- **Media Requested**: When users request new content
- **Media Approved**: When requests are approved by admins
- **Media Available**: When requested content becomes available
- **Media Declined**: When requests are declined
- **Media Failed**: When request processing fails

**Optional Events:**
- **Issues Created**: When users report issues
- **Issues Resolved**: When issues are fixed
- **Issues Reopened**: When issues are reopened
- **Issue Comments**: When comments are added to issues

### 4. Test Configuration

1. Click **Test** in the Jellyseerr webhook configuration
2. You should receive a push notification on your device
3. Click **Save** when test succeeds

## Supported Events

OmniFetch will send notifications for these Jellyseerr events:

### Request Events

- **Media Requested**: New content requested by users
- **Requests Approved**: Requests approved by administrators
- **Requests Declined**: Requests declined with reason
- **Media Available**: Requested content now available to watch
- **Request Processing Failed**: Technical issues with request processing

### Issue Management

- **Issues Created**: Users report problems with existing content
- **Issues Resolved**: Problems marked as fixed
- **Issues Reopened**: Previously resolved issues reopened
- **Comments Added**: Discussion activity on issues

### System Events

- **Test Notifications**: Webhook configuration testing

## Notification Examples

You'll receive clear, informative notifications like:

- **"User JohnDoe requested Spider-Man: No Way Home (2021)"**
- **"Request approved: The Batman (2022) - Added to Radarr queue"**
- **"Now available: Top Gun: Maverick (2022) ready to watch"**
- **"Request declined: Content not available in region"**
- **"Issue created: Audio sync problem in Avengers: Endgame"**

## Common Configuration Issues

### Connection Problems

**"Connection Failed" Error:**

- Verify Jellyseerr URL is correct and includes `http://` or `https://`
- Check that Jellyseerr is running and accessible
- Test the URL in a web browser from your device
- Ensure port number is included (usually 5055)

**"Unauthorized" Error:**

- Double-check API key is copied correctly
- Ensure no extra spaces when pasting API key
- Verify API key hasn't been regenerated in Jellyseerr
- Check that API key has proper permissions

### Webhook Issues

**Webhook Test Fails in Jellyseerr:**

- Ensure OmniFetch notification permissions are enabled
- Check that Jellyseerr server can reach the internet
- Verify webhook URL is copied correctly from OmniFetch
- Try regenerating webhook URL in OmniFetch settings

**No Notifications Received:**

- Check iOS Settings → Notifications → OmniFetch → Allow Notifications
- Ensure device has internet connection
- Verify webhook events are selected in Jellyseerr notification agent
- Test webhook configuration in Jellyseerr settings

### Permission Issues

**Users Can't Submit Requests:**

- Check user permissions in Jellyseerr
- Verify user accounts are properly configured
- Ensure request quotas aren't exceeded
- Check if auto-approval is configured correctly

## Advanced Configuration

### User Management

#### Request Quotas

Set appropriate limits for users:

- **Movie Quotas**: Limit monthly movie requests
- **TV Quotas**: Limit monthly TV series requests
- **Different Tiers**: Admin, Power User, Regular User
- **Reset Periods**: Monthly, weekly, or custom

#### Auto-Approval

Configure automatic approval for trusted users:

- **Admin Users**: Auto-approve all requests
- **Power Users**: Auto-approve with higher quotas
- **New Users**: Require manual approval initially

### Integration with Arr Stack

#### Radarr Integration

- **Multiple Instances**: Support 4K and 1080p Radarr
- **Quality Profiles**: Map request quality to profiles
- **Root Folders**: Configure storage locations
- **Tags**: Organize content by category

#### Sonarr Integration

- **Series Monitoring**: Full seasons vs latest only
- **Quality Profiles**: HD, 4K, or specific formats
- **Language Profiles**: Multi-language support
- **Anime Support**: Separate handling for anime series

### Notification Filtering

Customize which notifications you receive:

1. Go to OmniFetch → Settings → Notifications → Jellyseerr
2. **High Priority**: Media Requested, Available, Declined
3. **Medium Priority**: Issues Created, Approved
4. **Low Priority**: Comments, Issues Resolved
5. **Disable**: Test notifications after initial setup

### Multiple Jellyseerr Instances

For complex setups with multiple Jellyseerr instances:

1. Use descriptive names: "Main Requests", "4K Requests", "Family Requests"
2. Each instance requires separate webhook configuration
3. Configure different notification sounds for different instances
4. Consider different user bases for different instances

## Performance Tips

- Set reasonable refresh intervals (15-30 minutes)
- Use HTTPS connections when possible
- Keep Jellyseerr updated for security and features
- Regular database maintenance for performance
- Monitor disk space for request history

## Security Considerations

- Use strong passwords for admin accounts
- Enable two-factor authentication if available
- Regularly review user permissions
- Monitor request patterns for abuse
- Keep API keys secure and rotate periodically

## Next Steps

After configuring Jellyseerr, you might want to set up:

- [Sonarr Configuration](sonarr.md) - For TV show automation
- [Radarr Configuration](radarr.md) - For movie automation
- [Lidarr Configuration](lidarr.md) - For music automation
- [SABnzbd Configuration](sabnzbd.md) - For download management

## User Guide Integration

Consider creating user documentation for your Jellyseerr instance:

- How to request content
- Request status meanings
- Issue reporting process
- Available quality options
- Content availability timeframes