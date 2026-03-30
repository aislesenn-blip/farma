import re

with open('style.css', 'r') as f:
    css = f.read()

# Make double sure there isn't a second 768px hiding somewhere
css = css.replace('@media (min-width: 768px)', '@media (min-width: 1024px)')

# Sometimes landscape orientation on phones triggers it, add max-device-width to be safe
css = css.replace('@media (min-width: 1024px)', '@media (min-width: 1024px) and (orientation: landscape)')

# For absolute certainty, let's fix the app container to not shrink into a tiny box on mobile browsers
# by ensuring it is fully width: 100vw
css = css.replace(
    'max-width: var(--max-content-width); /* Centered expansion */',
    'max-width: var(--max-content-width);'
)

css = css.replace(
    '.app-container {\n    display: flex;\n    max-width: 100vw;\n    overflow-x: hidden;\n    height: 100vh;\n    width: 100%;',
    '.app-container {\n    display: flex;\n    max-width: 100vw;\n    overflow-x: hidden;\n    height: 100vh;\n    width: 100vw;'
)

with open('style.css', 'w') as f:
    f.write(css)
