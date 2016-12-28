module.exports = {
	takeScreenshot: true,
	verbose: false,
	timeoutInMs: 50000,
	testIterations: [
	    {
	    	testName: "Card with states by SQL BI",
	    	url: "https://msit.powerbi.com/groups/me/dashboards/374ac862-3301-46a5-aa9d-75b5a1d52557",
	    	iterationCount: 10,
	    	cssIframe: "",
	    	cssVisualElement: "div .cardWithStates > g > text",
	    },
	    {
	    	testName: "Chiclet Slicer",
	    	url: "https://msit.powerbi.com/groups/me/dashboards/548ef218-ee8a-4fbb-9c83-10b6ce4667d7",
	    	iterationCount: 10,
	    	cssIframe: "",
	    	cssVisualElement: "div .chicletSlicer",
	    },
	    {
	    	testName: "Hierarchy Slicer",
	    	url: "https://msit.powerbi.com/groups/me/dashboards/204dbce6-3396-42cb-a738-6f0d06a7c3f5",
	    	iterationCount: 10,
	    	cssIframe: "",
	    	cssVisualElement: "div .visual-HierarchySlicer1458836712039 .slicerBody"
	    },
	    {
	    	testName: "Smart Filter by SQL BI",
	    	url: "https://msit.powerbi.com/groups/me/dashboards/2c1135f6-cf88-4d39-9f78-3a676ad90a55",
	    	iterationCount: 10,
	    	cssIframe: "",
	    	cssVisualElement: "div .visual-SmartFilterBySQLBI1458262140625 .tokenLabel p",
	    },
	    {
	    	testName: "Attribute Slicer",
	    	url: "https://msit.powerbi.com/groups/me/dashboards/92d47e4f-150c-4ba5-bb9c-ec672cb6d39f",
	    	iterationCount: 10,
	    	cssIframe: "",
	    	cssVisualElement: "div .advanced-slicer div.list-display"
	    },
	    {
	    	testName: "Dial Gauge",
	    	url: "https://msit.powerbi.com/groups/me/dashboards/30fad7b3-b6bb-40bb-95b1-5a76bebfff50",
	    	iterationCount: 10,
	    	cssIframe: "",
	    	cssVisualElement: "div .visual-DialGauge1450749964276 > svg.gauge"
	    },
	    {
	    	testName: "Long TextViewer",
	    	url: "https://msit.powerbi.com/groups/me/dashboards/de6ddd6b-5ed6-44df-b29d-7b8de9792469",
	    	iterationCount: 10,
	    	cssIframe: "",
	    	cssVisualElement: "div .visual-LongTextViewer1453740445633 .textScrollVis"
	    },
	    {
	    	testName: "Scrolling Text Visual",
	    	url: "https://msit.powerbi.com/groups/me/dashboards/066ca72b-59ef-4a64-8f6b-8ad412da7902",
	    	iterationCount: 10,
	    	cssIframe: "",
	    	cssVisualElement: "div .visual-ScrollingTextVisual1448795304508 svg > text > *"
	    },
	    {
	    	testName: "Timeline",
	    	url: "https://msit.powerbi.com/groups/me/dashboards/85ecdf38-5fc6-4fe7-9dd5-d8754b333374",
	    	iterationCount: 10,
	    	cssIframe: "",
	    	cssVisualElement: "div .visual-Timeline1447991079100 .timeline"
	    },
	    {
	    	testName: "Aquarium",
	    	url: "https://msit.powerbi.com/groups/me/dashboards/a79bcc05-2cb8-4c23-b5ad-590dc729254a",
	    	iterationCount: 10,
	    	cssIframe: "",
	    	cssVisualElement: "div .visual-Aquarium1442671919391 .aquarium"
	    }
	]
};