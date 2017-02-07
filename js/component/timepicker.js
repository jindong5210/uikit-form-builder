UKBuilder.components.timepicker = function(){
	
	var comp = {
		
		text : '时间选择',
			
		attrs : {
			
			defaultVal : {
				'class' :'',
				'label' : 'Label:',
				'size' : 'uk-form-width-medium',
				'name' : 'timepicker1',
			},
			template : '<div class="uk-form-row"><label class="uk-form-label">ID</label>'
				+ '<div class="uk-form-controls"><input type="text" name="ID" value="{{ID}}"></div></div>'
				+ '<div class="uk-form-row"><label class="uk-form-label">名称</label>'
				+ '<div class="uk-form-controls"><input type="text" name="name" value="{{name}}"></div></div>'
				+ '<div class="uk-form-row"><label class="uk-form-label">标签</label>'
				+ '<div class="uk-form-controls"><input type="text" name="label" value="{{label}}"></div></div>'
				+ '<div class="uk-form-row"><label class="uk-form-label">大小</label>'
				+ '<div class="uk-form-controls"><select name="size">'
				+ '<option {{#js_compare "this.size == \'uk-form-width-large\'"}} selected="true" {{/js_compare}} value="uk-form-width-large">uk-form-width-large</option>'
				+ '<option {{#js_compare "this.size == \'uk-form-width-medium\'"}} selected="true" {{/js_compare}} value="uk-form-width-medium">uk-form-width-medium</option>'
				+ '<option {{#js_compare "this.size == \'uk-form-width-small\'"}} selected="true" {{/js_compare}} value="uk-form-width-small">uk-form-width-small</option>'
				+ '<option {{#js_compare "this.size == \'uk-form-width-mini\'"}} selected="true" {{/js_compare}} value="uk-form-width-mini">uk-form-width-mini</option>'
				+ '</select></div></div>'
				+ '<div class="uk-form-row"><label class="uk-form-label">伪类</label>'
				+ '<div class="uk-form-controls"><input type="text" name="class" id="value="{{class}}"></div></div>',
			//render : function(data){}
		},
		
		template : '<div class="uk-form-row" data-component="textfield">'
			+ '<label class="uk-form-label" for="{{ID}}">{{label}}</label>'
			+ '<div class="uk-form-controls">'
			+ '<input type="text" id="{{ID}}" name="{{name}}" class="{{size}} {{class}}" data-uk-timepicker="{format:\'24h\'}">'
			+ '</div>'
			+ '</div>',
			
		//render : function(data){},
		init : function(el){
//			var timepicker = UIkit.datepicker(el, {
//				format:'24h'
//			});
		}
	}
	
	return comp;
}();

