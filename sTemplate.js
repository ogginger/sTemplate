//function.js: Functional Logic.

define([
	"underscore"
], function(
	_
) {
  return function( Input ) {
	return _.template( Input.Template, Input.Options );
  };
});
