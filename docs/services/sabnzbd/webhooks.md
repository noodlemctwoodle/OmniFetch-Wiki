# SABnzbd Webhook Notifications

Configure push notifications for SABnzbd events using webhooks (beta feature).

## Overview

Webhook notifications provide real-time push notifications when download events occur in SABnzbd. This feature requires beta access and a Python script configuration.

## Prerequisites

- OmniFetch app with SABnzbd configured
- Private beta key from support
- iOS push notifications enabled
- Python 3.6+ installed on SABnzbd server
- Access to SABnzbd scripts directory

## Setup Process

### Step 1: Enable Beta Access

1. Open OmniFetch
2. Go to **Settings** → **Notification Settings** → **Push Notifications**
3. Enter your **Private Beta Key** in the designated field
4. Tap **Save** - look for green confirmation
5. Beta features are now activated

### Step 2: Generate Webhook ID

1. In OmniFetch, go to **Settings** → **Developer**
2. Tap **"Generate ID for Service"**
3. Select **SABnzbd**
4. Copy the generated unique ID
5. Keep this ID for script configuration

### Step 3: Download Webhook Script

Download the OmniFetch webhook script:

**omnifetch-webhook.py**:
```python
#!/usr/bin/env python3
"""
SABnzbd notification script for OmniFetch
Sends webhook notifications for download events

Usage: Place in SABnzbd scripts directory and configure in notification settings
"""

import sys
import json
import urllib.request
import urllib.parse
from urllib.error import URLError, HTTPError

# Configuration - Update these values
WEBHOOK_URL = "https://YOUR_WEBHOOK_DOMAIN/push/YOUR_GENERATED_ID_HERE"
BETA_PASSWORD = "YOUR_BETA_PASSWORD_HERE"

def send_notification(event_type, title, message, status="info"):
    """Send notification to OmniFetch webhook"""
    
    payload = {
        "type": event_type,
        "title": title,
        "message": message,
        "status": status,
        "timestamp": int(time.time()) if 'time' in sys.modules else None
    }
    
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {BETA_PASSWORD}',
        'User-Agent': 'SABnzbd-OmniFetch-Webhook/1.0'
    }
    
    try:
        data = json.dumps(payload).encode('utf-8')
        req = urllib.request.Request(WEBHOOK_URL, data=data, headers=headers)
        
        with urllib.request.urlopen(req, timeout=30) as response:
            if response.status == 200:
                print(f"Notification sent successfully: {title}")
                return True
            else:
                print(f"Webhook failed with status {response.status}")
                return False
                
    except HTTPError as e:
        print(f"HTTP Error: {e.code} - {e.reason}")
        return False
    except URLError as e:
        print(f"URL Error: {e.reason}")
        return False
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return False

def main():
    """Main function called by SABnzbd"""
    
    if len(sys.argv) < 8:
        print("Error: Insufficient arguments provided by SABnzbd")
        sys.exit(1)
    
    # SABnzbd provides these arguments:
    # 1: Final folder
    # 2: Original name
    # 3: Clean name  
    # 4: Indexer
    # 5: Report number
    # 6: Category
    # 7: Group
    # 8: Status (0=OK, 1=failed verification, 2=failed unpack, 3=1+2)
    
    final_folder = sys.argv[1]
    original_name = sys.argv[2] 
    clean_name = sys.argv[3]
    indexer = sys.argv[4] if len(sys.argv) > 4 else "Unknown"
    status_code = sys.argv[7] if len(sys.argv) > 7 else "0"
    
    # Determine event type and status
    status_code = int(status_code)
    
    if status_code == 0:
        event_type = "download_complete"
        title = "Download Complete"
        message = f"{clean_name} downloaded successfully"
        status = "success"
    elif status_code == 1:
        event_type = "download_failed"
        title = "Verification Failed" 
        message = f"{clean_name} failed verification"
        status = "error"
    elif status_code == 2:
        event_type = "download_failed"
        title = "Unpack Failed"
        message = f"{clean_name} failed to unpack"
        status = "error"  
    elif status_code == 3:
        event_type = "download_failed"
        title = "Download Failed"
        message = f"{clean_name} failed verification and unpack"
        status = "error"
    else:
        event_type = "download_unknown"
        title = "Unknown Status"
        message = f"{clean_name} completed with unknown status"
        status = "warning"
    
    # Send notification
    success = send_notification(event_type, title, message, status)
    
    if success:
        print(f"OmniFetch notification sent for: {clean_name}")
        sys.exit(0)
    else:
        print(f"Failed to send OmniFetch notification for: {clean_name}")
        sys.exit(1)

if __name__ == "__main__":
    import time
    main()
```

### Step 4: Configure Script

1. Replace `YOUR_GENERATED_ID_HERE` with your unique ID from Step 2
2. Replace `YOUR_BETA_PASSWORD_HERE` with password provided by support
3. Save the script as `omnifetch-webhook.py`
4. Make it executable: `chmod +x omnifetch-webhook.py`

### Step 5: Install Script in SABnzbd

