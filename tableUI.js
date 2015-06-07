// JavaScript Document
(function($){
	//插件的名字
	$.fn.tableUI = function(options){
		//各种属性、参数	
		var defaults = {
			evenRowClass: 'evenRowClass',	
			oddRowClass: 'oddRowClass',
			activeRowClass: 'activeRowClass'
		};
		var options = $.extend(defaults, options);
	
		return this.each(function(){
			//插件代码	
			var $this = $(this);
			//添加奇偶行的颜色
			$($this).find('tr:even').addClass(options.evenRowClass);
			$($this).find('tr:odd').addClass(options.oddRowClass);
			$($this).find('tr').bind('mouseover', function(){
				$(this).addClass(options.activeRowClass);	
			});
			$($this).find('tr').bind('mouseout', function(){
				$(this).removeClass(options.activeRowClass);	
			});
		});
	};
	
})(jQuery);
