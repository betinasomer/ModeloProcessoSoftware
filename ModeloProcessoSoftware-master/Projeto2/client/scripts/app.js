var app = angular.module('FerramentaProcesso', ['ngResource', 'ui.router'])

	.config(function ($stateProvider) {
		$stateProvider
			.state('aplicacao_inicial', {
				name: 'aplicacao_inicial',
				url: 'inicial.html',
				templateUrl: '/scripts/views/inicial.html'
			}).state('aplicacao_cadastro_modelo', {
				name: 'aplicacao_cadastro_modelo',
				url: '/modelo-cadastro.html',
				templateUrl: 'scripts/views/modelo-cadastro.html'
			}).state('aplicacao_view_modelo', {
				name: 'aplicacao_view_modelo',
				url: '/modelo-view.html',
				templateUrl: 'scripts/views/modelo-view.html'
			}).state('aplicacao_cadastro_nivelmaturidade', {
				name: 'aplicacao_cadastro_nivelmaturidade',
				url: '/nivelMaturidade-cadastro.html',
				templateUrl: 'scripts/views/nivelMaturidade-cadastro.html'
			}).state('aplicacao_view_nivelMaturidade', {
				name: 'aplicacao_view_nivelMaturidade',
				url: '/nivelMaturidade-view.html',
				templateUrl: 'scripts/views/nivelMaturidade-view.html'
			}).state('aplicacao_cadastro_produtoTrabalho', {
				name: 'aplicacao_cadastro_produtoTrabalho',
				url: '/produtoTrabalhoCadastro-view.html',
				templateUrl: 'scripts/views/produtoTrabalho-cadastro.html'
			}).state('aplicacao_view_praticaEspecifica', {
				name: 'aplicacao_cadastro_praticaEspecifica',
				url: '/praticaEspecifica-view.html',
				templateUrl: 'scripts/views/praticaEspecifica-view.html'
			}).state('aplicacao_cadastro_categoria', {
				name: 'aplicacao_cadastro_categoria',
				url: '/categoria-cadastro.html',
				templateUrl: 'scripts/views/categoria-cadastro.html'
			}).state('aplicacao_view_categoria', {
				name: 'aplicacao_view_categoria',
				url: '/categoria-view.html',
				templateUrl: 'scripts/views/categoria-view.html'
			}).state('aplicacao_view_produtoTrabalho', {
				name: 'aplicacao_view_produtoTrabalho',
				url: '/produtoTrabalho-view.html',
				templateUrl: 'scripts/views/produtoTrabalho-view.html'
			}).state('aplicacao_cadastro_praticaEspecifica', {
				name: 'aplicacao_cadastro_praticaEspecifica',
				url: '/praticaEspecifica-cadastro.html',
				templateUrl: 'scripts/views/praticaEspecifica-cadastro.html'
			}).state('aplicacao_view_metaEspecifica', {
				name: 'aplicacao_view_metaEspecifica',
				url: '/metaEspecifica-view.html',
				templateUrl: 'scripts/views/metaEspecifica-view.html'
			}).state('aplicacao_cadastro_nivelCapacidade', {
				name: 'aplicacao_cadastro_nivelCapacidade',
				url: '/nivelCapacidade-cadastro.html',
				templateUrl: 'scripts/views/nivelCapacidade-cadastro.html'
			}).state('aplicacao_view_nivelCapacidade', {
				name: 'aplicacao_view_nivelCapacidade',
				url: '/nivelCapacidade-view.html',
				templateUrl: 'scripts/views/nivelCapacidade-view.html'
			}).state('aplicacao_cadastro_metaEspecifica', {
				name: 'aplicacao_cadastro_metaEspecifica',
				url: '/metaEspecifica-Cadastro.html',
				templateUrl: 'scripts/views/metaEspecifica-cadastro.html'
			}).state('aplicacao_view_metaGenerica',{
				name: 'aplicacao_view_metaGenerica',
				url: 'metaGenerica-view.html',
				templateUrl: 'scripts/views/metaGenerica-view.html'
			}).state('aplicacao_cadastro_metaGenerica',{
				name: 'aplicacao_cadastro_metaGenerica',
				url: 'metaGenerica-cadastro.html',
				templateUrl: 'scripts/views/metaGenerica-cadastro.html'
			}).state('aplicacao_cadastro_areaProcesso',{
				name: 'aplicacao_cadastro_areaProcesso',
				url: 'area-processo-cadastro.html',
				templateUrl: 'scripts/views/area-processo-cadastro.html'
			}).state('aplicacao_view_areaProcesso',{
				name: 'aplicacao_view_areaProcesso',
				url: 'area-processo-view.html',
				templateUrl: 'scripts/views/area-processo-view.html'
			}).state('aplicacao_visualizacaogeral', {
				name: 'aplicacao_visualizacaogeral',
				url: 'visualizacaogeral.html',
				templateUrl: 'scripts/views/visualizacaogeral.html'
			});

	});

app.run(function ($rootScope, $state) {
	$state.go("aplicacao_inicial");
});
