angular.module('finanzas3', [])
    .factory('FinancieroServicio', ['$http', function($http) {
        var YAHOO_FINANCE_URL_PATRON =
            '//query.yahooapis.com/v1/public/yql?q=select * from '+
            'yahoo.finance.xchange where pair in ("PARES")&format=json&'+
            'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';
        var monedas = ['USD', 'EUR', 'CNY'];
        var tipoDeCambioDeDolarHaciaOtrasMonedas = {};

        var cambiarMoneda = function cambiarMoneda(monto, monedaDeEntrada, monedaDeSalida) {
            return monto * tipoDeCambioDeDolarHaciaOtrasMonedas[monedaDeSalida] / tipoDeCambioDeDolarHaciaOtrasMonedas[monedaDeEntrada];
        };

        var actualizarTiposDeCambio = function() {
            var url = YAHOO_FINANCE_URL_PATRON.
            replace('PARES', 'USD' + monedas.join('","USD'));
            return $http.jsonp(url).success(function(data) {
                var tiposDeCambiosActualizados = {};
                angular.forEach(data.query.results.rate, function(rate) {
                    var moneda = rate.id.substring(3,6);
                    tiposDeCambiosActualizados[moneda] = window.parseFloat(rate.Rate);
                });
                tipoDeCambioDeDolarHaciaOtrasMonedas = tiposDeCambiosActualizados;
            });
        };

        actualizarTiposDeCambio();

        return {
            monedas: monedas,
            cambiarMoneda: cambiarMoneda
        };
    }

    ]);
