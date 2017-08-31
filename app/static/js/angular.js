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
		if ($scope.one != null) {
			$scope.list = $scope.one;
			alert('You can now edit item one');
			$scope.one = null;
		}
	};
	$scope.edit2 = function () {
		alert('You can edit item two');
		$scope.list = $scope.name1;
	};
	$scope.edit3 = function () {
		if ($scope.three != null) {
			$scope.list = $scope.three;
			alert('You can now edit item three');
			$scope.three = null;
		}
	};
	$scope.edit4 = function () {
		if ($scope.four != null) {
			$scope.list = $scope.four;
			alert('You can now edit item one');
			$scope.four = null;
		}
	};
	$scope.edit5 = function () {
		if ($scope.five != null) {
			$scope.list = $scope.fiv;
			alert('You can now edit item five');
			$scope.one = null;
		}
	};
	$scope.edit6 = function () {
		if ($scope.six != null) {
			$scope.list = $scope.six;
			alert('You can now edit item six');
			$scope.one = null;
		}
	};
	$scope.edit7 = function () {
		if ($scope.seven != null) {
			$scope.list = $scope.seven;
			alert('You can now edit item seven');
			$scope.seven = null;
		}
	};
	$scope.edit8 = function () {
		if ($scope.eight != null) {
			$scope.list = $scope.eight;
			alert('You can now edit item eight');
			$scope.eight = null;
		}
	};
	$scope.edit9 = function () {
		if ($scope.nine != null) {
			$scope.list = $scope.nine;
			alert('You can now edit item nine');
			$scope.nine = null;
		}
	};
	$scope.edit10 = function () {
		if ($scope.ten != null) {
			$scope.list = $scope.ten;
			alert('You can now edit item ten');
			$scope.ten = null;
		}
	};
	//deleting items in the list
	$scope.delete1 = function () {
		if ($scope.one != null) {
			$scope.one = null;
			alert('Item one has been deleted');
		}
	};
	$scope.delete2 = function () {
		if ($scope.two != null) {
			$scope.two = null;
			alert('Item two has been deleted');
		}
	};
	$scope.delete3 = function () {
		if ($scope.three != null) {
			$scope.three = null;
			alert('Item three has been deleted');
		}
	};
	$scope.delete4 = function () {
		if ($scope.four != null) {
			$scope.four = null;
			alert('Item four has been deleted');
		}
	};
	$scope.delete5 = function () {
		if ($scope.five != null) {
			$scope.five = null;
			alert('Item five has been deleted');
		}
	};
	$scope.delete6 = function () {
		if ($scope.one != null) {
			$scope.six = null;
			alert('Item six has been deleted');
		}
	};
	$scope.delete7 = function () {
		if ($scope.seven != null) {
			$scope.seven = null;
			alert('Item seven has been deleted');
		}
	};
	$scope.delete8 = function () {
		if ($scope.eight != null) {
			$scope.eight = null;
			alert('Item eight has been deleted');
		}
	};
	$scope.delete9 = function () {
		if ($scope.nine != null) {
			$scope.nine = null;
			alert('Item nine has been deleted');
		}
	};
	$scope.delete10 = function () {
		if ($scope.ten != null) {
			$scope.ten = null;
			alert('Item ten has been deleted');
		}
	};
});