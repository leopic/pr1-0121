angular.module('finanzas2', [])
    .factory('FinancieroServicio', function() {
        var monedas = ['USD', 'EUR', 'CNY'];
        var tipoDeCambioDeDolarHaciaOtrasMonedas = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };

        var cambiarMoneda = function cambiarMoneda(monto, monedaDeEntrada, monedaDeSalida) {
            return monto * tipoDeCambioDeDolarHaciaOtrasMonedas[monedaDeSalida] / tipoDeCambioDeDolarHaciaOtrasMonedas[monedaDeEntrada];
        };

        return {
            monedas: monedas,
            cambiarMoneda: cambiarMoneda
        };
    });
