import re

with open('style.css', 'r') as f:
    css = f.read()

# 1. Base font size
css = css.replace(
    'body {\n    font-size: 16px;\n    font-family:',
    'body {\n    font-size: 18px;\n    font-family:'
)

# 2. Page titles and headings
css = re.sub(
    r'(\.page-title\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>2.5rem;',
    css
)

# 3. Stats Icons and values (Dashboard)
css = re.sub(
    r'(\.stats-icon\s*\{[^\}]*width:\s*)48px;',
    r'\g<1>64px;',
    css
)
css = re.sub(
    r'(\.stats-icon\s*\{[^\}]*height:\s*)48px;',
    r'\g<1>64px;',
    css
)
css = re.sub(
    r'(\.stats-icon\s*\{[^\}]*font-size:\s*)1\.5rem;',
    r'\g<1>2rem;',
    css
)

css = re.sub(
    r'(\.stats-value\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>2rem;',
    css
)

# 4. Action Icons (Dashboard Actions)
css = re.sub(
    r'(\.action-icon\s*\{[^\}]*width:\s*)48px;',
    r'\g<1>64px;',
    css
)
css = re.sub(
    r'(\.action-icon\s*\{[^\}]*height:\s*)48px;',
    r'\g<1>64px;',
    css
)
css = re.sub(
    r'(\.action-icon\s*\{[^\}]*font-size:\s*)1\.25rem;',
    r'\g<1>2rem;',
    css
)

# 5. Buyer Logos (Crop Market)
css = re.sub(
    r'(\.buyer-logo\s*\{[^\}]*width:\s*)48px;',
    r'\g<1>64px;',
    css
)
css = re.sub(
    r'(\.buyer-logo\s*\{[^\}]*height:\s*)48px;',
    r'\g<1>64px;',
    css
)
css = re.sub(
    r'(\.buyer-logo\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>1.5rem;',
    css
)

# 6. Farm Location and Metrics (Land Market)
css = re.sub(
    r'(\.farm-location\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>1rem;',
    css
)
css = re.sub(
    r'(\.metric\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>1rem;',
    css
)

# 7. Button Icons
css = re.sub(
    r'(\.btn-icon\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>1.25rem;',
    css
)
css = re.sub(
    r'(\.btn-icon\s*\{[^\}]*min-height:\s*)[^;]+;',
    r'\g<1>56px;',
    css
)
css = re.sub(
    r'(\.btn-icon\s*\{[^\}]*min-width:\s*)[^;]+;',
    r'\g<1>56px;',
    css
)


# 8. Bottom Nav
css = re.sub(
    r'(\.bottom-nav\s*\{[^\}]*height:\s*)[^;]+;',
    r'\g<1>90px;',
    css
)
css = re.sub(
    r'(\.nav-item\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>2rem;',
    css
)
css = re.sub(
    r'(\.nav-item-label\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>1rem;',
    css
)

# 9. Small text adjustments (Stats Labels, Action Text)
css = re.sub(
    r'(\.stats-label\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>1.125rem;',
    css
)
css = re.sub(
    r'(\.action-text strong\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>1.25rem;',
    css
)
css = re.sub(
    r'(\.action-text span\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>1rem;',
    css
)

# 10. Card Padding
css = re.sub(
    r'(\.card\s*\{[^\}]*padding:\s*)[^;]+;',
    r'\g<1>32px;',
    css
)
css = re.sub(
    r'(\.stats-card\s*\{[^\}]*padding:\s*)[^;]+;',
    r'\g<1>32px;',
    css
)

with open('style.css', 'w') as f:
    f.write(css)
