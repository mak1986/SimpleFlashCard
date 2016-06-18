(function(){
	'use strict';
	
	angular.module('FlashCard').controller('FlashCardController', FlashCardController);
	
	FlashCardController.$inject = ['FlashCardService'];

	function FlashCardController(FlashCardService){
		var vm = this;
		vm.data = FlashCardService.getData();
		
		vm.test = function(){
			return 'this is a test';
		};
	}
	
})();