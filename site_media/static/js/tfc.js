var app = angular.module("tfc", ['infinite-scroll', 'angular.filter', 'truncate', 'angularMoment']);

app.controller("Media", function($scope, $http, Reddit, $sce) {

  moment.locale('en', {
      relativeTime : {
          future: "in %s",
          past:   "%s",
          s:  "Today",
          m:  "Today",
          mm: "Today",
          h:  "Today",
          hh: "Today",
          d:  "Today",
          dd: "%d days ago",
          M:  "a month ago",
          MM: "%d months ago",
          y:  "a year ago",
          yy: "%d years ago"
      }
  });
  $scope.reddit = new Reddit('https://bboyrankingz.com/media/search/total%20feeling%20crew.json');

  $http.get('https://bboyrankingz.com/crews/members/total-feeling-crew.json').
    success(function(data, status, headers, config) {
      $scope.members = data["results"];
    });

 $scope.open = function(id) {
    $http.get('https://bboyrankingz.com/media/embed/' + id).
    success(function(data, status, headers, config) {
      $scope.embed = $sce.trustAsHtml(data);
    });
  };

  $scope.show_member = function(slug) {
    console.log(slug)
    $scope.reddit = new Reddit('https://bboyrankingz.com/media/search/' + slug + '.json');
    $scope.reddit.nextPage();
    
  };


});



