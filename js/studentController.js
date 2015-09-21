
studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [
    {name: "Stacy Stiles"},
    {name: "Sam Thesham"},
    {name: "BigBoy Bobby"},
    {name: "Steve Bruel"},
    {name: "Barack Obama"},
    {name: "Omar Butterfield"}];

  $scope.addStudent = function() {
    $scope.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  };

  $scope.deleteStudent = function(student) {
    var index = $scope.students.indexOf(student);
    $scope.students.splice(index, 1); 
  }

});
