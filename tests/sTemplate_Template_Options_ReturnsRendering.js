//_Template_Options_ReturnsRendering.js: Testing logic.

define([
	"sTemplate"
], function(
	sTemplate
) {
	return {
		"Name":"_Template_Options_ReturnsRendering",
		"Input": {
			"Template": "<%= Options.Name %>.js:Description.",
			"Options": {
				"Name": "Function_Input_Behavior"
			}
		},
		"Function": sTemplate,
		"ExpectedOutput": "Function_Input_Behavior.js:Description."
	};
});
