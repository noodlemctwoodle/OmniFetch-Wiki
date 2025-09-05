# SABnzbd

SABnzbd is an open-source binary newsreader that makes downloading from Usenet easy.

## Configuration

### Basic Setup
1. **Add Service**: In OmniFetch, tap "Add Service" → "SABnzbd"
2. **Service Details**:
   - **Name**: Give your SABnzbd instance a descriptive name
   - **URL**: Your SABnzbd web address
   - **API Key**: Found in SABnzbd → Config → General → API Key
3. **Test Connection**: Verify settings work correctly
4. **Save**: Store your configuration

### API Key Location
1. Open SABnzbd web interface
2. Go to **Config** → **General**
3. Scroll to **Security** section
4. Copy the **API Key**

## Features

### Download Management
- **Queue Status**: Current download queue and progress
- **Download History**: Completed and failed downloads
- **Speed Control**: Monitor download speeds
- **Disk Space**: Available storage monitoring

### Manual Webhook Setup Required
SABnzbd doesn't have built-in webhook support, so it requires a notification script:

1. **Get Webhook Configuration** from OmniFetch
2. **Download Notification Script** from OmniFetch documentation
3. **Configure Script** with your webhook details
4. **Install Script** in SABnzbd scripts directory
5. **Enable in SABnzbd** Config → Notifications

### Webhook Events
- **Downloads Started/Completed**: Track download progress
- **Downloads Failed**: Error notifications
- **Queue Completed**: All downloads finished
- **Extraction Events**: File extraction status
- **Disk Space Warnings**: Storage alerts
- **System Events**: Pause/resume notifications

## Troubleshooting

### Connection Issues
- Ensure SABnzbd is running and accessible
- Verify API key is correct
- Check URL format and port
- Confirm web interface is enabled

### Webhook Script Issues
- Ensure script is in correct scripts directory
- Verify script has execute permissions (Linux/Mac)
- Check script configuration matches your webhook URL
- Test script from SABnzbd notifications settings

### Script Directory Locations
- **Linux/Mac**: `~/.sabnzbd/scripts/`
- **Windows**: `C:\Users\[user]\AppData\Local\sabnzbd\scripts\`

## Tips

- Configure download and complete folders properly
- Set appropriate disk space limits
- Use categories for organized downloads
- Monitor failed downloads for indexer issues
- Regular cleanup of completed downloads saves space