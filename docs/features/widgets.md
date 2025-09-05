# Widgets

OmniFetch provides home screen and lock screen widgets to give you quick access to information about your media services without opening the app.

## Widget Types

### Service Status Widgets
Monitor the health and activity of your configured services at a glance.

**Available Sizes:**
- **Small**: Service name and status indicator
- **Medium**: Service status with key metrics (queue count, recent activity)
- **Large**: Detailed service overview with multiple metrics

**Information Displayed:**
- Service online/offline status
- Current queue counts
- Recent download activity
- Error states and warnings
- Last update timestamp

### Jellyseerr Request Widgets
Stay updated on media requests and approvals from Jellyseerr.

**Available Sizes:**
- **Small**: Request count and status
- **Medium**: Recent requests with titles
- **Large**: Detailed request list with user info and status

**Information Displayed:**
- Pending request count
- Recently requested media
- Approval status updates
- Request queue overview

### Sonarr Upcoming Episodes
See what TV episodes are airing soon or are ready to download.

**Available Sizes:**
- **Small**: Next episode count
- **Medium**: Upcoming episodes this week
- **Large**: Detailed episode schedule with air dates

**Information Displayed:**
- Episodes airing today/tomorrow
- Unaired episode counts
- Missing episode alerts
- Season premiere/finale notifications

## Setting Up Widgets

### Adding Widgets to Home Screen

1. **Long press** on your home screen until apps start wiggling
2. **Tap the '+' button** in the top-left corner
3. **Search for "OmniFetch"** in the widget gallery
4. **Select widget type** and size you want
5. **Tap "Add Widget"** to place it on your home screen
6. **Position the widget** where you want it
7. **Tap "Done"** when finished

### Configuring Widget Content

1. **Long press** the widget on your home screen
2. **Select "Edit Widget"** from the popup menu
3. **Choose service** or content type for the widget
4. **Customize display options** (if available)
5. **Tap outside** the widget to save changes

### Lock Screen Widgets (iOS 16+)

1. **Long press** your lock screen
2. **Tap "Customize"** 
3. **Select "Lock Screen"**
4. **Tap the widget area** below the clock
5. **Choose OmniFetch** from the widget list
6. **Select widget type** and configure
7. **Tap "Done"** to save

## Widget Features

### Real-Time Updates
Widgets automatically refresh to show current information:

- **Smart Refresh**: Updates when you view your home screen
- **Background Updates**: Periodic refresh when app is backgrounded  
- **Manual Refresh**: Pull down on widget to force update
- **Offline Indication**: Shows when services are unreachable

### Interactive Elements
Some widgets support direct interaction:

- **Tap to Open**: Tap widget to open relevant section in OmniFetch
- **Deep Links**: Direct navigation to specific content
- **Status Actions**: Quick actions for common tasks (where supported)

### Customization Options
Personalize widgets to show what matters most:

- **Service Selection**: Choose which service to display
- **Data Priority**: Select most important metrics to show
- **Color Themes**: Match your home screen aesthetic
- **Text Size**: Adjust for readability preferences

## Widget Information

### Service Status Widget Details

**Green Status**: Service is online and responding
- Shows current queue count
- Displays recent activity summary
- Updates every 15 minutes

**Red Status**: Service is offline or error
- Shows last successful connection
- Indicates type of error (network, auth, etc.)
- Prompts to check service configuration

**Yellow Status**: Service has warnings
- Shows warning details
- Indicates partial functionality
- Suggests checking service health

### Request Widget Details

**Pending Requests**: Shows count of requests awaiting approval
**Recent Activity**: Displays newly requested or approved media
**User Information**: Shows who made requests (if available)
**Status Updates**: Indicates when requests change status

### Episode Widget Details

**Today's Episodes**: Shows episodes airing today
**This Week**: Upcoming episodes in the next 7 days
**Missing Count**: Episodes that should be available but aren't
**Air Dates**: When episodes are scheduled to air

## Troubleshooting Widgets

### Widget Not Updating

**Check App Permissions:**
- Ensure OmniFetch has background app refresh enabled
- Verify notification permissions are granted
- Check that services are properly configured in the main app

**Force Refresh:**
- Pull down on the widget to refresh manually
- Open OmniFetch app to trigger background sync
- Remove and re-add the widget if updates remain stalled

### Widget Showing "No Data"

**Service Configuration:**
- Verify services are configured correctly in OmniFetch
- Check that API keys are valid and services are accessible
- Test service connections in the main app

**Network Issues:**
- Ensure device has internet connectivity
- Verify services are reachable from your current network
- Check if services require VPN access

### Widget Display Issues

**Text Too Small:**
- Check iOS Display & Brightness settings
- Adjust Dynamic Type settings for larger text
- Use larger widget size for more readable content

**Information Not Relevant:**
- Long press widget and select "Edit Widget"
- Change service or data source selection
- Customize which information is displayed

## Widget Best Practices

### Home Screen Organization
- **Group Related Widgets**: Place service widgets near each other
- **Size Appropriately**: Use small widgets for quick status, large for detailed info
- **Strategic Placement**: Put most important widgets on main home screen page

### Battery Optimization
- **Limit Widget Count**: Too many widgets can impact battery life
- **Choose Efficient Data**: Some data types update more frequently than others
- **Background Refresh**: Disable for widgets you check less frequently

### Information Priority
- **Most Important First**: Configure widgets to show your highest priority information
- **Avoid Redundancy**: Don't duplicate the same information across multiple widgets
- **Regular Review**: Periodically review and adjust widget configuration

## Upcoming Widget Features

Future updates may include:

- **Radarr Movie Widgets**: Upcoming movie releases and download status
- **Lidarr Music Widgets**: New album releases and download progress
- **NZBGet/SABnzbd Widgets**: Download queue status and completion
- **Interactive Controls**: Pause/resume downloads directly from widgets
- **Custom Widget Layouts**: More configuration options for displayed information

*Note: Widget availability and features may vary based on your iOS version and configured services.*