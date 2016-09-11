angular.module("suspiciousEmployees", []).filter('suspicious', [function () {
  return function(employees,age) {

    var dateToday = new Date();
    var yyyy = dateToday.getFullYear();

    var cutoffYyyy = yyyy-age; //Return everybody who is too young to legally work

    var youngsters = [];

    var cutoffDate = new Date(cutoffYyyy);
    if (employees) {
        for (i=0; i<employees.length; i++) {
            var employeeDate = new Date(employees[i].birthdate);
            var employeeYear = employeeDate.getFullYear();
            if (employeeYear>cutoffDate) {
                youngsters.push(employees[i]);
            }
        }
    }

    return youngsters;
  }
}]);