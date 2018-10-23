//_Template_Options_ReturnsRendering.js: Testing logic.

define([
	"sTemplate"
], function(
	sTemplate
) {
	return {
		"Name":"Template_Options_ReturnsRendering",
		"Input": {
			"Template": "<%= Name %>.js:Description.",
			"Options": {
				"Name": "Function_Input_Behavior"
			}
		},
		"Function": function( Input ) {
			try {
				var rendering = sTemplate( Input );
				console.log( rendering );
			} catch ( error ) {
				console.log( error );
			} finally {
				return rendering;
			}
		},
		"ExpectedOutput": "Function_Input_Behavior.js:Description.",
		"Debug": true
	};
});
