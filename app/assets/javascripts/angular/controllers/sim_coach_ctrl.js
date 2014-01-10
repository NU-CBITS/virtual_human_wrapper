this.simCoachCtrl = function($scope, $resource, shareLesson) {
    var Lesson;
    Lesson = $resource("api/lessons");
    $scope.lessons = Lesson.query();
    
    $scope.lessonObject = shareLesson.shared;

    $scope.toggle = function () {
        $scope.lessonObject.display = $scope.lessonObject.display === true ? false: true;
    }

};
