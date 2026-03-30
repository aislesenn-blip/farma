import re

with open('style.css', 'r') as f:
    css = f.read()

# Restore some things that got too big from the massive global replace
css = css.replace("font-size: 1.125rem; /* Up from 14px to 16px */ /* Up from 12px to 14px */", "font-size: 0.875rem;")
css = css.replace("font-size: 1.125rem; /* Up from 14px to 16px */", "font-size: 1rem;")
css = css.replace("font-size: 1.25rem; /* Up from 14px to 16px */", "font-size: 1.125rem;")

# Reset small utility text that shouldn't be massive
css = re.sub(r'(\.stats-label\s*\{[^\}]*font-size:\s*)[^;]+;', r'\g<1>0.875rem;', css)
css = re.sub(r'(\.farm-location\s*\{[^\}]*font-size:\s*)[^;]+;', r'\g<1>0.875rem;', css)
css = re.sub(r'(\.metric\s*\{[^\}]*font-size:\s*)[^;]+;', r'\g<1>0.875rem;', css)
css = re.sub(r'(\.product-supplier\s*\{[^\}]*font-size:\s*)[^;]+;', r'\g<1>0.875rem;', css)
css = re.sub(r'(\.badge\s*\{[^\}]*font-size:\s*)[^;]+;', r'\g<1>0.875rem;', css)
css = re.sub(r'(\.nav-item-label\s*\{[^\}]*font-size:\s*)[^;]+;', r'\g<1>0.85rem;', css)
css = re.sub(r'(\.action-text span\s*\{[^\}]*font-size:\s*)[^;]+;', r'\g<1>0.875rem;', css)
css = re.sub(r'(\.buyer-details p\s*\{[^\}]*font-size:\s*)[^;]+;', r'\g<1>0.875rem;', css)
css = re.sub(r'(\.msg-time\s*\{[^\}]*font-size:\s*)[^;]+;', r'\g<1>0.875rem;', css)

# Make headers bold but scaled correctly
css = re.sub(r'(\.page-title\s*\{[^\}]*font-size:\s*)[^;]+;', r'\g<1>1.75rem;', css)

with open('style.css', 'w') as f:
    f.write(css)
