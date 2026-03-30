import re

with open('style.css', 'r') as f:
    css = f.read()

# 1. Chat input area padding bottom (for virtual keyboard + extra space)
css = re.sub(
    r'(\.chat-input-area\s*\{[^\}]*padding-bottom:\s*)calc\(16px \+ env\(safe-area-inset-bottom\)\);',
    r'\g<1>calc(24px + env(safe-area-inset-bottom));\n    padding: 16px;\n    gap: 8px;',
    css
)

# 2. Chat header padding and gap (prevent horizontal clipping)
css = re.sub(
    r'(\.chat-header\s*\{[^\}]*padding:\s*)16px 24px;',
    r'\g<1>12px 16px;\n    gap: 8px;\n    flex-wrap: nowrap;\n    overflow-x: auto;',
    css
)
css = css.replace(
    ".chat-header-info {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n}",
    ".chat-header-info {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex: 1;\n    min-width: 0;\n}\n.chat-header-info h3 {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}"
)

# 3. Message bubbles
css = re.sub(
    r'(\.msg-bubble\s*\{[^\}]*padding:\s*)12px 16px;',
    r'\g<1>16px 20px;\n    font-size: 1.125rem;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.06);',
    css
)

with open('style.css', 'w') as f:
    f.write(css)
