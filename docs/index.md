# 📱 OmniFetch Documentation

<div align="center">
  <h1>OmniFetch</h1>
  <p><em>Comprehensive monitoring and management for your media services</em></p>
</div>

Welcome to the documentation for **OmniFetch** - a native SwiftUI application that provides unified monitoring and management for your entire media stack.

## :material-rocket-launch: Overview

OmniFetch is a powerful iOS, iPadOS, and tvOS application designed to streamline your media service management. With native SwiftUI interfaces, CloudKit sync, and real-time notifications, you can monitor your services from anywhere.

<div class="grid cards" markdown>

- :house_with_garden: **Native Experience**

    ---
    
    Built with SwiftUI for optimal performance on all Apple platforms. Follows Apple's Human Interface Guidelines for familiar, intuitive interactions.

- :cloud: **Cross-Device Sync**

    ---
    
    CloudKit integration keeps your configurations synchronized across iPhone, iPad, Apple TV, and Mac. Set up once, access everywhere.

- :bell: **Real-Time Alerts**

    ---
    
    Webhook-powered push notifications deliver instant alerts about downloads, requests, and system health directly to your devices.

- :bar_chart: **Comprehensive Monitoring**

    ---
    
    Monitor download queues, system health, user requests, and library statistics across all your media services from a single interface.

</div>

## :material-server: Supported Services

OmniFetch integrates seamlessly with these popular media services:

| Service | Type | Features |
|---------|------|----------|
| **[Sonarr](services/sonarr.md)** :tv: | TV Shows | Queue monitoring, calendar view, automatic webhooks |
| **[Radarr](services/radarr.md)** :movie_camera: | Movies | Library management, download tracking, health monitoring |
| **[Lidarr](services/lidarr.md)** :musical_note: | Music | Album monitoring, artist management, release tracking |
| **[Jellyseerr](services/jellyseerr.md)** :busts_in_silhouette: | Requests | Request approval, user management, issue tracking |
| **[SABnzbd](services/sabnzbd.md)** :arrow_down: | Downloads | Queue management, completion tracking, system alerts |

## :star: Key Features

=== "Core Features"

    - :arrows_counterclockwise: **Real-time monitoring** of all your services
    - :cloud: **CloudKit sync** across all your devices
    - :bell: **Push notifications** for important events
    - :art: **Native SwiftUI** interface optimized for each platform

=== "Advanced Features"

    - :iphone: **Home screen widgets** for quick status checks
    - :link: **Webhook integration** for instant notifications
    - :crescent_moon: **Dark mode** support with system integration
    - :accessibility: **Full accessibility** support with VoiceOver

=== "Platform Features"

    - :computer: **iPad optimization** with split-view support
    - :tv: **Apple TV interface** with remote navigation
    - :desktop_computer: **Mac Catalyst** support for desktop usage
    - :focus: **Focus mode integration** for notification management

## :rocket: Getting Started

<div class="grid cards" markdown>

- [:material-download: **Installation**](setup/installation.md)

    ---

    Download and install OmniFetch on your devices. Available for iOS 17.0+, tvOS 17.0+, and macOS 14.0+.

- [:material-rocket-launch-outline: **Quick Start**](setup/quick-start.md)

    ---

    Get up and running in minutes with our step-by-step setup guide. Configure your first service and test notifications.

- [:material-cog: **Configuration**](setup/configuration.md)

    ---

    Comprehensive configuration guide including webhook setup, CloudKit sync, and advanced notification settings.

</div>

## :material-devices: Platform Support

| Platform | Version | Features |
|----------|---------|----------|
| **iPhone** | iOS 17.0+ | Full feature set, widgets, notifications |
| **iPad** | iPadOS 17.0+ | Split-view, multitasking, larger layouts |
| **Apple TV** | tvOS 17.0+ | Remote navigation, living room experience |
| **Mac** | macOS 14.0+ | Catalyst app, desktop workflows |

## :material-code-tags: Modern Architecture

OmniFetch is built with cutting-edge Apple technologies:

- :material-code-braces: **SwiftUI** - Declarative user interface framework
- :material-database: **SwiftData** - Local data persistence and caching
- :material-cloud: **CloudKit** - Cross-device synchronization
- :material-lightning-bolt: **Swift Concurrency** - Modern async/await patterns
- :material-eye: **@Observable** - Reactive state management (iOS 17+)

## :material-help: Need Help?

<div class="grid cards" markdown>

- [:material-wrench: **Troubleshooting**](troubleshooting/common-issues.md)

    ---

    Solutions to common issues with service connections, notifications, and sync problems.

- [:material-help-circle: **FAQ**](troubleshooting/faq.md)

    ---

    Frequently asked questions about setup, features, and best practices.

</div>

---

*Built with ❤️ for the media management community*