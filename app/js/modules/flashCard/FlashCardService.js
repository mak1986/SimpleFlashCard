(function(){
	'use strict';

	angular.module('FlashCard').service('FlashCardService', FlashCardService);

	function FlashCardService() {
	  return {
	    getData: function() {
	      return [
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
				];
	    }
	  }; 
	}

})();