var app = angular.module("tfc", ['infinite-scroll', 'angular.filter', 'truncate', 'angularMoment', 'youtube-embed']);

app.controller("Media", function($scope, $http, Reddit, $sce) {

  moment.locale('en', {
      relativeTime : {
          future: "in %s",
          past:   "%s",
          s:  "this month",
          m:  "this month",
          mm: "this month",
          h:  "this month",
          hh: "this month",
          d:  "this month",
          dd: "this month",
          M:  "this month",
          MM: "%d months ago",
          y:  "a year ago",
          yy: "%d years ago"
      }
  });

  $scope.reddit = new Reddit('https://bboyrankingz.com/media/search/total%20feeling%20crew.json');
  $scope.intro = "tfc"
  $scope.player = "player"


  $http.get('https://bboyrankingz.com/crews/apis/total-feeling-crew.json').
    success(function(data, status, headers, config) {
      $scope.object = data;
      $scope.description = $sce.trustAsHtml(data["description"])
      $scope.members = data["group_members"];
      $scope.results = data["tournamentroundplayers_set"];
    });

 $scope.open = function(url) {
    $('#bgndVideo').playerDestroy();
    $scope.url = url;
  };

  $scope.show_member = function(slug, title) {
    $('#bgndVideo').playerDestroy();
    $scope.intro = slug
    $scope.player = ""
    $http.get('https://bboyrankingz.com/bboys/apis/' + slug + '.json').
    success(function(data, status, headers, config) {
      $scope.results = data["tournamentroundplayers_set"];
      $scope.description = $sce.trustAsHtml(data["description"])
      $scope.object = data;
    });
    $scope.reddit = new Reddit('https://bboyrankingz.com/media/search/' + title + '.json');
    $scope.reddit.nextPage();
    
  };


});



