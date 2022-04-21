let calculator = new Vue({
    el: '#calculator',
    data: {
        price: '',
        downPayment: '',
        tradeIn: '',
        length: '60',
        rate: '',
        calcPayment: ''
    },
    computed: {
        calcPayment: function(e){
            let p = this.price - this.downPayment - this.tradeIn;
            let r = this.rate / 1200;
            let n = this.length;
            let i = Math.pow((1+r),n);
            let payment = ( p * r * i) / (i - 1) || 0;
            return currencyFormat(payment);
        },
        numFormat: function(e){
            e.replace(/(\d)(?=(\d\d\d\d)+(?!\d))/g, "$1,");
        }
    }
});