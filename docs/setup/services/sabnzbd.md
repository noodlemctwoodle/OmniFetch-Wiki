# SABnzbd Configuration

SABnzbd handles Usenet downloads and post-processing. OmniFetch can monitor SABnzbd activity, and with a beta key, receive push notifications for events.

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

## Webhook Notifications (Beta)

SABnzbd requires a Python notification script to send webhooks since it doesn't have native webhook support. This feature is currently in beta testing.

### Prerequisites

- Beta password (contact support for access)
- OmniFetch app installed with SABnzbd service added
- Access to SABnzbd server file system for script installation
- Python 3 installed on your SABnzbd server

### Step 1: Configure Beta Access in OmniFetch

1. **Enter Beta Key:**
   - Go to **Settings** → **Notification Settings** → **Push Notifications**
   - Enter your beta key in the **Private Beta Key** field
   - Tap **Save** - you'll see a confirmation

2. **Generate Webhook ID:**
   - Go to **Settings** → **Developer** (or Debug menu)
   - Tap **Generate Webhook ID** - this copies a unique identifier to your clipboard
   - Keep this ID ready for the script configuration

### Step 2: Download and Configure the Notification Script

1. Download the SABnzbd notification script from the documentation (see below)
2. **Edit the script** in a text editor:
   - Find the line: `WEBHOOK_URL = "https://YOUR_WEBHOOK_DOMAIN/push/PASTE_YOUR_ID_HERE"`
   - Replace `YOUR_WEBHOOK_DOMAIN` with the domain provided in your beta documentation
   - Replace `PASTE_YOUR_ID_HERE` with the ID you copied from OmniFetch
   - Replace `YOUR_BETA_PASSWORD_HERE` with the password provided separately
3. Save the file as `../../services/sabnzbd/omnifetch-webhook.py`

### Step 3: Install the Script

Place the script in your SABnzbd scripts directory:

**Linux/Mac:**
```bash
cp ../../services/sabnzbd/omnifetch-webhook.py ~/.sabnzbd/scripts/
chmod +x ~/.sabnzbd/scripts/../../services/sabnzbd/omnifetch-webhook.py
```

**Windows:**
```
Copy to: C:\Users\[username]\AppData\Local\sabnzbd\scripts\
```

**Docker/Unraid:**
```bash
docker cp ../../services/sabnzbd/omnifetch-webhook.py sabnzbd:/config/scripts/
docker exec sabnzbd chmod +x /config/scripts/../../services/sabnzbd/omnifetch-webhook.py
```

### Step 4: Configure SABnzbd

1. Open **SABnzbd** web interface
2. Go to **Config** → **Notifications**
3. Enable **notification script**
4. Select **../../services/sabnzbd/omnifetch-webhook.py** from the script dropdown
5. Leave the **Parameters** field empty (URL is configured in the script)

**Select Event Triggers:**
- ✅ **startup** - SABnzbd started
- ✅ **download** - Download completed  
- ✅ **complete** - All downloads finished
- ✅ **failed** - Download failed
- ✅ **warning** - Warning occurred
- ✅ **error** - Error occurred
- ✅ **pause** - Downloads paused
- ✅ **unpause** - Downloads resumed
- ✅ **queue_done** - Queue finished

### Step 5: Test Your Setup

1. In SABnzbd notifications settings, click **Test Notification Script**
2. You should receive a push notification on your device
3. If successful, click **Save Changes**

## Supported Events (Beta)

With beta access, OmniFetch can send notifications for these SABnzbd events:

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

### Troubleshooting Script Issues

**Script Not Appearing in Dropdown:**
- Check script file permissions (must be executable on Linux/macOS)
- Verify script is in correct SABnzbd scripts directory
- Restart SABnzbd service after adding script
- Check SABnzbd logs for script loading errors

**Script Test Fails:**
- Verify you've edited the script with your webhook ID
- Ensure beta password is correctly entered in the script
- Check Python 3 is installed: `python3 --version`
- Test script manually: `python3 ../../services/sabnzbd/omnifetch-webhook.py test`

**"403 Forbidden" Error:**
- Beta password may be incorrect in the script
- Ensure you've saved the beta key in **Notification Settings** → **Push Notifications**
- Try generating a new webhook ID in **Settings** → **Developer**

**No Notifications Received:**
- Check iOS Settings → Notifications → OmniFetch → Allow Notifications
- Verify event triggers are selected in SABnzbd
- Check SABnzbd logs for script execution output
- Ensure your device has internet connection

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


## Python Script Template

The complete Python script for SABnzbd webhook notifications is included below. Beta testers will receive the beta password separately.

??? example "View Python Script (../../services/sabnzbd/omnifetch-webhook.py)"
    
    ```python
    #!/usr/bin/env python3
    """
    SABnzbd Webhook Notification Script for OmniFetch
    """
    
    [Download the full script here](../../services/sabnzbd/omnifetch-webhook.py)
    
    **Configuration Required:**
    1. Replace `PASTE_YOUR_ID_HERE` with your webhook ID from OmniFetch
    2. Replace `YOUR_BETA_PASSWORD_HERE` with the beta password provided separately
    
    **Installation:**
    - Save as `../../services/sabnzbd/omnifetch-webhook.py` in your SABnzbd scripts directory
    - Make executable: `chmod +x ../../services/sabnzbd/omnifetch-webhook.py` (Linux/Mac)
    - Configure in SABnzbd Config → Notifications

## Advanced Configuration

### Service Configuration

OmniFetch currently supports one SABnzbd instance. Future versions will support multiple instances for different download setups.

### Performance Optimization

#### Download Categories

Configure SABnzbd categories for better organization:

- **Movies**: Movie downloads with specific post-processing
- **TV**: TV show downloads with season/episode organization
- **Music**: Audio files with different handling
- **Software**: Non-media downloads


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