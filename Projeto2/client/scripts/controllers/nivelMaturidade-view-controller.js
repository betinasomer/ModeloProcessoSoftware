angular.module('FerramentaProcesso')
    .controller('NivelMaturidadeViewController', function($scope, NivelMaturidadeCollectionService) {
    
    $scope.selectNivelMaturidade = function () {
        console.log('View controller nivel Maturidade');
        NivelMaturidadeCollectionService.selectNivelMaturidade('/getNivelMaturidade').then(function(){
            $scope.niveisMaturidade = NivelMaturidadeCollectionService.getNiveisMaturidade();
            console.log(NivelMaturidadeCollectionService.getNiveisMaturidade());
            $scope.$applyAsync();
        })
	}
    $scope.niveisMaturidade = NivelMaturidadeCollectionService.getNiveisMaturidade();
});