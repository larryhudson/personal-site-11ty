---
title: Editor font zoom in VS Code
date: 2020-02-22
tags: ['post', 'vs code']
---

By default, zoom  in VS Code (`Control+Shift+=` to zoom in and `Control+-` to zoom out) zooms the whole interface - your editor text, your sidebar, your terminal at the bottom all get bigger or smaller. Personally, when I use zoom I just want it to change the size of the editor text.

Luckily, VS Code has separate command for just zooming the editor font. These show up when you search in the Command Palette (`Control+Shift+P`):
- `Editor Font Zoom In`
- `Editor Font Zoom Out`

### Changing the keyboard shortcuts
To change the keyboard shortcuts so they only zoom the editor font, you just need to:

1. Open the Command Palette (`Control+Shift+P`) and type Keyboard Shortcuts. Choose `Preferences: Open Keyboard Shortcuts`.
2. Search for `zoom`. You'll see a few results, including those for global zoom and editor font zoom.
3. If you want to replace the global zoom shortcuts with editor font zoom, you first need to remove the keybindings from `View: Zoom In` and `View: Zoom Out`. You can right-click them and choose `Remove Keybinding` or select them and hit the delete key. 
4. Add the new keybindings for `Editor Font Zoom In` and `Editor Font Zoom Out`. You just select `Editor Font Zoom In` and click the `+` on the left hand side, type the keybinding you want (eg. `Control+Shift+=`) and then press enter.

Note: you might need to open new VS Code windows for these changes to take effect. If the keyboard shortcuts are still zooming the whole interface, you'll need to make sure that you have removed the keybindings from `View: Zoom In` and `View: Zoom Out` (see step 3 above)