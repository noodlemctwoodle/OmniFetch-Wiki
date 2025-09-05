# Radarr

Radarr is a movie collection manager for Usenet and BitTorrent users that automatically downloads movies.

## Configuration

### Basic Setup
1. **Add Service**: In OmniFetch, tap "Add Service" → "Radarr"
2. **Service Details**:
   - **Name**: Give your Radarr instance a descriptive name
   - **URL**: Your Radarr web address (e.g., `https://radarr.yourdomain.com`)
   - **API Key**: Found in Radarr → Settings → General → API Key
3. **Test Connection**: Verify settings work correctly
4. **Save**: Store your configuration

### API Key Location
1. Open Radarr web interface
2. Go to **Settings** → **General**
3. Scroll to **Security** section
4. Copy the **API Key**

## Features

### Monitoring
- **Movie Collection**: View all monitored movies
- **Queue Status**: Current download queue and progress
- **Calendar**: Movie release dates and availability
- **Missing Movies**: Movies that should be available but aren't

### Notifications
OmniFetch supports automatic webhook setup for Radarr:
- Download completed notifications
- Movie grabbed alerts
- Health issue warnings
- Collection management updates

### Webhook Events
- **Download/Import**: Movies completed downloading
- **Grab**: Movies grabbed from indexers
- **Movie Added/Deleted**: Collection changes
- **Rename**: Files renamed or reorganized
- **Health Issues**: System health warnings
- **Manual Interaction**: User action required

## Troubleshooting

### Connection Issues
- Ensure Radarr is running and accessible
- Verify API key is correct and not expired
- Check URL includes `http://` or `https://`
- Confirm port number if not standard

### Webhook Problems
- Check that webhooks are enabled in Radarr
- Verify OmniFetch webhook appears in Settings → Connect
- Test webhook connection from Radarr interface
- Ensure Radarr can reach external URLs

## Tips

- Use quality profiles that match your storage capacity
- Configure custom formats for advanced quality control
- Set up proper folder structure for organization
- Monitor disk space for large movie files