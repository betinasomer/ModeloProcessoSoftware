angular.module('FerramentaProcesso')
    .controller('NivelMaturidadeViewController', function($scope, NivelMaturidadeCollectionService) {
    
    $scope.selectNivelMaturidade = function () {
        
        NivelMaturidadeCollectionService.selectNivelMaturidade('/getNivelMaturidade').then(function(){
            $scope.niveisMaturidade = NivelMaturidadeCollectionService.getNiveisMaturidade();
            console.log(NivelMaturidadeCollectionService.getNiveisMaturidade());
            $scope.$applyAsync();
        })
	}
    $scope.niveisMaturidade = NivelMaturidadeCollectionService.getNiveisMaturidade();
});