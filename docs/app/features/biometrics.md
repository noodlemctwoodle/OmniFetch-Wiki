# Biometrics

OmniFetch supports biometric authentication using Face ID and Touch ID to provide secure,
convenient access to your media services and sensitive configuration data.

## Overview

Biometric authentication adds an extra layer of security to OmniFetch while making it faster and more convenient to access your services.
When enabled, you'll use Face ID or Touch ID to authenticate instead of entering passwords or accessing sensitive areas of the app.

<div class="hero-image-container">
  <a href="../../../assets/images/settings-biometrics/settings-biometrics-auth-light.png" class="glightbox light-mode-only"
     data-gallery="Biometric Authentication" data-glightbox="title: Biometric Authentication Settings">
    <img src="../../../assets/images/settings-biometrics/settings-biometrics-auth-light.png"
         alt="Biometric Authentication Settings Light Mode" class="hero-image">
  </a>
  <a href="../../../assets/images/settings-biometrics/settings-biometrics-auth-dark.png" class="glightbox dark-mode-only"
     data-gallery="Biometric Authentication" data-glightbox="title: Biometric Authentication Settings">
    <img src="../../../assets/images/settings-biometrics/settings-biometrics-auth-dark.png"
         alt="Biometric Authentication Settings Dark Mode" class="hero-image">
  </a>
</div>

## Supported Biometric Methods

### Face ID

Available on devices with TrueDepth camera systems:

- **iPhone**: iPhone X and later
- **iPad**: iPad Pro 11-inch (all generations), iPad Pro 12.9-inch (3rd generation and later)
- **Recognition**: Uses facial recognition with infrared camera and dot projector
- **Security**: Secure Enclave processing ensures facial data never leaves your device

### Touch ID

Available on devices with Touch ID sensors:

- **iPhone**: iPhone SE (1st, 2nd, and 3rd generation), iPhone 5s through iPhone 8 series
- **iPad**: iPad (5th generation and later), iPad Air (1st generation and later), iPad mini (2nd generation and later)
- **iPad Pro**: 10.5-inch and 12.9-inch (1st and 2nd generation)
- **Recognition**: Uses fingerprint scanning with capacitive touch sensor
- **Security**: Fingerprint data stored in Secure Enclave, never transmitted or stored elsewhere

## Security Benefits

### Enhanced Protection

- **Secure Authentication**: Biometric data is processed locally and never leaves your device
- **Quick Access**: Authenticate in seconds without typing passwords
- **Multiple Attempts**: Fallback to device passcode after failed biometric attempts
- **System Integration**: Uses iOS security frameworks for maximum protection

### Privacy Assurance

- **Local Processing**: All biometric processing happens on your device
- **No Storage**: OmniFetch never stores or accesses your biometric data
- **Apple Standards**: Follows Apple's strict security and privacy guidelines
- **Encrypted Data**: Service credentials remain encrypted and protected

## Setting Up Biometric Authentication

### Prerequisites

Before enabling biometric authentication in OmniFetch:

- **Device Support**: Ensure your device has Face ID or Touch ID capability
- **System Setup**: Configure Face ID or Touch ID in iOS Settings
- **Enrolled Biometrics**: At least one face or fingerprint must be enrolled
- **Passcode Required**: Device passcode must be set as fallback authentication

### Initial Configuration

1. **Open OmniFetch Settings**: Tap the gear icon in the navigation
2. **Navigate to Security**: Find "Biometric Authentication" in settings
3. **Enable Biometrics**: Toggle "Use Face ID/Touch ID" to enable
4. **Authenticate Setup**: Use Face ID or Touch ID to confirm setup
5. **Verification**: Test authentication by locking and unlocking a protected area

<div class="hero-image-container">
  <a href="../../../assets/images/settings-general/settings-light.png" class="glightbox light-mode-only"
     data-gallery="Biometric Authentication" data-glightbox="title: Biometric Authentication Settings">
    <img src="../../../assets/images/settings-general/settings-light.png"
         alt="Biometric Authentication Settings Light Mode" class="hero-image">
  </a>
  <a href="../../../assets/images/settings-general/settings-dark.png" class="glightbox dark-mode-only"
     data-gallery="Biometric Authentication" data-glightbox="title: Biometric Authentication Settings">
    <img src="../../../assets/images/settings-general/settings-dark.png"
         alt="Biometric Authentication Settings Dark Mode" class="hero-image">
  </a>
</div>

### Verification Process

After enabling biometric authentication:

1. **Test Protection**: Navigate to a protected area of the app
2. **Biometric Prompt**: Face ID or Touch ID prompt should appear
3. **Successful Authentication**: Access granted after successful biometric scan
4. **Fallback Testing**: Attempt authentication failure to test passcode fallback

## What Gets Protected

### Service Configurations

- **API Keys**: Viewing or editing service API keys and tokens
- **Sensitive URLs**: Access to internal network service URLs
- **Credentials**: Username and password fields for service authentication
- **Connection Details**: Critical service connection parameters

### App Areas

- **Settings Access**: Biometric prompt before entering sensitive settings
- **Service Addition**: Authentication required when adding new services
- **Credential Updates**: Biometric confirmation for credential changes
- **Export Functions**: Authentication required for configuration exports

### Data Operations

- **CloudKit Sync**: Biometric authentication for sync operations
- **Backup/Restore**: Protect backup and restore functionality
- **Debug Information**: Access to logs and diagnostic information
- **Advanced Features**: Developer tools and advanced configuration options

## Managing Biometric Settings

### Authentication Preferences

Customize when biometric authentication is required:

