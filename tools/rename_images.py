#!/usr/bin/env python3
"""
Rename image files to lowercase with dashes instead of spaces
"""

import os
import re
from pathlib import Path

def normalize_filename(filename):
    """Convert filename to lowercase with dashes"""
    # Remove file extension
    name, ext = os.path.splitext(filename)
    
    # Convert to lowercase and replace spaces with dashes
    normalized = name.lower().replace(' ', '-')
    
    # Remove multiple consecutive dashes
    normalized = re.sub(r'-+', '-', normalized)
    
    # Remove leading/trailing dashes
    normalized = normalized.strip('-')
    
    return normalized + ext

def rename_images_in_directory(directory):
    """Rename all image files in a directory"""
    directory = Path(directory)
    
    if not directory.exists():
        print(f"Directory does not exist: {directory}")
        return
    
    print(f"Processing directory: {directory}")
    
    # Find all image files
    image_extensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg']
    renamed_files = []
    
    for file_path in directory.iterdir():
        if file_path.is_file() and file_path.suffix.lower() in image_extensions:
            old_name = file_path.name
            new_name = normalize_filename(old_name)
            
            if old_name != new_name:
                new_path = file_path.parent / new_name
                
                # Check if target already exists
                if new_path.exists():
                    print(f"⚠️  Target exists, skipping: {old_name} → {new_name}")
                    continue
                
                try:
                    file_path.rename(new_path)
                    print(f"✅ Renamed: {old_name} → {new_name}")
                    renamed_files.append((old_name, new_name))
                except Exception as e:
                    print(f"❌ Error renaming {old_name}: {e}")
            else:
                print(f"📋 No change needed: {old_name}")
    
    return renamed_files

def main():
    """Main function"""
    base_path = Path("/Users/noodlemctwoodle/GitHub/OmniFetch-Wiki/docs/assets/images")
    
    # Directories to process
    directories = [
        base_path / "add-service",
        base_path / "service-icons",
        base_path,  # Root images directory
    ]
    
    all_renames = {}
    
    for directory in directories:
        if directory.exists():
            print(f"\n🔄 Processing {directory.name}:")
            renames = rename_images_in_directory(directory)
            if renames:
                all_renames[str(directory)] = renames
        else:
            print(f"⚠️  Directory not found: {directory}")
    
    # Summary
    print(f"\n📊 Summary:")
    total_renamed = sum(len(renames) for renames in all_renames.values())
    print(f"Total files renamed: {total_renamed}")
    
    if all_renames:
        print(f"\n📋 Rename mapping for updating documentation:")
        for directory, renames in all_renames.items():
            print(f"\n{directory}:")
            for old_name, new_name in renames:
                print(f"  {old_name} → {new_name}")

if __name__ == "__main__":
    main()