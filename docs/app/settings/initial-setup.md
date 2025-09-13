# Initial Setup

Complete guide for first-time OmniFetch app configuration.

## First Launch

When you first open OmniFetch, you'll go through an initial setup process.

### 1. Welcome Screen

- Tap **Enable iCloud Sync** to begin setup

<div class="hero-image-container" style="max-width: 800px;">
  <a href="../../../assets/images/settings-onboarding/settings-onboarding-icloud-light.png" class="glightbox light-mode-only"
     data-gallery="Initial Setup" data-glightbox="title: Initial Setup Welcome Screen">
    <img src="../../../assets/images/settings-onboarding/settings-onboarding-icloud-light.png"
         alt="Initial Setup Welcome Screen Light Mode" class="hero-image" style="width: 100%; max-width: none;">
  </a>
  <a href="../../../assets/images/settings-onboarding/settings-onboarding-icloud-dark.png" class="glightbox dark-mode-only"
     data-gallery="Initial Setup" data-glightbox="title: Initial Setup Welcome Screen">
    <img src="../../../assets/images/settings-onboarding/settings-onboarding-icloud-dark.png"
         alt="Initial Setup Welcome Screen Dark Mode" class="hero-image" style="width: 100%; max-width: none;">
  </a>
</div>

- You can **Tap** not now if you want to use local only storage

#### iCloud Access

- **Purpose**: Sync configurations across devices
- **Required**: Optional but recommended
- **Action**: Allow access for CloudKit sync

### 3. Initial Configuration

After permissions are granted:

1. **Choose Setup Mode:**
   - Quick Setup - Add your first service immediately
   - Manual Setup - Configure app settings first
   - Import Configuration - Restore from backup (if available)

2. **Set Basic Preferences:**
   - Display name for your setup
   - Default refresh intervals
   - Notification preferences

## Adding Your First Service

### Quick Add Process

1. Tap **Add Service** from the main screen
2. Choose your service type:
   - [Sonarr](../../services/sonarr/index.md) (TV Shows)
   - [Radarr](../../services/radarr/index.md) (Movies)
   - [Lidarr](../../services/lidarr/index.md) (Music)
   - [Jellyseerr](../../services/jellyseerr/index.md) (Requests)
   - [SABnzbd](../../services/sabnzbd/index.md) (Downloads)

3. Enter service details:
   - **URL**: Service address (local or remote)
   - **API Key**: From service settings

4. Test and save the connection

### Connection Testing

OmniFetch automatically tests:

- Network connectivity
- API key validity
- Service version compatibility
- Available endpoints

## Enable Notifications

To get the most out of OmniFetch, enable notifications:

### Permission Setup Steps

1. **Allow Notifications**: Tap "Allow" when prompted for notification permissions
2. **Enable in Settings**: Toggle notifications on in the OmniFetch settings
3. **Confirm Setup**: Tap "OK" to complete the notification setup process

<div class="hero-carousel-container" id="notificationCarousel" style="max-width: 600px;">
  <div class="hero-carousel-track">
    <div class="hero-carousel-item">
      <img src="../../../assets/images/settings-notifications/settings-notifications-permisisons-light1.png" 
           alt="Notification Permissions Step 1 - Light Mode" class="light-mode-only glightbox"
           data-glightbox="title: Step 1 - Allow Notifications" data-gallery="notification-setup">
      <img src="../../../assets/images/settings-notifications/settings-notifications-permisisons-dark1.png" 
           alt="Notification Permissions Step 1 - Dark Mode" class="dark-mode-only glightbox"
           data-glightbox="title: Step 1 - Allow Notifications" data-gallery="notification-setup">
    </div>
    <div class="hero-carousel-item">
      <img src="../../../assets/images/settings-notifications/settings-notifications-permisisons-light2.png" 
           alt="Notification Permissions Step 2 - Light Mode" class="light-mode-only glightbox"
           data-glightbox="title: Step 2 - Enable Notifications" data-gallery="notification-setup">
      <img src="../../../assets/images/settings-notifications/settings-notifications-permisisons-dark2.png" 
           alt="Notification Permissions Step 2 - Dark Mode" class="dark-mode-only glightbox"
           data-glightbox="title: Step 2 - Enable Notifications" data-gallery="notification-setup">
    </div>
    <div class="hero-carousel-item">
      <img src="../../../assets/images/settings-notifications/settings-notifications-permisisons-light3.png" 
           alt="Notification Permissions Step 3 - Light Mode" class="light-mode-only glightbox"
           data-glightbox="title: Step 3 - Confirm Setup" data-gallery="notification-setup">
      <img src="../../../assets/images/settings-notifications/settings-notifications-permisisons-dark3.png" 
           alt="Notification Permissions Step 3 - Dark Mode" class="dark-mode-only glightbox"
           data-glightbox="title: Step 3 - Confirm Setup" data-gallery="notification-setup">
    </div>
  </div>
  <div class="carousel-controls">
    <button class="carousel-btn carousel-prev" aria-label="Previous step">‹</button>
    <button class="carousel-btn carousel-next" aria-label="Next step">›</button>
  </div>
  <div class="carousel-indicators">
    <div class="carousel-indicator active"></div>
    <div class="carousel-indicator"></div>
    <div class="carousel-indicator"></div>
  </div>