- **App Launch**: Require authentication when opening OmniFetch
- **Background Return**: Authenticate when returning from background
- **Sensitive Areas**: Protect specific areas of the app only
- **Time-Based**: Set timeout periods for re-authentication

### Fallback Options

Configure what happens when biometric authentication fails:

- **Passcode Fallback**: Use device passcode after failed attempts
- **Retry Attempts**: Number of biometric attempts before fallback
- **Error Handling**: Customize behavior for different failure types
- **Emergency Access**: Alternative access methods in emergency situations

### System Integration

OmniFetch integrates with iOS biometric settings:

- **System Changes**: Responds to changes in system biometric configuration
- **Enrollment Updates**: Adapts when new faces or fingerprints are added
- **Disable Detection**: Automatically disables if system biometrics are turned off
- **Security Updates**: Follows iOS security policy changes

## Troubleshooting Biometric Issues

### Authentication Failures

**Face ID Not Working:**

- **Clean Camera**: Ensure TrueDepth camera is clean and unobstructed
- **Proper Position**: Hold device 10-20 inches from face in portrait orientation
- **Lighting Conditions**: Ensure adequate lighting, avoid direct sunlight interference
- **Face Coverage**: Remove sunglasses, masks, or other face coverings
- **Re-enrollment**: Consider re-enrolling face in iOS Settings if issues persist

**Touch ID Not Working:**

- **Clean Sensor**: Wipe Touch ID sensor and your finger clean
- **Dry Hands**: Ensure fingers are dry and clean when using Touch ID
- **Proper Placement**: Place finger fully on sensor, don't press too hard
- **Alternative Fingers**: Try different enrolled fingers if one isn't working
- **Re-enrollment**: Re-enroll fingerprints in iOS Settings if recognition degrades

### System Integration Issues

**Settings Not Available:**

- **Device Compatibility**: Verify your device supports Face ID or Touch ID
- **iOS Version**: Ensure you're running iOS 17.0 or later
- **System Configuration**: Check that biometrics are enabled in iOS Settings
- **Multiple Users**: Only the device owner can configure biometric settings

**Prompt Not Appearing:**

- **App Permissions**: Verify OmniFetch has permission to use biometrics
- **System Status**: Check if biometrics are temporarily disabled by iOS
- **Background State**: Ensure app isn't being terminated by iOS in background
- **Restart Required**: Restart OmniFetch if biometric prompts stop appearing

### Configuration Problems

**Settings Reset:**

- **iOS Update**: Major iOS updates may reset biometric settings
- **App Update**: Significant app updates might require reconfiguration
- **Security Changes**: Changes to device security settings can affect biometrics
- **CloudKit Sync**: Biometric settings sync across devices via CloudKit

**Performance Issues:**

- **Slow Recognition**: Restart device if biometric recognition becomes slow
- **System Resources**: Close other apps if biometric scanning is sluggish
- **Hardware Issues**: Contact Apple Support for persistent hardware problems
- **App Conflicts**: Temporarily disable other apps using biometrics to test

## Platform-Specific Considerations

### iOS Devices

**iPhone Considerations:**

- **Face ID**: Works in portrait and landscape orientations
- **Touch ID**: Available on home button and power button (depending on model)
- **Attention Awareness**: Face ID requires looking at device (can be disabled in Accessibility)
- **Multiple Users**: Face ID and Touch ID support only one user per device

**iPad Considerations:**

- **Orientation Support**: Face ID works in any orientation on supported iPads
- **Larger Screen**: Touch ID sensor location varies by iPad model
- **Split View**: Biometric prompts work correctly in multitasking scenarios
- **External Keyboards**: Biometric authentication works with external keyboards attached

### tvOS Integration

While Apple TV doesn't support biometric authentication directly:

- **Remote App**: Use iPhone/iPad as Apple TV remote with biometric authentication
- **Shared Settings**: Biometric preferences sync to Apple TV via CloudKit
- **Alternative Auth**: Apple TV uses device PIN or alternative authentication methods
- **Cross-Device**: Configuration changes made on iOS devices sync to Apple TV

## Best Practices

### Security Recommendations

- **Regular Updates**: Keep iOS and OmniFetch updated for latest security improvements
- **Strong Passcode**: Use a strong device passcode as biometric fallback
- **Multiple Biometrics**: Enroll multiple faces (Face ID) or fingers (Touch ID) for reliability
- **Regular Review**: Periodically review and update enrolled biometric data

### Usage Optimization

- **Appropriate Protection**: Enable biometrics for sensitive areas without hindering usability
- **Timeout Settings**: Configure reasonable timeout periods for re-authentication
- **Emergency Access**: Ensure you can always access the app via passcode if needed
- **Consistent Settings**: Keep biometric settings consistent across all your devices

### Privacy Maintenance

- **Data Awareness**: Understand that biometric data never leaves your device
- **Third-Party**: OmniFetch cannot access your biometric templates or data
- **Apple Policy**: All biometric processing follows Apple's privacy standards
- **Local Processing**: Authentication happens entirely on your device's Secure Enclave

## Future Enhancements

Planned improvements for biometric authentication:

- **Context-Aware**: Smart authentication based on location and usage patterns
- **Granular Control**: More specific controls over what requires authentication
- **Advanced Fallbacks**: Additional fallback methods beyond device passcode
- **Usage Analytics**: Insights into authentication patterns and success rates
- **Enhanced Integration**: Deeper integration with iOS biometric capabilities

Biometric authentication makes OmniFetch both more secure and more convenient,
providing enterprise-level security with consumer-friendly ease of use across all your Apple devices.
