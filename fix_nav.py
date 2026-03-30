import re

with open('style.css', 'r') as f:
    css = f.read()

# 1. Floating Pill Bottom Nav adjustments
css = re.sub(
    r'(\.bottom-nav\s*\{[^\}]*height:\s*)72px;',
    r'\g<1>80px;', # Taller for larger touch targets
    css
)

css = css.replace(
    ".nav-item {\n    display: flex;",
    ".nav-item {\n    display: flex;\n    padding: 8px;"
)

css = re.sub(
    r'(\.nav-item\s*\{[^\}]*font-size:\s*)1\.25rem;',
    r'\g<1>1.5rem;', # Bigger icons in bottom nav
    css
)

css = re.sub(
    r'(\.nav-item-label\s*\{[^\}]*font-size:\s*)0\.85rem;',
    r'\g<1>0.75rem;\n    margin-top: 8px;', # Keep text small but readable, spacing better
    css
)

css = re.sub(
    r'(\.nav-item\.active::after\s*\{[^\}]*top:\s*)8px;',
    r'\g<1>4px;\n    width: 8px;\n    height: 8px;', # Better dot placement
    css
)

# 2. Icon Buttons minimum 48px
css = re.sub(
    r'(\.btn-icon\s*\{[^\}]*padding:\s*)12px 20px;',
    r'\g<1>12px 16px;\n    min-height: 48px;\n    min-width: 48px;\n    justify-content: center;',
    css
)

# 3. Mobile Extended Menu Touch targets
css = re.sub(
    r'(\.menu-item\s*\{[^\}]*padding:\s*)12px 0;',
    r'\g<1>20px 0;\n    font-size: 1.125rem;', # Taller menu items (easy to tap)
    css
)

with open('style.css', 'w') as f:
    f.write(css)
