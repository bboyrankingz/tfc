var app = angular.module("tfc", ['infinite-scroll', 'angularMoment']);

app.controller("Media", function($scope) {

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
  $scope.reddit = new Reddit('localhost:8000/media/search/total%20feeling%20crew/.json');
});



