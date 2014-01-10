this.LessonsContentCtrl = function($scope, $resource, shareLesson) {
    $scope.getContent = function(id) {
        var LessonContents;
        LessonContents = $resource("api/lessons/:id", {id: '@id'});
        $scope.contents = LessonContents.query({id: id});
    }
    
    $scope.currentIndex = 0;
    $scope.last = function () {
        return $scope.currentIndex == $scope.contents.length;
    }
    $scope.setCurrentPageIndex = function (index) {
        $scope.currentIndex = index;
    };

    $scope.isCurrentPageIndex = function (index) {
        return $scope.currentIndex === index;
    };
    
    $scope.prevPage = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.contents.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextPage = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.contents.length - 1;
    };

    $scope.lessonObject = shareLesson.shared;
};
