#!/usr/bin/env python3
"""
SABnzbd Webhook Notification Script for OmniFetch
================================================

This script sends webhook notifications to OmniFetch when SABnzbd download events occur.

Installation:
1. Edit the WEBHOOK_URL and BETA_PASSWORD configuration below
2. Place this script in your SABnzbd scripts directory
3. Make it executable: chmod +x omnifetch-webhook.py
4. In SABnzbd Config > Notifications: Enable and select this script

Parameters from SABnzbd:
- %1: The final name of the job
- %2: The original name of the NZB file
- %3: The job status (0=OK, 1=Failed verification, 2=Failed unpack, 3=1+2)
- %4: The complete path to the job folder
- %5: The basic folder name
- %6: The indexer
- %7: The size of the download (in bytes)
"""

import sys
import json
import urllib.request
import urllib.parse
import urllib.error
from datetime import datetime

def send_webhook(webhook_url, event_type, payload, username, password):
    """Send webhook notification to OmniFetch"""
    
    # Prepare the webhook payload
    webhook_payload = {
        "eventType": event_type,
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "service": "SABnzbd",
        **payload
    }
    
    try:
        # Convert to JSON
        json_payload = json.dumps(webhook_payload)
        
        # Create Basic Auth header
        import base64
        auth_string = f"{username}:{password}"
        auth_bytes = auth_string.encode('utf-8')
        auth_b64 = base64.b64encode(auth_bytes).decode('utf-8')
        
        # Create the request with authentication
        request = urllib.request.Request(
            webhook_url,
            data=json_payload.encode('utf-8'),
            headers={
                'Content-Type': 'application/json',
                'Authorization': f'Basic {auth_b64}'
            }
        )
        
        # Send the request
        with urllib.request.urlopen(request, timeout=10) as response:
            if response.status == 200:
                print(f"✅ Webhook sent successfully: {event_type}")
                return True
            else:
                print(f"❌ Webhook failed with status {response.status}")
                return False
                
    except Exception as e:
        print(f"❌ Error sending webhook: {str(e)}")
        return False

def main():
    """Main script entry point"""
    
    # ============================================================================
    # CONFIGURATION - EDIT THESE VALUES
    # ============================================================================
    
    # Step 1: Replace with your webhook URL from OmniFetch app
    # Go to Settings → Developer → Generate Webhook ID
    # Copy the generated ID and replace PASTE_YOUR_ID_HERE below
    WEBHOOK_URL = "https://YOUR_WEBHOOK_DOMAIN/push/PASTE_YOUR_ID_HERE"
    
    # Step 2: Enter your beta password (provided by OmniFetch support)
    # Contact support if you don't have the beta password
    BETA_PASSWORD = "YOUR_BETA_PASSWORD_HERE"
    
    # ============================================================================
    # NO CHANGES NEEDED BELOW THIS LINE
    # ============================================================================
    
    # Validate configuration
    if "YOUR_WEBHOOK_DOMAIN" in WEBHOOK_URL or "PASTE_YOUR_ID_HERE" in WEBHOOK_URL:
        print("❌ Error: Please edit the script and configure your webhook URL")
        print("1. Replace YOUR_WEBHOOK_DOMAIN with the domain from your beta documentation")
        print("2. Replace PASTE_YOUR_ID_HERE with your webhook ID from OmniFetch")
        print("Get your webhook ID from: OmniFetch → Settings → Developer")
        sys.exit(1)
    
    if "YOUR_BETA_PASSWORD_HERE" in BETA_PASSWORD:
        print("❌ Error: Please edit the script and replace YOUR_BETA_PASSWORD_HERE with the beta password")
        print("The beta password is provided in your beta access documentation")
        sys.exit(1)
    
    if not WEBHOOK_URL.startswith(('http://', 'https://')):
        print("❌ Error: Invalid webhook URL format")
        sys.exit(1)
    
    # Use configuration values
    webhook_url = WEBHOOK_URL
    username = "omnifetch-beta"
    password = BETA_PASSWORD
    
    # Get SABnzbd parameters (passed as command line arguments)
    # SABnzbd passes 7 parameters plus the script name
    job_name = sys.argv[1] if len(sys.argv) > 1 else "Unknown Job"
    nzb_name = sys.argv[2] if len(sys.argv) > 2 else ""
    status_code = sys.argv[3] if len(sys.argv) > 3 else "0"
    complete_path = sys.argv[4] if len(sys.argv) > 4 else ""
    folder_name = sys.argv[5] if len(sys.argv) > 5 else ""
    indexer = sys.argv[6] if len(sys.argv) > 6 else ""
    size_bytes = sys.argv[7] if len(sys.argv) > 7 else "0"
    
    # Determine the event type based on status
    status = int(status_code) if status_code.isdigit() else 0
    
    if status == 0:
        event_type = "download_complete"
    elif status == 1:
        event_type = "download_failed"  # Failed verification
    elif status == 2:
        event_type = "extract_failed"   # Failed unpack
    elif status == 3:
        event_type = "download_failed"  # Both failed
    else:
        event_type = "download_complete"  # Default to complete
    
    # Prepare the payload that matches OmniFetch worker expectations
    payload = {
        "service": "SABnzbd",
        "filename": job_name,
        "nzb_name": nzb_name,
        "status": "completed" if status == 0 else "failed",
        "status_code": status_code,
        "complete_path": complete_path,
        "folder_name": folder_name,
        "indexer": indexer,
        "bytes": int(size_bytes) if size_bytes.isdigit() else 0,
        "nzo_id": f"sabnzbd_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    }
    
    # Add human-readable size
    if payload["bytes"] > 0:
        if payload["bytes"] >= 1024**3:  # GB
            payload["size"] = f"{payload['bytes'] / (1024**3):.2f} GB"
        elif payload["bytes"] >= 1024**2:  # MB
            payload["size"] = f"{payload['bytes'] / (1024**2):.2f} MB"
        else:  # KB
            payload["size"] = f"{payload['bytes'] / 1024:.2f} KB"
    else:
        payload["size"] = "0 KB"
    
    # Send the webhook
    print(f"📤 Sending SABnzbd webhook notification...")
    print(f"Event: {event_type}")
    print(f"Job: {job_name}")
    print(f"Status: {payload['status']}")
    
    success = send_webhook(webhook_url, event_type, payload, username, password)
    
    if success:
        print("✅ Webhook notification sent successfully")
        sys.exit(0)
    else:
        print("❌ Failed to send webhook notification")
        sys.exit(1)

if __name__ == "__main__":
    main()