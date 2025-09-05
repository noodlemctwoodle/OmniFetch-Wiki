# SABnzbd Configuration

SABnzbd handles Usenet downloads and post-processing. Unlike other services, SABnzbd requires a notification script for webhook integration with OmniFetch.

## Prerequisites

- SABnzbd v3.0+ installed and running
- Access to SABnzbd web interface
- OmniFetch app installed and configured
- Access to SABnzbd server file system for script installation

## Adding SABnzbd to OmniFetch

### 1. Locate API Key

1. Open SABnzbd web interface
2. Go to **Config** → **General** → **Security** → **API Key**
3. Copy the API key (generate one if none exists)

### 2. Add Service in OmniFetch

1. Open OmniFetch app
2. Tap **"Add Service"** → **SABnzbd**
3. Enter service details:
   - **Name**: Choose a descriptive name (e.g., "Downloads", "Main SABnzbd", "Usenet")
   - **URL**: Your SABnzbd URL
     - Remote: `https://sabnzbd.mydomain.com`
     - Local: `http://192.168.1.100:8080`
   - **API Key**: Paste the API key from step 1
4. Tap **"Test Connection"** to verify settings
5. Tap **"Save"** when the test passes

## Webhook Setup (Script Required)

SABnzbd requires a notification script for webhook integration - this cannot be automated.

### 1. Get Notification Script

Download the SABnzbd notification script:

1. Open OmniFetch app
2. Go to **Settings** → **Notifications** → **SABnzbd**
3. Copy your unique webhook URL
4. Download the OmniFetch notification script template
5. Edit the script with your webhook details

### 2. Configure the Script

Edit the script file with your specific settings:

```python
#!/usr/bin/env python3
# OmniFetch SABnzbd Notification Script

import sys
import requests

# Your unique OmniFetch webhook URL
WEBHOOK_URL = "https://your-webhook-url-here"

# Script continues with SABnzbd integration...
```

### 3. Install the Script

Place the script in SABnzbd's scripts directory:

#### Linux/macOS
```bash
# Copy to SABnzbd scripts directory
cp omnifetch-notify.py ~/.sabnzbd/scripts/
chmod +x ~/.sabnzbd/scripts/omnifetch-notify.py
```

#### Windows
```
Copy to: C:\Users\[username]\AppData\Local\sabnzbd\scripts\
```

#### Docker/Unraid
```bash
# Mount scripts directory and copy
docker cp omnifetch-notify.py sabnzbd:/config/scripts/
docker exec sabnzbd chmod +x /config/scripts/omnifetch-notify.py
```

### 4. Configure SABnzbd Notifications

1. Open SABnzbd web interface
2. Go to **Config** → **Notifications**
3. Enable **Script** notifications
4. Configure script settings:
   - **Script**: Select `omnifetch-notify.py` from dropdown
   - **Parameters**: Leave blank (script handles parameters)
   - **Enable script for**: Choose events to monitor

### 5. Test the Setup

1. In SABnzbd notifications, click **Test Notification Script**
2. You should receive a push notification on your device
3. Check SABnzbd logs for any script errors

## Supported Events

OmniFetch will send notifications for these SABnzbd events:

### Download Events

- **Download Started**: When a new download begins
- **Download Completed**: When a download finishes successfully
- **Download Failed**: When a download encounters errors
- **Queue Completed**: When the entire queue finishes
- **Download Paused**: When downloads are manually paused
- **Download Resumed**: When paused downloads resume

### Post-Processing Events

- **Extraction Started**: When archive extraction begins
- **Extraction Completed**: When archives are successfully extracted
- **Extraction Failed**: When extraction encounters errors
- **Post-Processing Completed**: When all post-processing finishes

### System Events

- **Disk Space Warning**: When storage space runs low
- **Speed Limit Changes**: When bandwidth limits are modified
- **Server Connection Issues**: When Usenet server problems occur
- **Repair Operations**: When PAR2 repair operations run

## Notification Examples

You'll receive clear, informative notifications like:

- **"Big.Movie.2024.1080p.BluRay.x264.mkv - Download started (8.5 GB)"**
- **"TV.Show.S05E10.720p.WEB-DL - Download completed in 45 minutes"**
- **"Download failed: The.Batman.2022.2160p.BluRay - Incomplete download"**
- **"Queue completed: 3 downloads finished, 12.4 GB total"**
- **"Disk space warning: Less than 5GB remaining"**
- **"Extraction failed: Password required for archive"**

## Common Configuration Issues

### Script Installation Problems

**Script Not Appearing in Dropdown:**

- Check script file permissions (must be executable on Linux/macOS)
- Verify script is in correct SABnzbd scripts directory
- Restart SABnzbd service after adding script
- Check SABnzbd logs for script loading errors

**Script Execution Fails:**