1. Copy script to SABnzbd scripts directory:
   - **Linux**: `/opt/sabnzbd/scripts/`
   - **Docker**: `/scripts/` (mounted volume)
   - **Windows**: `Scripts` folder in SABnzbd directory

2. Open SABnzbd web interface
3. Go to **Config** → **Notifications**
4. Under **Script**, select `omnifetch-webhook.py`
5. Enable for these events:
   - ✅ On Download Complete
   - ✅ On Download Failed
   - ✅ On Queue Complete (optional)

### Step 6: Test Notification

1. Add a small test download to SABnzbd
2. Wait for completion
3. Check OmniFetch for push notification
4. Verify script logs in SABnzbd

## Supported Events

### Download Events

#### Download Complete
- **Trigger**: File successfully downloaded and processed
- **Notification**: "Download Complete: FileName downloaded successfully"
- **Status**: Success

#### Download Failed - Verification
- **Trigger**: Download failed verification check
- **Notification**: "Verification Failed: FileName failed verification"
- **Status**: Error

#### Download Failed - Unpack
- **Trigger**: Download failed to extract/unpack
- **Notification**: "Unpack Failed: FileName failed to unpack"  
- **Status**: Error

#### Download Failed - Both
- **Trigger**: Download failed both verification and unpack
- **Notification**: "Download Failed: FileName failed verification and unpack"
- **Status**: Error

### Queue Events

#### Queue Complete
- **Trigger**: All downloads in queue finished
- **Notification**: "Queue Complete: All downloads finished"
- **Status**: Success

## Notification Management

### Configure Event Types

1. In OmniFetch, go to SABnzbd settings
2. Tap **Notification Settings**
3. Toggle individual events on/off
4. Save preferences

### Recommended Settings

**Essential Notifications:**
- ✅ Download Complete
- ✅ Download Failed (all types)
- ✅ Queue Complete

**Optional Notifications:**
- ⚪ Individual file completions
- ⚪ Speed limit changes
- ⚪ Pause/Resume events

### Notification Sounds

Configure custom sounds:
1. iOS Settings → Notifications → OmniFetch
2. Choose notification sound
3. Or set SABnzbd-specific sounds in app

## Troubleshooting

### Script Not Executing

**Issue**: No notifications received from SABnzbd

**Check:**
1. Script is in correct SABnzbd scripts directory
2. Script has execute permissions (`chmod +x`)
3. Python 3 is available on system
4. Script is selected in SABnzbd notification settings

### 403 Forbidden Error

**Issue**: Script logs show authentication error

**Solutions:**
- Verify beta password in script
- Re-generate webhook ID in OmniFetch
- Check WEBHOOK_URL format
- Contact support for beta password verification

### Script Errors

**Issue**: Python errors in SABnzbd logs

**Check:**
- Python 3.6+ is installed
- Script syntax is correct
- All required modules available
- SABnzbd provides correct arguments

### No Webhook Response

**Issue**: Script runs but no notification arrives

**Check:**
- Webhook URL is accessible
- Beta key is valid in OmniFetch
- Network connectivity from SABnzbd server
- Firewall allows outbound HTTPS

## Advanced Configuration

### Custom Event Handling

You can modify the script to handle additional events:

```python
# Add custom event types
def handle_queue_complete():
    send_notification(
        "queue_complete",
        "Queue Complete", 
        "All downloads finished",
        "success"
    )

def handle_disk_space_low():
    send_notification(
        "disk_space_low",
        "Disk Space Low",
        "Available space is running low",
        "warning"
    )
```

### Multiple SABnzbd Instances

For multiple instances:
- Generate separate IDs for each instance
- Use different script copies with unique IDs
- Configure separate notification preferences
- Use same beta password for all

### Logging and Debugging

Add debug logging to script:

```python
import logging

logging.basicConfig(
    filename='/var/log/omnifetch-sabnzbd.log',
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def send_notification(event_type, title, message, status="info"):
    logging.info(f"Sending notification: {title}")
    # ... rest of function
```

## Script Requirements

### Dependencies

The script requires:
- Python 3.6 or later
- Standard library modules only:
  - `sys` - Command line arguments
  - `json` - JSON encoding
  - `urllib.request` - HTTP requests
  - `urllib.parse` - URL encoding
  - `time` - Timestamps

### Performance

- Lightweight script with minimal overhead
- Executes in under 1 second typically
- No persistent connections or background processes
- Safe for high-volume SABnzbd usage

## Beta Limitations

Current beta limitations:
- Manual script installation required
- Python 3.6+ dependency
- Limited error recovery
- Single webhook URL format

## FAQ

**Q: Why does SABnzbd need a script instead of automatic webhook setup?**
A: SABnzbd's notification system is script-based, requiring custom Python scripts for external webhooks.

**Q: Can I use the same script for multiple SABnzbd instances?**
A: No, each instance needs its own script copy with unique webhook ID.

**Q: What happens if the script fails?**
A: SABnzbd continues normal operation; only notifications are affected.

**Q: How do I update the webhook URL or password?**
A: Edit the script file and update the `WEBHOOK_URL` and `BETA_PASSWORD` variables.