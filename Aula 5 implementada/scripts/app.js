var app = angular.module('ModeloProcessoSoftware', ['ngResource', 'ui.router'])
	
	.config(function($stateProvider){
		$stateProvider
			.state('aplicacao_inicial', {
				name : 'aplicacao_inicial',
				url : '/inicial.html',
				templateUrl : 'views/inicial.html'
			}).state('aplicacao_listagem', {
				name : 'aplicacao_listagem',
				url : '/listagem.html',
				templateUrl : 'views/listagem-alunos.html'
			}).state('aplicacao_cadastro', {
				name : 'aplicacao_cadastro',
				url : '/cadastro.html',
				templateUrl : 'views/cadastro.html'
			}).state('aplicacao_previsao', {
				name : 'aplicacao_previsao',
				url : '/previsao.html',
				templateUrl : 'views/previsao.html'
			});	
	});

app.run(function($rootScope, $state) { 
	$state.go("aplicacao_inicial");
});