this.LessonsCtrl = function($scope, $resource, shareLesson) {
    var Lesson;
    var completedLessonsList;
    
    Lesson = $resource("api/lessons");
    completedLessonsList = $resource("api/lessons/list");
   
    $scope.lessons = Lesson.query();
    $scope.completedLessons = completedLessonsList.query();
    
    $scope.lessonObject = shareLesson.shared;
    
    $scope.toggle = function () {
        $scope.lessonObject.display = $scope.lessonObject.display === true ? false: true;
    };
    
    
    $scope.lessonComplete = function(lesson_id) {
        $scope.isComplete = false;
        _.each($scope.completedLessons, function(cl){
            console.log(cl);
            if(cl.lesson_id == lesson_id){
                $scope.isComplete = true;
            }
        });
        return $scope.isComplete;
    };

    $scope.completeLesson = function (lesson_id) {
        var LessonsUsers = $resource('api/lessons/complete', {}, {complete: {method:'POST', params:{lesson_id: lesson_id}}});
        var lesson_user =  new LessonsUsers();
        lesson_user.$complete();
        $scope.lessonObject.lesson_finished = true; 
        $scope.toggle();
    }
    
};
