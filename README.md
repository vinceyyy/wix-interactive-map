# wix-interactive-map

Place a svg map as iframe on Wix, setting up messaging channel in the iframe and event listener on the parent window for interactivity.

This example uses the map to navigate to different pages, but it can be anything.

To use it, use Embed a Widget and paste the code from `map.html` in. Then open the Dev Mode and paste the code from `eventlistener.js` in.

You may need to change the url in `window.parent.postMessage(region, "https://editor.wix.com");` in `map.html` after publishing the site to make it work.

## Code Structure

1. map.html: The HTML file contains the svg map itself, CSS for styles and hover effect, and script tag for messaging with the parent page (at the bottom).
2. eventlistener.js: Add event listener onto the parent page.

## To create your own interactive map from the start

1. Find a svg map. The svg map used in this example comes from SimpleMaps: https://simplemaps.com/resources/svg-world
2. Process the svg file as you want. I merged all countries into North America, China, Southeast Asia, and the rest of the world using [Figma!](https://www.figma.com).
3. Copy the svg code (you can directly copy it from Figma) and insert it into Wix as an embeded widget (or HTML).
4. Make sure it displayed properly, give the svg path elements proper class and id, then add CSS and JavaScript into the svg code.
5. Open the Dev Mode on Wix and add [event listener!](https://dev.wix.com/api/iframe-sdk/sdk/using-the-sdk) on the parent page.
