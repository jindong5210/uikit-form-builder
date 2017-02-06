Handlebars.registerHelper('js_compare', function(expression, options) {
	
	expression = expression.replace(/\&lt\;/g,"<");
	expression = expression.replace(/\&gt\;/g,">");
	expression = expression.replace(/\&amp\;/g,"&");
	
	//@index
	expression = expression.replace(/\@index/g,options.data.index);
	
	var func;
	if (expression.indexOf('return') >= 0) {
		func = '(function(){' + expression + '})';
	} else {
		func = '(function(){return (' + expression + ')})';
	}
	var condition = eval.call(this, func).call(this);
	if (condition) {
		return options.fn(this, options.data);
	} else {
		return options.inverse(this, options.data);
	}
});
