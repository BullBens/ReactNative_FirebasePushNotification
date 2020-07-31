// Enable debugging XMLHttpRequest in devtools.
if (__DEV__) {
	global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
	global.FormData = global.originalFormData || global.FormData;
	// global.Blob = global.originalBlob || global.Blob;
	global.FileReader = global.originalFileReader || global.FileReader;

	fetch; // Ensure to get the lazy property

	if (window.__FETCH_SUPPORT__) window.__FETCH_SUPPORT__.blob = false;
	// it's RNDebugger only to have
	else {
		/* Set __FETCH_SUPPORT__ to false is just work for `fetch`.
		 *  If you're using another way you can just use the native Blob and remove the `else` statement
		 */
		global.Blob = global.Blob = global.originalBlob || global.Blob;
		global.FileReader = global.originalFileReader || global.FileReader;
	}
}
