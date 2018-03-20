

var testAngular = angular
					.module("myModule", [])
					.controller("emp_table", function($scope){
						var emp_det = {
							firstname: "Nilotpal",
							lastname: "Boruah",
							age: "28"
						};
						
						$scope.emp_det = emp_det;
					})
					
					