# Sonarr

Sonarr is a PVR for Usenet and BitTorrent users that monitors TV series and automatically downloads new episodes.

## Configuration

### Basic Setup
1. **Add Service**: In OmniFetch, tap "Add Service" → "Sonarr"
2. **Service Details**:
   - **Name**: Give your Sonarr instance a descriptive name
   - **URL**: Your Sonarr web address (e.g., `https://sonarr.yourdomain.com`)
   - **API Key**: Found in Sonarr → Settings → General → API Key
3. **Test Connection**: Verify settings work correctly
4. **Save**: Store your configuration

### API Key Location
1. Open Sonarr web interface
2. Go to **Settings** → **General**
3. Scroll to **Security** section
4. Copy the **API Key**

## Features

### Monitoring
- **Series Overview**: View all monitored TV series
- **Queue Status**: Current download queue and progress
- **Calendar**: Upcoming episodes and air dates
- **Missing Episodes**: Episodes that should be available but aren't

### Notifications
OmniFetch supports automatic webhook setup for Sonarr:
- Download completed notifications
- Episode grabbed alerts
- Health issue warnings
- Series management updates

### Webhook Events
- **Download/Import**: Episodes completed downloading
- **Grab**: Episodes grabbed from indexers
- **Rename**: Files renamed or reorganized
- **Series Delete**: TV series removed from library
- **Health Issues**: System health warnings
- **Application Updates**: Sonarr version updates

## Troubleshooting

### Connection Issues
- Ensure Sonarr is running and accessible
- Verify API key is correct and not expired
- Check URL includes `http://` or `https://`
- Confirm port number if not standard

### Webhook Problems
- Check that webhooks are enabled in Sonarr
- Verify OmniFetch webhook appears in Settings → Connect
- Test webhook connection from Sonarr interface
- Ensure Sonarr can reach external URLs

## Tips

- Use descriptive names when configuring your Sonarr instance
- Enable quality profiles that match your preferences
- Configure download clients properly for best results
- Regularly check health warnings for system issues