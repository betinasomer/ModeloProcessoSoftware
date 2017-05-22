var app = angular.module('FerramentaProcesso', ['ngResource', 'ui.router'])

    .config(function($stateProvider){
        $stateProvider
            .state('aplicacao_inicial', {
                name : 'aplicacao_inicial',
                url : 'inicial.html',
                templateUrl : '/scripts/views/inicial.html'
            }).state('aplicacao_cadastro_modelo', {
				name : 'aplicacao_cadastro_modelo',
				url : '/modelo-cadastro.html',
				templateUrl : 'scripts/views/modelo-cadastro.html'
			}).state('aplicacao_view_modelo', {
				name : 'aplicacao_view_modelo',
				url : '/modelo-view.html',
				templateUrl : 'scripts/views/modelo-view.html'
			});	
    });

    app.run(function($rootScope, $state) {
        $state.go("aplicacao_inicial");
    });
