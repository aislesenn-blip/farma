import re

with open('style.css', 'r') as f:
    css = f.read()

# Make Product Images Taller
css = re.sub(
    r'(\.product-img\s*\{[^\}]*height:\s*)120px;',
    r'\g<1>180px;',
    css
)

# Make Action Items chunkier
css = re.sub(
    r'(\.action-list li\s*\{[^\}]*padding:\s*)16px;',
    r'\g<1>24px;',
    css
)

# Make Filter Buttons chunkier
css = re.sub(
    r'(\.filter-btn\s*\{[^\}]*padding:\s*)12px 24px;',
    r'\g<1>16px 32px;',
    css
)
css = re.sub(
    r'(\.filter-btn\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>1.25rem;',
    css
)

# Make Primary Buttons chunkier
css = re.sub(
    r'(\.btn-primary\s*\{[^\}]*padding:\s*)18px 24px;',
    r'\g<1>24px 32px;',
    css
)
css = re.sub(
    r'(\.btn-primary\s*\{[^\}]*font-size:\s*)[^;]+;',
    r'\g<1>1.5rem;',
    css
)

# Fix any stray desktop overrides that might undo the chunkiness on desktop
css = css.replace('.action-list li { flex-direction: row; align-items: center; }', '.action-list li { flex-direction: row; align-items: center; padding: 24px; }')

with open('style.css', 'w') as f:
    f.write(css)
