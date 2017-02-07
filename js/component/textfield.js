UKBuilder.components.textfield = function(){
	
	var comp = {
		
		text : '文本框',
			
		attrs : {
			
			defaultVal : {
				'class' :'',
				'label' : 'Label:',
				'type' : 'text',
				'size' : 'uk-form-width-medium',
				'name' : 'text1',
				'placeholder' : 'input here'
			},
			template : '<div class="uk-form-row"><label class="uk-form-label">ID</label>'
				+ '<div class="uk-form-controls"><input type="text" name="ID" value="{{ID}}"></div></div>'
				+ '<div class="uk-form-row"><label class="uk-form-label">名称</label>'
				+ '<div class="uk-form-controls"><input type="text" name="name" value="{{name}}"></div></div>'
				+ '<div class="uk-form-row"><label class="uk-form-label">标签</label>'
				+ '<div class="uk-form-controls"><input type="text" name="label" value="{{label}}"></div></div>'
				+ '<div class="uk-form-row"><label class="uk-form-label">类型</label>'
				+ '<div class="uk-form-controls"><input type="text" name="type" value="{{type}}"></div></div>'
				+ '<div class="uk-form-row"><label class="uk-form-label">大小</label>'
				+ '<div class="uk-form-controls"><select name="size">'
				+ '<option {{#js_compare "this.size == \'uk-form-width-large\'"}} selected="true" {{/js_compare}} value="uk-form-width-large">uk-form-width-large</option>'
				+ '<option {{#js_compare "this.size == \'uk-form-width-medium\'"}} selected="true" {{/js_compare}} value="uk-form-width-medium">uk-form-width-medium</option>'
				+ '<option {{#js_compare "this.size == \'uk-form-width-small\'"}} selected="true" {{/js_compare}} value="uk-form-width-small">uk-form-width-small</option>'
				+ '<option {{#js_compare "this.size == \'uk-form-width-mini\'"}} selected="true" {{/js_compare}} value="uk-form-width-mini">uk-form-width-mini</option>'
				+ '</select></div></div>'
				+ '<div class="uk-form-row"><label class="uk-form-label">Placeholder</label>'
				+ '<div class="uk-form-controls"><input type="text" name="placeholder" value="{{placeholder}}"></div></div>'
				+ '<div class="uk-form-row"><label class="uk-form-label">伪类</label>'
				+ '<div class="uk-form-controls"><input type="text" name="class" id="value="{{class}}"></div></div>',
			//render : function(data){}
		},
		
		template : '<div class="uk-form-row" data-component="textfield">'
			+ '<label class="uk-form-label" for="{{ID}}">{{label}}</label>'
			+ '<div class="uk-form-controls">'
			+ '	<input type="{{type}}" id="{{ID}}" placeholder="{{placeholder}}" name="{{name}}" class="{{size}} {{class}}">'
			+ '</div>'
			+ '</div>',
			
		//render : function(data){},
		//init : function(){}
	}
	
	return comp;
}();

