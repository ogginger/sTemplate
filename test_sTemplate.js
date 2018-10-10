//test_sTemplate.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "sTemplate",
	"tests/sTemplate_Template_Options_ReturnsRendering"
], function(
  TestSuite,
  log,
  sTemplate,
	sTemplate_Template_Options_ReturnsRendering
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_sTemplate initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "sTemplate" );
            xTestSuite.add( sTemplate_Template_Options_ReturnsRendering );
      xTestSuite.test();
    }
  });
});
