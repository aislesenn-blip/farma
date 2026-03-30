import re

with open('style.css', 'r') as f:
    css = f.read()

# 1. Weather hero fix (remove min-width 300px which breaks mobile)
css = re.sub(
    r'(\.weather-main\s*\{[^\}]*min-width:\s*)300px;',
    r'\g<1>100%;',
    css
)
css = re.sub(
    r'(\.weather-alerts\s*\{[^\}]*min-width:\s*)300px;',
    r'\g<1>100%;',
    css
)

# 2. Fix Stats Cards to align nicely (don't force horizontal squish)
# We want stats-card to flex-direction: column on mobile, row on desktop.
# We'll set column as default in the main class block.
css = css.replace(
    ".stats-card {\n    display: flex;\n    flex-direction: row; /* Horizontal layout for single column */",
    ".stats-card {\n    display: flex;\n    flex-direction: column; /* Vertical layout on small mobile */\n    text-align: center;"
)

# 3. Fix Action List items (squished text next to icon)
css = css.replace(
    ".action-list li {\n    display: flex;\n    align-items: center;",
    ".action-list li {\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 12px;"
)
css = css.replace(
    ".action-icon {\n    width: 40px;",
    ".action-icon {\n    width: 48px; /* Larger */\n    height: 48px;\n    font-size: 1.25rem;"
)

# 4. Filters Bar (allow proper horizontal scrolling)
css = re.sub(
    r'(\.filters-bar\s*\{[^\}]*overflow-x:\s*)auto;',
    r'\g<1>auto;\n    scroll-snap-type: x mandatory;\n    -webkit-overflow-scrolling: touch;',
    css
)
css = css.replace(
    ".filter-btn {",
    ".filter-btn {\n    scroll-snap-align: start;"
)

# 5. Fix Buyer Cards (Crop Market)
css = css.replace(
    ".buyer-card {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;",
    ".buyer-card {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    justify-content: space-between;"
)
css = css.replace(
    ".buyer-action {\n    text-align: right;\n}",
    ".buyer-action {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-top: 1px solid rgba(0,0,0,0.05);\n    padding-top: 16px;\n    text-align: left;\n}"
)

# Add Desktop Overrides for the above classes so they go back to horizontal on PC
desktop_query_end = css.rfind("}")
desktop_overrides = """
    .stats-card { flex-direction: row; text-align: left; }
    .action-list li { flex-direction: row; align-items: center; }
    .buyer-card { flex-direction: row; align-items: center; }
    .buyer-action { width: auto; border-top: none; padding-top: 0; text-align: right; display: block; }
"""
css = css[:desktop_query_end-1] + desktop_overrides + css[desktop_query_end-1:]

with open('style.css', 'w') as f:
    f.write(css)
