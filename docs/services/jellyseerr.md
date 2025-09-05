# Jellyseerr

Jellyseerr is a request management tool that allows users to request movies and TV shows for download.

## Configuration

### Basic Setup
1. **Add Service**: In OmniFetch, tap "Add Service" → "Jellyseerr"
2. **Service Details**:
   - **Name**: Give your Jellyseerr instance a descriptive name
   - **URL**: Your Jellyseerr web address
   - **API Key**: Found in Jellyseerr → Settings → General → API Key
3. **Test Connection**: Verify settings work correctly
4. **Save**: Store your configuration

### API Key Location
1. Open Jellyseerr web interface
2. Go to **Settings** → **General**
3. Find the **API Key** section
4. Copy the **API Key**

## Features

### Request Management
- **Pending Requests**: View requests awaiting approval
- **Request History**: Track approved and completed requests
- **User Requests**: See who requested what media
- **Approval Workflow**: Manage request approvals

### Manual Webhook Setup
Unlike other services, Jellyseerr requires manual webhook configuration:

1. **Get Webhook URL** from OmniFetch Settings → Notifications
2. **Configure in Jellyseerr**:
   - Settings → Notifications → Add Webhook
   - Enter your OmniFetch webhook URL
   - Select notification events
   - Test and save

### Webhook Events
- **Media Requested**: New requests submitted
- **Media Approved/Declined**: Request status changes
- **Media Available**: Requested content now available
- **Media Failed**: Request processing failed
- **Issues Created/Resolved**: Problem tracking
- **Issue Comments**: Discussion updates

## Troubleshooting

### Connection Issues
- Ensure Jellyseerr is running and accessible
- Verify API key is correct
- Check URL format and port

### Webhook Problems
- Manual webhook setup required (not automatic)
- Ensure webhook URL is correctly configured
- Test webhook from Jellyseerr interface
- Check that Jellyseerr can reach external URLs

## Tips

- Configure user permissions appropriately
- Set up approval workflows for quality control
- Monitor request queues regularly
- Use issue tracking for problem reports