</div>

### 1. Configure Push Notifications

1. Go to **Settings** → **Notification Settings**
2. Toggle on notifications for your configured services
3. Test notifications to ensure they're working properly

<div class="hero-carousel-container" id="pushServicesCarousel" style="max-width: 600px;">
  <div class="hero-carousel-track">
    <div class="hero-carousel-item">
      <img src="../../../assets/images/settings-notifications-push/settings-push-sonarr-light.png"
           alt="Sonarr Push Notifications - Light Mode" class="light-mode-only glightbox"
           data-glightbox="title: Sonarr Push Notifications" data-gallery="push-services">
      <img src="../../../assets/images/settings-notifications-push/settings-push-sonarr-dark.png"
           alt="Sonarr Push Notifications - Dark Mode" class="dark-mode-only glightbox"
           data-glightbox="title: Sonarr Push Notifications" data-gallery="push-services">
    </div>
    <div class="hero-carousel-item">
      <img src="../../../assets/images/settings-notifications-push/settings-push-radarr-light.png"
           alt="Radarr Push Notifications - Light Mode" class="light-mode-only glightbox"
           data-glightbox="title: Radarr Push Notifications" data-gallery="push-services">
      <img src="../../../assets/images/settings-notifications-push/settings-push-radarr-dark.png"
           alt="Radarr Push Notifications - Dark Mode" class="dark-mode-only glightbox"
           data-glightbox="title: Radarr Push Notifications" data-gallery="push-services">
    </div>
    <div class="hero-carousel-item">
      <img src="../../../assets/images/settings-notifications-push/settings-push-lidarr-light.png"
           alt="Lidarr Push Notifications - Light Mode" class="light-mode-only glightbox"
           data-glightbox="title: Lidarr Push Notifications" data-gallery="push-services">
      <img src="../../../assets/images/settings-notifications-push/settings-push-lidarr-dark.png"
           alt="Lidarr Push Notifications - Dark Mode" class="dark-mode-only glightbox"
           data-glightbox="title: Lidarr Push Notifications" data-gallery="push-services">
    </div>
    <div class="hero-carousel-item">
      <img src="../../../assets/images/settings-notifications-push/settings-push-jellyseerr-light.png"
           alt="Jellyseerr Push Notifications - Light Mode" class="light-mode-only glightbox"
           data-glightbox="title: Jellyseerr Push Notifications" data-gallery="push-services">
      <img src="../../../assets/images/settings-notifications-push/settings-push-jellyseerr-dark.png"
           alt="Jellyseerr Push Notifications - Dark Mode" class="dark-mode-only glightbox"
           data-glightbox="title: Jellyseerr Push Notifications" data-gallery="push-services">
    </div>
    <div class="hero-carousel-item">
      <img src="../../../assets/images/settings-notifications-push/settings-push-sabnzbd-light.png"
           alt="SABnzbd Push Notifications - Light Mode" class="light-mode-only glightbox"
           data-glightbox="title: SABnzbd Push Notifications" data-gallery="push-services">
      <img src="../../../assets/images/settings-notifications-push/settings-push-sabnzbd-dark.png"
           alt="SABnzbd Push Notifications - Dark Mode" class="dark-mode-only glightbox"
           data-glightbox="title: SABnzbd Push Notifications" data-gallery="push-services">
    </div>
  </div>
  <div class="carousel-controls">
    <button class="carousel-btn carousel-prev" aria-label="Previous service">‹</button>
    <button class="carousel-btn carousel-next" aria-label="Next service">›</button>
  </div>
  <div class="carousel-indicators">
    <div class="carousel-indicator active"></div>
    <div class="carousel-indicator"></div>
    <div class="carousel-indicator"></div>
    <div class="carousel-indicator"></div>
    <div class="carousel-indicator"></div>
  </div>
</div>

### 2. Notification Types

- **Service Health**: Get alerted when services go offline or have issues
- **Download Complete**: Know when your media finishes downloading
- **Request Updates**: Stay informed about Jellyseerr request status changes
- **System Alerts**: Important updates about your media stack

## Post-Setup Checklist

After initial setup, verify:

- [ ] Notifications are working (test from settings)
- [ ] At least one service is configured
- [ ] Service shows green status indicator
- [ ] CloudKit sync is enabled (if desired)
- [ ] Background refresh is enabled
- [ ] Beta key is saved (if applicable)

## Next Steps

- [Configure additional services](../../services/index.md)
- [Set up widgets](../features/widgets.md)
- [Enable CloudKit sync](../features/cloudkit-sync.md)
