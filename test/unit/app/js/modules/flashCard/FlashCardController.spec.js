(function(){
	'use strict';

	beforeEach(angular.mock.module('FlashCard'));

	describe('String alias arg', function() {
		it('should load module with string alias', function(){
			expect('what?').toBe('what?');
		});
	});

	describe('FlashCard data service', function(){

		it('should return expected data', function(){
			var service;

			angular.mock.inject(function(FlashCardService){
				service = FlashCardService;
			});

			var data = service.getData();
	
			expect(data).toEqual([
					{
						"question":"Question 1",
						"answer":"Answer 1"
					},
					{
						"question":"Question 2",
						"answer":"Answer 2"
					},
					{
						"question":"Question 3",
						"answer":"Answer 3"
					},
					{
						"question":"Question 4",
						"answer":"Answer 4"
					}
				]);
		});
	});

	describe('FlashCard controller', function(){
		
		var $controller;

		beforeEach(inject(function(_$controller_){
			$controller = _$controller_;
		}));

		it('should run the test method', function(){
			
			var ctrl = $controller('FlashCardController');

			expect(ctrl.test()).toEqual('this is a test');
		});
	});
})();