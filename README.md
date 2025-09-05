# OmniFetch Documentation

This repository contains the user-facing documentation for [OmniFetch](https://github.com/noodlemctwoodle/OmniFetch), a SwiftUI application for monitoring and managing media services.

## 🌐 Live Documentation

The documentation is built with MkDocs and deployed automatically to GitHub Pages:

**[📖 Visit the Documentation](https://noodlemctwoodle.github.io/OmniFetch-Wiki)**

## 📚 What's Covered

The documentation provides comprehensive user guides for:

### Getting Started

- Installation instructions for iOS, iPadOS, and tvOS
- Quick start guide for first-time setup
- Service configuration tutorials

### Supported Services

- **Sonarr** - TV series management
- **Radarr** - Movie management  
- **Lidarr** - Music management
- **Jellyseerr** - Request management
- **SABnzbd** - Usenet downloader

### Key Features

- **Push Notifications** - Real-time alerts for important events
- **Webhook Integration** - Advanced notification system
- **Widgets** - Home screen and lock screen widgets
- **CloudKit Sync** - Cross-device synchronization

### Support

- Troubleshooting guides for common issues
- Frequently asked questions
- Platform-specific guidance

## 🛠️ Local Development

To work on the documentation locally:

### Prerequisites

- Python 3.x
- pip package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/noodlemctwoodle/OmniFetch-Wiki.git
cd OmniFetch-Wiki

# Install dependencies
pip install -r requirements.txt

# Serve locally
mkdocs serve
```

The documentation will be available at `http://localhost:8000` with live reload enabled.

### Building

```bash
# Build static site
mkdocs build

# Output will be in the 'site' directory
```

## 📝 Documentation Guidelines

This wiki focuses exclusively on **user-facing documentation**:

- ✅ Installation and setup instructions
- ✅ Feature explanations and tutorials
- ✅ Troubleshooting guides
- ✅ User workflows and best practices
- ❌ Developer documentation
- ❌ Backend implementation details
- ❌ Internal APIs or technical architecture
- ❌ Secrets, credentials, or sensitive URLs

## 🚀 Deployment

Documentation is automatically deployed to GitHub Pages via GitHub Actions:

- **Trigger**: Push to `main` branch
- **Build**: MkDocs with Material theme
- **Deploy**: Automatic deployment to GitHub Pages
- **URL**: https://noodlemctwoodle.github.io/OmniFetch-Wiki

## 🤝 Contributing

Improvements to user documentation are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes to the relevant `.md` files
4. Test locally with `mkdocs serve`
5. Submit a pull request

## 📞 Support

For app support and bug reports, please visit the main [OmniFetch repository](https://github.com/noodlemctwoodle/OmniFetch).

For documentation issues, create an issue in this repository.