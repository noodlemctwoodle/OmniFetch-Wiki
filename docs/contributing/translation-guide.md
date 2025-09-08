# OmniFetch Translation Contributor Guide

Thank you for helping translate OmniFetch! Your contributions help make the app accessible to users worldwide.

## 🌍 Getting Started

### Prerequisites
- Basic understanding of JSON format
- Familiarity with the app's functionality (recommended to use the app first)
- Text editor that supports UTF-8 encoding

### Language Support
OmniFetch uses iOS's native localization system. The app automatically detects and uses the device's language setting.

## 📝 Translation Process

### Step 1: Get the Template
1. Download `translation-template.json` from this folder
2. Create a copy and rename it to your language code (e.g., `es.json` for Spanish, `fr.json` for French)

### Step 2: Fill in Metadata
Update the `_contributor_info` section:
```json
"language_code": "es",        // ISO 639-1 code
"language_name": "Spanish",   // Full language name
"contributor_name": "Your Name",
"contributor_email": "optional@email.com",
"completion_date": "2025-01-09"
```

### Step 3: Translate Strings
For each translation key:
1. Read the `english` value
2. Consider the `context` provided
3. Fill in the `value` field with your translation
4. Respect the `max_length` constraint if specified

Example:
```json
"save": {
  "key": "ui.actions.save",
  "english": "Save",
  "value": "Guardar",  // Your translation here
  "context": "Button to save changes",
  "max_length": 15
}
```

## 📋 Translation Guidelines

### General Rules
1. **Be Concise**: Mobile UI has limited space. Respect max_length constraints.
2. **Be Consistent**: Use the same translation for the same term throughout.
3. **Keep Product Names**: Service names like "Sonarr", "Radarr" should not be translated.
4. **Technical Terms**: Common technical terms (API, URL, etc.) may remain in English if widely understood.

### UI Context
- **Navigation**: Keep short (< 20 characters) for tab bars
- **Buttons**: Action words, imperative mood (< 15 characters)
- **Status Messages**: Clear and informative (< 30 characters)
- **Error Messages**: Helpful and user-friendly (< 50 characters)

### Specific Considerations

#### Service Names
Do NOT translate:
- Sonarr
- Radarr
- Lidarr
- Jellyseerr
- SABnzbd
- NZBGet
- Prowlarr
- Plex

#### Technical Terms
Consider keeping in English if commonly used:
- API Key
- URL
- Port
- Token

## 🧪 Testing Your Translation

### Developer Testing
1. Place your translation file in the appropriate .lproj folder
2. Build and run the app in Xcode
3. Use Debug Menu > Localization to switch languages
4. Test all screens and features

### String Length Testing
- Navigation titles must fit in tab bars
- Button text must not overflow
- Error messages should be readable on small screens

## 📤 Submitting Your Translation

### Via GitHub (Preferred)
1. Fork the OmniFetch repository
2. Create a new branch: `translation-[language_code]`
3. Add your translation files to: `OmniFetch/Resources/[language_code].lproj/`
4. Create a pull request with:
   - Title: "Add [Language] translation"
   - Description: Translation coverage percentage and any notes

### Via Email
Send your completed JSON file to the development team with:
- Subject: "OmniFetch Translation - [Language]"
- Attach the completed JSON file
- Include any notes or questions

## ✅ Quality Checklist

Before submitting, ensure:
- [ ] All required fields have translations
- [ ] Translations respect max_length constraints
- [ ] Service names remain untranslated
- [ ] Consistent terminology throughout
- [ ] No placeholder text left (e.g., "TODO", "TRANSLATE THIS")
- [ ] Metadata section is complete
- [ ] File is valid JSON (use jsonlint.com to verify)

## 🔄 Updates and Maintenance

### Version Updates
When new features are added:
1. We'll update the template with new strings
2. Existing translators will be notified
3. Only new/changed strings need updating

### Reporting Issues
If you find translation issues:
1. Open an issue on GitHub
2. Specify the language and string key
3. Suggest the correction

## 💬 Common Translations Reference

### English → Spanish Example
```
Save → Guardar
Cancel → Cancelar
Settings → Configuración
Connected → Conectado
Error → Error
Loading... → Cargando...
```

### English → French Example
```
Save → Enregistrer
Cancel → Annuler
Settings → Paramètres
Connected → Connecté
Error → Erreur
Loading... → Chargement...
```

### English → German Example
```
Save → Speichern
Cancel → Abbrechen
Settings → Einstellungen
Connected → Verbunden
Error → Fehler
Loading... → Laden...
```

## 📞 Support

Need help with translation?
- Open a GitHub issue with the "translation" label
- Contact the development team
- Join our community discussions

## 🙏 Thank You!

Your contribution helps make OmniFetch accessible to more users worldwide. We appreciate your time and effort!
