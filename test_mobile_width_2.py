from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Using a width of 800 which broke it earlier
        page = browser.new_page(viewport={"width": 800, "height": 1100})
        page.goto("http://localhost:3000")
        page.wait_for_timeout(1000)

        sidebar_visible = page.locator(".sidebar").is_visible()
        print(f"Sidebar visible at 800px width: {sidebar_visible}")

        nav_visible = page.locator(".bottom-nav").is_visible()
        print(f"Bottom nav visible at 800px width: {nav_visible}")

        browser.close()

if __name__ == "__main__":
    verify()