- Verify Python 3 is installed and accessible
- Check script file encoding (should be UTF-8)
- Ensure webhook URL is correctly configured in script
- Test script manually from command line

### Connection Problems

**"Connection Failed" Error:**

- Verify SABnzbd URL is correct and includes `http://` or `https://`
- Check that SABnzbd is running and accessible
- Test the URL in a web browser from your device
- Ensure port number is included (usually 8080)

**"Unauthorized" Error:**

- Double-check API key is copied correctly
- Ensure no extra spaces when pasting API key
- Verify API key hasn't been regenerated in SABnzbd
- Check that API authentication is properly configured

### Notification Issues

**No Notifications Received:**

- Check iOS Settings → Notifications → OmniFetch → Allow Notifications
- Ensure device has internet connection
- Verify script notifications are enabled in SABnzbd
- Test webhook URL directly to confirm it's working
- Check SABnzbd logs for script execution errors

**Partial Notifications:**

- Review which events are enabled in SABnzbd script configuration
- Check script logic for event handling
- Verify webhook URL permissions and rate limits
- Monitor SABnzbd logs during download events

## Advanced Configuration

### Script Customization

#### Event Filtering

Modify the script to handle only specific events:

```python
# Only notify for important events
IMPORTANT_EVENTS = ['complete', 'failed', 'warning']

if event_type not in IMPORTANT_EVENTS:
    sys.exit(0)  # Skip notification
```

#### Custom Message Formatting

Personalize notification messages:

```python
# Custom message templates
MESSAGES = {
    'complete': f"✅ {filename} downloaded successfully ({size})",
    'failed': f"❌ {filename} download failed: {status}",
    'warning': f"⚠️ System warning: {message}"
}
```

### Multiple SABnzbd Instances

For complex setups with multiple SABnzbd instances:

1. Use descriptive names: "Main Downloads", "4K Downloads", "TV Downloads"
2. Each instance requires separate script installation
3. Use different webhook URLs for different instances
4. Configure different notification priorities

### Performance Optimization

#### Download Categories

Configure SABnzbd categories for better organization:

- **Movies**: Movie downloads with specific post-processing
- **TV**: TV show downloads with season/episode organization
- **Music**: Audio files with different handling
- **Software**: Non-media downloads

#### Post-Processing Scripts

Integrate OmniFetch notifications with existing post-processing:

```python
# Chain with other scripts
import subprocess

# Run existing post-processing
subprocess.run(['/path/to/existing/script.py'] + sys.argv[1:])

# Then send OmniFetch notification
send_omnifetch_notification(...)
```

### Storage Management

#### Disk Space Monitoring

Configure alerts for storage issues:

- **Warning Threshold**: 10GB remaining
- **Critical Threshold**: 5GB remaining
- **Cleanup Actions**: Automatic old file removal
- **Archive Management**: Move completed downloads

#### Download Prioritization

Set up intelligent download management:

- **High Priority**: New episode releases
- **Normal Priority**: Regular movie downloads
- **Low Priority**: Archive/backlog downloads
- **Bandwidth Scheduling**: Peak vs off-peak hours

## Security Considerations

- Keep scripts updated with security patches
- Use HTTPS for SABnzbd web interface when possible
- Secure API keys and webhook URLs
- Regular monitoring of script execution logs
- Firewall configuration for external access

## Troubleshooting Script Issues

### Common Script Errors

**ImportError: No module named 'requests':**

```bash
# Install required Python module
pip3 install requests
```

**Permission Denied:**

```bash
# Fix script permissions
chmod +x /path/to/omnifetch-notify.py
```

**Webhook URL Not Working:**

1. Test webhook URL in browser or curl
2. Check OmniFetch app connectivity
3. Verify webhook URL hasn't expired
4. Regenerate webhook URL if needed

### Debugging Script Execution

Add logging to the notification script:

```python
import logging

logging.basicConfig(
    filename='/var/log/omnifetch-sabnzbd.log',
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

logging.info(f"Notification triggered: {sys.argv}")
```

## Next Steps

After configuring SABnzbd, you might want to set up:

- [Sonarr Configuration](sonarr.md) - For TV show automation
- [Radarr Configuration](radarr.md) - For movie automation  
- [Lidarr Configuration](lidarr.md) - For music automation
- [Jellyseerr Configuration](jellyseerr.md) - For user requests

## Integration Tips

### With Arr Services

- Configure SABnzbd as download client in Sonarr/Radarr/Lidarr
- Use consistent category naming across services
- Set appropriate completion handling in Arr services
- Monitor download client connectivity in Arr service health checks

### With Media Servers

- Configure post-processing to update media libraries
- Set proper file permissions for media server access  
- Use appropriate folder structures for automated imports
- Consider hardlink vs copy operations for disk space efficiency