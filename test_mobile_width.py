from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Using a very wide phone footprint (e.g. iPad Mini or pro max landscape) to see if it triggers sidebar incorrectly
        page = browser.new_page(viewport={"width": 800, "height": 1100})
        page.goto("http://localhost:3000")
        page.wait_for_timeout(1000)

        # Check if sidebar is visible (it shouldn't be under 1024px)
        sidebar_visible = page.locator(".sidebar").is_visible()
        print(f"Sidebar visible at 800px width: {sidebar_visible}")

        # Check if bottom nav is visible (it should be)
        nav_visible = page.locator(".bottom-nav").is_visible()
        print(f"Bottom nav visible at 800px width: {nav_visible}")

        # Ensure the body width doesn't exceed viewport (no horizontal overflow)
        body_width = page.evaluate("document.body.scrollWidth")
        viewport_width = page.evaluate("window.innerWidth")
        print(f"Body Width: {body_width}, Viewport Width: {viewport_width}")

        browser.close()

if __name__ == "__main__":
    verify()
