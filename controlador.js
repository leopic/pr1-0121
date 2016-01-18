angular.module('factura1', [])
    .controller('FacturaCtrl', function() {
        this.cantidad = 1;
        this.costo = 2;
        this.monedaDeEntrada = 'EUR';
        this.monedas = ['USD', 'EUR', 'CNY'];
        this.tipoDeCambioDeDolarHaciaOtrasMonedas = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };

        this.calcularTotal = function calcularTotal(monedaDeSalida) {
            return this.cambiarMoneda(this.cantidad * this.costo, this.monedaDeEntrada, monedaDeSalida);
        };
        this.cambiarMoneda = function cambiarMoneda(monto, monedaDeEntrada, monedaDeSalida) {
            return monto * this.tipoDeCambioDeDolarHaciaOtrasMonedas[monedaDeSalida] / this.tipoDeCambioDeDolarHaciaOtrasMonedas[monedaDeEntrada];
        };
        this.pagar = function pagar() {
            window.alert('Gracias');
        };
    });
