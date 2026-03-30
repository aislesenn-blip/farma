import re

with open('style.css', 'r') as f:
    css = f.read()

# 1. Change the desktop media query from 768px (which many modern large phones hit in landscape or via high density)
# to 1024px to ensure it only applies to real desktop/large tablet layouts.
css = css.replace('@media (min-width: 768px)', '@media (min-width: 1024px)')

# 2. Add strict max-width constraints to prevent horizontal overflow tricking the viewport
css = css.replace(
    'width: 100%;\n    max-width: var(--max-content-width); /* Centered expansion */',
    'width: 100%;\n    max-width: var(--max-content-width); /* Centered expansion */\n    max-width: 100vw; /* Strict mobile constraint */'
)

css = css.replace(
    'body {\n    font-size: 16px;\n\n    font-family:',
    'body {\n    font-size: 16px;\n    font-family:'
)

# Fix some flex/grid issues causing horizontal overflow
css = css.replace(
    '.app-container {\n    display: flex;',
    '.app-container {\n    display: flex;\n    max-width: 100vw;\n    overflow-x: hidden;'
)

# Ensure the main content doesn't break out
css = css.replace(
    '.main-content {\n    flex: 1;',
    '.main-content {\n    flex: 1;\n    width: 100%;\n    max-width: 100vw;\n    overflow-x: hidden;'
)

# Fix filters-bar so it doesn't push the screen out
css = css.replace(
    '.filters-bar {\n    display: flex;\n    gap: 8px;',
    '.filters-bar {\n    display: flex;\n    gap: 8px;\n    width: 100%;\n    max-width: 100vw;\n    padding: 16px;'
)

with open('style.css', 'w') as f:
    f.write(css)
