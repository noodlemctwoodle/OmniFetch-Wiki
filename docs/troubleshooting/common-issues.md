# Common Issues

This guide covers the most frequently encountered issues when using OmniFetch and their solutions.

## Service Connection Issues

### Connection Failed

**Symptom**: Service shows "Connection Failed" or red status

**Common Causes & Solutions**:

1. **Incorrect URL**:
   - Ensure URL includes `http://` or `https://`
   - Verify port number if not standard (80/443)
   - Remove trailing slashes from URL
   - Example: `https://sonarr.mydomain.com:8989`

2. **Service Not Running**:
   - Check that your service is actually running
   - Try accessing the web interface from a browser
   - Restart the service if necessary

3. **Network Issues**:
   - Ensure device can reach the service
   - Check firewall settings on server
   - Verify VPN connection if required
   - Test from same network as the service

4. **SSL/Certificate Issues**:
   - For self-signed certificates, disable SSL verification in OmniFetch
   - For expired certificates, renew or disable SSL verification
   - For Let's Encrypt issues, ensure certificate is properly renewed

### Unauthorized Access

**Symptom**: "401 Unauthorized" or "403 Forbidden" errors

**Solutions**:

1. **API Key Issues**:
   - Copy API key again from service settings
   - Ensure no extra spaces or characters
   - Verify API key hasn't been regenerated
   - Check if API key has proper permissions

2. **Authentication Settings**:
   - Some services require specific authentication methods
   - Check if service has additional security settings
   - Verify user account has necessary permissions

### Service Shows Offline

**Symptom**: Previously working service now shows offline

**Solutions**:

1. **Service Restart Required**:
   - Service may have restarted and changed settings
   - Try refreshing service connection in OmniFetch
   - Remove and re-add service if problem persists

2. **Network Changes**:
   - IP address of service may have changed
   - Update URL in OmniFetch if needed
   - Check DNS resolution if using domain names

3. **Service Updates**:
   - Service may have updated and changed API
   - Update OmniFetch to latest version
   - Check service release notes for API changes

## Notification Issues

### Not Receiving Notifications

**Check iOS Settings**:
1. Settings → Notifications → OmniFetch
2. Ensure "Allow Notifications" is enabled
3. Verify "Lock Screen", "Notification Center", and "Banners" are enabled
4. Check that "Sounds" is not set to "None"

**Check OmniFetch Settings**:
1. Settings → Notifications → Enable Notifications
2. Verify specific events are enabled for each service
3. Check that quiet hours aren't blocking notifications
4. Ensure service webhooks are properly configured

**Network/Device Issues**:
- Check internet connection on device
- Try toggling airplane mode on/off
- Restart OmniFetch app
- Restart device if notifications remain blocked

### Delayed Notifications

**Common Causes**:
- Poor internet connection causing delays
- iOS Low Power Mode delaying background processes
- Service delays in sending webhook notifications
- High server load on notification service

**Solutions**:
- Ensure strong internet connection
- Disable Low Power Mode
- Check service logs for webhook delivery timing
- Try manual refresh in OmniFetch to test connection

### Duplicate Notifications

**Causes**:
- Multiple webhook configurations for same service
- Service sending duplicate events
- OmniFetch app installed on multiple devices with same settings

**Solutions**:
- Check service webhook settings for duplicates
- Remove and re-add service in OmniFetch
- Verify webhook URLs are unique per device
- Check if other notification apps are also configured

### Webhook Test Fails

**Service-Side Issues**:
1. **Internet Access**: Ensure service server can reach external webhooks
2. **Firewall**: Check outbound connections are allowed
3. **Service Configuration**: Verify service allows webhook connections

**OmniFetch Issues**:
1. **Permissions**: Ensure notification permissions are granted
2. **Registration**: Device may need re-registration with notification service
3. **Network**: Check device internet connection

## CloudKit Sync Issues

### Services Not Syncing

**iCloud Requirements**:
- Same Apple ID on all devices
- iCloud enabled in device settings
- Sufficient iCloud storage available
- Stable internet connection

**Troubleshooting Steps**:
1. **Sign Out/In**: Sign out of iCloud and back in on affected devices
2. **Network Check**: Ensure all devices have internet access
3. **Force Sync**: Close and reopen OmniFetch on all devices
4. **iCloud Status**: Check Apple's system status for iCloud issues

### Sync Conflicts

**When They Occur**:
- Simultaneous changes on multiple devices
- Network interruptions during sync
- Different versions of OmniFetch on different devices

**Resolution**:
- OmniFetch automatically resolves most conflicts
- Manual resolution may require removing and re-adding affected services
- Latest changes generally take priority in conflict resolution

### Partial Sync

**Symptoms**: Some settings sync but others don't

**Solutions**:
- Wait longer - some data takes more time to sync
- Check iCloud storage availability
- Force refresh by restarting app on all devices
- Clear local cache and re-sync if problem persists

## Widget Issues

### Widget Not Updating

**iOS Settings**:
- Background App Refresh must be enabled for OmniFetch
- Check that Low Power Mode isn't blocking updates
- Ensure adequate device storage for caching

**OmniFetch Settings**:
- Verify services are configured correctly
- Check that service connections are working
- Ensure refresh intervals are appropriate

**Manual Refresh**:
- Pull down on widget to force refresh
- Open OmniFetch app to trigger background sync
- Remove and re-add widget if updates remain stalled

### Widget Showing "No Data"

**Service Issues**:
- Verify services are configured and connected in main app
- Test service connections in OmniFetch settings
- Check that services are accessible from device

**Widget Configuration**:
- Long-press widget and check configuration
- Ensure correct service is selected
- Verify widget has permission to access service data

## Performance Issues

### Slow App Performance

**Common Causes**:
- Too many services configured
- Very frequent refresh intervals
- Large amounts of cached data
- Older device with limited resources

**Solutions**:
- Reduce number of configured services
- Increase refresh intervals
- Clear app cache in settings
- Restart app and device

### High Battery Usage

**Optimization Tips**:
- Reduce refresh frequency for less critical services
- Disable background refresh for services you check manually
- Turn off notifications for non-essential events
- Use Wi-Fi instead of cellular when possible

### Network Usage

**Reducing Data Usage**:
- Configure longer refresh intervals
- Disable automatic refreshing on cellular
- Use local network services when possible
- Monitor data usage in iOS Settings

## General Troubleshooting Steps

### When Nothing Else Works

1. **Restart OmniFetch**: Force close and reopen the app
2. **Restart Device**: Complete device restart
3. **Update App**: Ensure latest version of OmniFetch
4. **Check Service Status**: Verify your services are running normally
5. **Network Test**: Try accessing services from web browser
6. **Clean Install**: Delete and reinstall OmniFetch (will lose local settings)

### Getting Help

If issues persist after trying these solutions:

1. **Check App Version**: Ensure you're running the latest version
2. **Review Service Logs**: Check your service logs for errors
3. **Document Steps**: Note exactly what you did when the issue occurred
4. **Network Details**: Note whether you're using local network, VPN, etc.
5. **Error Messages**: Screenshot any error messages you see

### Reporting Issues

When reporting problems:
- Include OmniFetch version number
- Describe steps to reproduce the issue
- Include relevant error messages
- Note your device model and iOS version
- Mention which services are affected