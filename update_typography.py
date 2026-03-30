import re

with open('style.css', 'r') as f:
    content = f.read()

# 1. Base font size
content = re.sub(
    r'(body\s*\{[^}]*font-family:[^;]+;)',
    r'\1\n    font-size: 16px;',
    content
)

# 2. Page titles and headings
content = re.sub(
    r'(\.page-title\s*\{[^\}]*font-size:\s*)2\.5rem',
    r'\g<1>2rem', # Make it bold but not too massive on mobile
    content
)

content = re.sub(
    r'(h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6\s*\{[^\}]*font-weight:\s*800;)',
    r'\1\n    line-height: 1.3;',
    content
)

# 3. Increase small text (rem to slightly larger rem, or explicit px)
content = re.sub(
    r'font-size:\s*0\.75rem;',
    r'font-size: 0.875rem; /* Up from 12px to 14px */',
    content
)

content = re.sub(
    r'font-size:\s*0\.875rem;',
    r'font-size: 1rem; /* Up from 14px to 16px */',
    content
)

content = re.sub(
    r'font-size:\s*0\.7rem;',
    r'font-size: 0.85rem; /* Up from 11.2px to 13.6px for nav labels */',
    content
)

# 4. Button and input text
content = re.sub(
    r'(\.btn-primary\s*\{[^\}]*font-size:\s*)1\.125rem;',
    r'\g<1>1.25rem;',
    content
)

content = re.sub(
    r'(\.chat-input\s*\{[^\}]*font-size:\s*)1rem;',
    r'\g<1>1.125rem;',
    content
)

with open('style.css', 'w') as f:
    f.write(content)
