var app = new Vue({
    el:'#app',
    data: {
        brand : 'Vue Mastery',
        product : 'Socks',
        selectedVariant : 0,
        inventory: 0,
        onSale : true,
        details: ["80% cotton","20% polyester", "Gender-neutral"],
        
        variants:[
            {
                variantId: 2234,
                variantColor : "green",
                variantImages: '../assets/vmSocks-green.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor : "blue",
                variantImages: '../assets/vmSocks-blue.jpg',
                variantQuantity: 0
            }
        ],
        cart : 0
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index;
            console.log(index)
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product 
        },
        image(){
            return this.variants[this.selectedVariant].variantImages 
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})