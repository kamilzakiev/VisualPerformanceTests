#Performance tests for visuals in Power BI
This tool allows to launch Selenium tests to measure load time of Power BI dashboards that includes specific custom visual

## Configuration
Check config.js file.
Use your own URL of dashboard that contains required visual. Also set CSS that is used to determine if visual is displayed or not.

## How to launch
1. Download and install appropriate [Edge Webdriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/). 
2. Add folder with MicrosoftWebDriver.exe file to the PATH variable.
3. Run `npm install` to install dependencies
4. Run `gulp start` to launch tests
