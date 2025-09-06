# Frequently Asked Questions

## General Questions

### What is OmniFetch?

OmniFetch is a native SwiftUI app for iOS that provides unified monitoring and management for your media services. It supports Sonarr, Radarr, Lidarr, Jellyseerr, and SABnzbd, with iPad, Apple TV, and Mac support coming soon.

### Which devices are supported?

- **iPhone**: iOS 17.0+ - **Available Now**
- **iPad**: iPadOS 17.0+ - **Coming Soon**
- **Apple TV**: tvOS 17.0+ - **Coming Soon**
- **Mac**: macOS 14.0+ - **Coming Soon**

### Is OmniFetch free?

Please check the App Store for current pricing information. Features and availability may vary by platform.

### Does OmniFetch work offline?

OmniFetch requires internet connectivity to communicate with your services. However, it caches data locally for brief offline viewing. Configuration and previously loaded data remain accessible without internet.

## Setup and Configuration

### How do I find my API key?

API keys are found in different locations for each service:

- **Sonarr/Radarr/Lidarr**: Settings → General → Security → API Key
- **Jellyseerr**: Settings → General → API Key  
- **SABnzbd**: Config → General → Security → API Key

### Can I use local network services?

Yes! OmniFetch works with services on your local network. Use local IP addresses or hostnames that are accessible from your device. Ensure your device is connected to the same network as your services.

### Do I need to port forward my services?

No, you don't need to port forward services for basic monitoring. OmniFetch connects directly to your services. However, webhook notifications from services to OmniFetch do require internet connectivity.

### Can I use VPN with OmniFetch?

Yes, OmniFetch works with VPN connections. If your services are only accessible via VPN, ensure your device's VPN is connected before using the app.

## Notifications and Webhooks

### Why am I not receiving notifications?

Check these common issues:

1. **iOS Permissions**: Settings → Notifications → OmniFetch → Allow Notifications
2. **OmniFetch Settings**: Ensure notifications are enabled for your services
3. **Webhook Setup**: Verify webhooks are properly configured in your services
4. **Network**: Ensure your services can reach the internet for webhook delivery
5. **Do Not Disturb**: Check if Focus modes are blocking notifications

### What's the difference between monitoring and webhooks?

- **Monitoring**: OmniFetch periodically checks your services for updates
- **Webhooks**: Your services immediately send notifications to OmniFetch when events occur
- Webhooks provide faster, real-time notifications with less battery usage

### Can I customize notification sounds?

Yes! Go to iOS Settings → Notifications → OmniFetch → Sounds to choose different notification sounds. You can also set different sounds for different types of notifications.

### How do I test if webhooks are working?

1. Open your service's web interface
2. Go to Settings → Connect → Connections
3. Find the OmniFetch webhook
4. Click "Test" - you should receive a notification immediately

## CloudKit and Sync

### How does CloudKit sync work?

CloudKit automatically synchronizes your service configurations, app preferences, and settings across all your Apple devices using the same Apple ID. Changes made on one device appear on others within minutes.

### What if sync isn't working?

Common solutions:
- Ensure same Apple ID on all devices
- Check that iCloud is enabled in device settings
- Verify internet connectivity on all devices
- Try signing out and back in to iCloud
- Force refresh by closing and reopening OmniFetch

### Can I disable sync?

Yes, you can disable CloudKit sync in OmniFetch settings. This will keep configurations local to each device only.

### Does sync use my iCloud storage?

Yes, but OmniFetch uses minimal iCloud storage - typically less than 1MB for most configurations.

## Performance and Battery

### Why is OmniFetch using battery?

Background activity is normal for monitoring apps. To optimize battery usage:
- Increase refresh intervals for less critical services
- Disable background refresh for services you check manually
- Use Wi-Fi instead of cellular when possible
- Close other unnecessary background apps

### How often does OmniFetch check my services?

Default refresh intervals vary by service and data type, typically 5-15 minutes. You can adjust these in each service's settings to balance between current data and battery usage.

### Can I reduce network usage?

Yes:
- Increase refresh intervals in service settings
- Disable automatic refresh on cellular data
- Use local network services when possible
- Enable "Low Data Mode" in iOS settings

## Features and Capabilities

### Which services support automatic webhook setup?

- **Automatic**: Sonarr, Radarr, Lidarr (OmniFetch creates webhooks automatically)
- **Manual**: Jellyseerr, SABnzbd (require manual configuration)

### Can I monitor multiple instances of the same service?

Currently, OmniFetch supports one instance per service type (one Sonarr, one Radarr, etc.). Support for multiple instances of the same service is planned for future releases.

### Do widgets work without the app running?

Yes, widgets update independently using Background App Refresh. Ensure this is enabled for OmniFetch in iOS settings for best widget performance.

### Can I export my configuration?

Currently, configurations are automatically backed up via CloudKit sync. Manual export/import features may be added in future updates.

## Troubleshooting

### "Connection Failed" errors

Most common causes:
- Incorrect URL format (ensure http:// or https://)
- Service is offline or unreachable
- Wrong port number
- Network/firewall blocking connection
- VPN required but not connected

### "Unauthorized" errors

Usually indicates:
- Incorrect API key
- API key was regenerated in service
- Extra spaces when copying API key
- Service requires additional authentication

### Services show old data

Try these solutions:
- Pull down to refresh manually
- Check service refresh intervals
- Verify service is responding normally
- Restart OmniFetch if data seems stuck

### Widgets not updating

Common fixes:
- Enable Background App Refresh for OmniFetch
- Check that services are configured correctly in main app
- Remove and re-add widget if severely outdated
- Ensure adequate device storage for caching

## Privacy and Security

### What data does OmniFetch collect?

OmniFetch is designed with privacy in mind:
- No personal data is transmitted to external servers
- API keys are stored securely in your device's keychain
- CloudKit sync uses end-to-end encryption
- No usage analytics unless explicitly enabled

### Are my API keys secure?

Yes, API keys are stored in the iOS keychain with hardware encryption. They're only transmitted directly to your configured services over secure connections.

### Can I use OmniFetch without internet?

You can view cached data offline, but real-time monitoring and notifications require internet connectivity to reach your services.

## Future Updates

### How do I request new features?

Feature requests can be submitted through the app's feedback system or TestFlight feedback. Popular requests are prioritized for future releases.

### Will OmniFetch support more services?

Service support is continually expanded based on user demand and API availability. Updates on planned integrations are shared through app release notes.

### Is there a web version planned?

Currently, OmniFetch is focused on native Apple platform experiences. A web version is not currently planned but may be considered in the future.

---

**Still have questions?** Check the [Troubleshooting Guide](common-issues.md) for more detailed solutions or contact support through the app's feedback system.