# Sonarr Setup

Complete guide for adding Sonarr to OmniFetch.

## Prerequisites

- Sonarr v3.0+ installed and running
- Access to Sonarr web interface
- Sonarr API key

## Adding Sonarr to OmniFetch

### Step 1: Locate Your API Key

1. Open your Sonarr web interface
2. Navigate to **Settings** → **General**
3. Under the **Security** section, find **API Key**
4. Click **Show** if the key is hidden
5. Copy the API key to your clipboard

!!! tip "API Key Security"
    Keep your API key secure. Never share it publicly or commit it to version control.

### Step 2: Add Service in OmniFetch

1. Open OmniFetch app
2. Tap the **"+"** button or **"Add Service"**
3. Select **Sonarr** from the service list

### Step 3: Configure Connection

Enter your Sonarr details:

#### Service Name
- **Purpose**: Identify this Sonarr instance
- **Examples**: "TV Shows", "4K TV", "Anime"
- **Tip**: Use descriptive names if you have multiple instances

#### Server URL
- **Format**: `protocol://address:port`
- **Examples**:
  - Remote: `https://sonarr.mydomain.com`
  - Local: `http://192.168.1.100:8989`
  - Docker: `http://sonarr:8989`

#### API Key
- Paste the API key you copied from Sonarr
- Ensure no extra spaces before or after

### Step 4: Test Connection

1. Tap **"Test Connection"**
2. Wait for the test to complete
3. Look for the success message

**If test succeeds:**
- ✅ Connection established
- ✅ API key valid
- ✅ Sonarr version compatible

**If test fails:**
- ❌ Check URL format and accessibility
- ❌ Verify API key is correct
- ❌ Ensure Sonarr is running

### Step 5: Save Configuration

1. Once test passes, tap **"Save"**
2. Sonarr will appear in your services list
3. Initial data sync will begin

## Post-Setup Configuration

### Enable Notifications (Beta)

If you have beta access:

1. Go to **Settings** → **Notification Settings** → **Push Notifications**
2. Enter your **Private Beta Key**
3. Save to enable webhook notifications
4. Sonarr webhooks are configured automatically

### Configure Refresh Intervals

1. Open Sonarr service in OmniFetch
2. Tap settings icon
3. Adjust refresh intervals:
   - Queue: 5-15 minutes
   - Calendar: 30-60 minutes
   - Series: 60+ minutes

### Set Notification Preferences

1. Go to Sonarr notification settings
2. Enable desired events:
   - Episode Downloaded ✅
   - Episode Grabbed
   - Quality Upgraded
   - Health Issues ✅
   - Series Deleted

## Multiple Sonarr Instances

You can add multiple Sonarr instances for different purposes.

### Common Configurations

#### Main TV Shows
- **Name**: "TV Shows"
- **Purpose**: Primary TV show collection
- **Quality**: 1080p standard

#### 4K Library
- **Name**: "TV Shows 4K"
- **Purpose**: High-quality 4K content
- **Quality**: 2160p HDR

#### Anime Collection
- **Name**: "Anime"
- **Purpose**: Anime-specific settings
- **Quality**: Varies by source

### Managing Multiple Instances

- Use clear, descriptive names
- Set different notification sounds
- Configure appropriate refresh intervals
- Monitor resource usage

## Verification Steps

After setup, verify everything works:

1. **Check Status Indicator:**
   - Green = Connected
   - Yellow = Warning
   - Red = Error

2. **View Queue:**
   - Pull to refresh
   - Check active downloads

3. **Test Notifications:**
   - Trigger test from Sonarr
   - Verify push notification received

4. **Review Calendar:**
   - Check upcoming episodes
   - Verify data accuracy

## Next Steps

- [Configure webhook notifications](webhooks.md)
- [Set up queue monitoring](features/queue.md)
- [Configure calendar view](features/calendar.md)
- [Troubleshoot issues](troubleshooting/common.md)