// register validation
var register = angular.module('register', []);
register.controller('registerCtrl', function ($scope, $http) {
	$scope.actionURL = "login.html";
	$scope.regUsr = function () {
		localStorage.username = $scope.regUser;
		localStorage.password = $scope.regPass;
		if ($scope.regPass == $scope.regConfirm) {
			alert("Thanks for signing up");
			location.href = $scope.actionURL;
		} else {
			alert("Passwords do not match");
		}
	}
});

var valApp = angular.module('valApp', []);
valApp.controller('form1Ctrl', function ($scope) {
	$scope.actionURL = "home.html"
	$scope.regShow = function () {
		if ($scope.usr == null) {
			$scope.usr = localStorage.username;
		}
	};
	$scope.editLogin = function () {
		localStorage.removeItem("username");
	};
	$scope.submitForm1 = function () {
		localStorage.username = $scope.usr;
		if ($scope.usr != localStorage.username) {
			alert("The username does not exist!");
			return false;
		}
	};
	// reset username
	$scope.resetUser = function () {
		localStorage.removeItem("username");

	};

});

var homeApp = angular.module('homeApp', []);
// create angular controller
homeApp.controller('goalCtrl', function ($scope, $http) {

	//appending username
	$scope.homeName = function () {
		$scope.user = localStorage.username;
	};
	//timer for flash message
	$scope.timer = function () {
		setTimeout(function () {
			$scope.flashes = true;
		}, 3000000);
	};
	//logging out
	$scope.signOut = function () {
		var answer = confirm("Oh no! Are you sure you want to leave this page?");
		if (!answer) {
			alert("Thanks for staying");
			event.preventDefault();
		} else {
			alert("Bye!");
		}
	};
	//adding items to the list
	$scope.submitForm = function () {

		if ($scope.list != null && $scope.one == null) {
			alert('Congrats, Item one has been updated');
			localStorage.e1 = $scope.list;
			$scope.one = localStorage.e1;
			$scope.list = null;
			$scope.actionURL = "/store";
		}
		if ($scope.list != null && $scope.two == null) {
			alert('Congrats, Item two has been updated');
			localStorage.e2 = $scope.list;
			alert('Item in localStorage');
			$scope.two = localStorage.e2
			$scope.list = null;
		}
		if ($scope.list != null && $scope.three == null) {
			alert('Congrats, Item three has been updated');
			$scope.three = $scope.list;
			$scope.list = null;
		}
		if ($scope.list != null && $scope.four == null) {
			alert('Congrats, Item four has been updated');
			$scope.four = $scope.list;
			$scope.list = null;
		}
		if ($scope.list != null && $scope.five == null) {
			alert('Congrats, item five has been updated');
			$scope.five = $scope.list;
			$scope.list = null;
		}
		if ($scope.list != null && $scope.six == null) {
			alert('Congrats, Item six has been updated');
			$scope.six = $scope.list;
			$scope.list = null;
		}
		if ($scope.list != null && $scope.seven == null) {
			alert('Congrats, Item seven has been updated');
			$scope.seven = $scope.list;
			$scope.list = null;
		}
		if ($scope.list != null && $scope.eight == null) {
			alert('Congrats, Item eight has been updated');
			$scope.eight = $scope.list;
			$scope.list = null;
		}
		if ($scope.list != null && $scope.nine == null) {
			alert('Congrats, Item nine has been updated');
			$scope.nine = $scope.list;
			$scope.list = null;
		}
		if ($scope.list != null && $scope.ten == null) {
			alert('Congrats, Item ten has been updated');
			$scope.ten = $scope.list;
			$scope.list = null;
		};

	};

	//editing the bucket list
	$scope.edit1 = function () {
		var item1 = document.getElementById("item1").innerHTML;
		if (item1 != "") {
			var answer = confirm("Are you sure you want edit item one?");
			if (!answer) {
				alert("Editing has been cancelled");
				event.preventDefault();
			} else {
				localStorage.details = item1;
				$scope.list = localStorage.details;
				item1 = "deleted";
			}
		} else {
			alert("Cannot edit an empty item!");
			event.preventDefault();
		}
	};
	$scope.edit2 = function () {
		var item2 = document.getElementById("item2").innerHTML;
		if (item2 != ""){
			var answer = confirm("Are you sure you want edit item two?");
			if (!answer) {
				alert("Editing has been cancelled");
				event.preventDefault();
			} else {
				localStorage.details = item2;
				$scope.list = localStorage.details;
				item2 = "";
			}
		} else {
			alert("Cannot edit an empty item!");
			event.preventDefault();
		}
		
	};
	$scope.edit3 = function () {
		var item3 = document.getElementById("item3").innerHTML;
		if (item3 != "") {
			var answer = confirm("Are you sure you want edit item three?");
			if (!answer) {
				alert("Editing has been cancelled");
				event.preventDefault();
			} else {
				localStorage.details = item3;
				$scope.list = localStorage.details;
				item3 = "";
			}
		}else {
			alert("Cannot edit an empty item!");
			event.preventDefault();
		}
		
	};
	$scope.edit4 = function () {
		var item4 = document.getElementById("item4").innerHTML;
		if (item4 != "") {
			var answer = confirm("Are you sure you want edit item four?");
			if (!answer) {
				alert("Editing has been cancelled");
				event.preventDefault();
			} else {
				localStorage.details = item4;
				$scope.list = localStorage.details;
				item4 = "";
			}
		}else {
			alert("Cannot edit an empty item!");
			event.preventDefault();
		}
		
	};
	$scope.edit5 = function () {
		var item5 = document.getElementById("item5").innerHTML;
		if (item5 != "") {
			var answer = confirm("Are you sure you want edit item five?");
			if (!answer) {
				alert("Editing has been cancelled");
				event.preventDefault();
			} else {
				localStorage.details = item5;
				$scope.list = localStorage.details;
				item5 = "";
			}
		}else {
			alert("Cannot edit an empty item!");
			event.preventDefault();
		}
		
	};
	$scope.edit6 = function () {
		var item6 = document.getElementById("item6").innerHTML;
		if (item6 != "") {
			var answer = confirm("Are you sure you want edit item six?");
			if (!answer) {
				alert("Editing has been cancelled");
				event.preventDefault();
			} else {
				localStorage.details = item6;
				$scope.list = localStorage.details;
				item6 = "";
			}
		}else {
			alert("Cannot edit an empty item!");
			event.preventDefault();
		}
		
	};
	$scope.edit7 = function () {
		var item7 = document.getElementById("item7").innerHTML;
		if (item7 != "") {
			var answer = confirm("Are you sure you want edit item seven?");
			if (!answer) {
				alert("Editing has been cancelled");
				event.preventDefault();
			} else {
				localStorage.details = item7;
				$scope.list = localStorage.details;
				item7 = "";
			}
		}else {
			alert("Cannot edit an empty item!");
			event.preventDefault();
		}
		
	};
	$scope.edit8 = function () {
		var item8 = document.getElementById("item8").innerHTML;
		if (item8 != "") {
			var answer = confirm("Are you sure you want edit item eight?");
			if (!answer) {
				alert("Editing has been cancelled");
				event.preventDefault();
			} else {
				localStorage.details = item8;
				$scope.list = localStorage.details;
				item8 = "";
			}
		}else {
			alert("Cannot edit an empty item!");
			event.preventDefault();
		}
		
	};
	$scope.edit9 = function () {
		var item9 = document.getElementById("item9").innerHTML;
		if (item9 != "") {
			var answer = confirm("Are you sure you want edit item nine?");
			if (!answer) {
				alert("Editing has been cancelled");
				event.preventDefault();
			} else {
				localStorage.details = item9;
				$scope.list = localStorage.details;
				item9 = "";
			}
		}else {
			alert("Cannot edit an empty item!");
			event.preventDefault();
		}
		
	};
	$scope.edit10 = function () {
		var item10 = document.getElementById("item10").innerHTML;
		if (item10 != ""){
			var answer = confirm("Are you sure you want edit item ten?");
			if (!answer) {
				alert("Editing has been cancelled");
				event.preventDefault();
			} else {
				localStorage.details = item10;
				$scope.list = localStorage.details;
				item10 = "";
			}
		}else {
			alert("Cannot edit an empty item!");
			event.preventDefault();
		}
		
	};
	//deleting items in the list
	$scope.delete = function () {
		var answer = confirm("Are you sure you want to delete the item?");
		if (!answer) {
			alert("The item has not been deleted");
			event.preventDefault();
		} else {
			alert("Deleted!");
		}
	};

	//image uploader
	$scope.profile = function () {
		var filename = document.getElementById("imageSubmit").value;
		alert(filename);
	};

});