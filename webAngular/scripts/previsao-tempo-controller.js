angular.module('ModeloProcessoSoftware').controller('PrevisaoTempoController', function($scope, $resource){
	var WeatherChannel = $resource('http://api.openweathermap.org/data/2.5/weather?q=SaoPaulo,BR&units=metric&APPID=579d69f8e4a2f25c9a9c494d01d50c0f');
	
	var getWeather = function(){
		WeatherChannel.get().$promise.then(function(response){
			$scope.tempo = response;
			console.log(response);
		}, function(promise){
			alert("Erro ao requisitar Recurso!");
		})
	}
	
	getWeather();
	
});