app.controller("LoginController", function ($scope, $window) {
    $scope.user = { email: "", password: "" };

    $scope.users = [
        { email: "dnyandev@gmail.com", password: "test" },
        { email: "abc@gmail.com", password: "234" },
        { email: "klm@gmail.com", password: "143323" }
    ];

    $scope.onValidate = function () {
        var matchedUser = $scope.users.find(
            user => user.email === $scope.user.email && user.password === $scope.user.password
        );

        if (matchedUser) {
            localStorage.setItem("loggedInUser", matchedUser.email);
            $scope.$applyAsync(function () {
                $window.location.href = "index.html"; // Redirect to product page
            });
        } else {
            $scope.errorMessage = "Invalid credentials. Please try again.";
        }
    };
});