angular.module('facturas2', ['finanzas2'])
    .controller('FacturaCtrl', ['FinancieroServicio', function(FinancieroServicio) {
        this.cantidad = 1;
        this.costo = 2;
        this.monedaDeEntrada = 'EUR';
        this.monedas = FinancieroServicio.monedas;
        this.calcularTotal = function calcularTotal(monedaDeSalida) {
            return FinancieroServicio.cambiarMoneda(this.cantidad * this.costo, this.monedaDeEntrada, monedaDeSalida);
        };
        this.pagar = function pagar() {
            window.alert('Gracias');
        };
    }]);
