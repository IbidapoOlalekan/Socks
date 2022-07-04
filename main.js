var app = new Vue({
    el:'#app',
    data: {
        product : 'Socks',
        image:'../assets/vmSocks-green.jpg',
        inStock: false,
        inventory: 0,
        onSale : true,
        details: ["80% cotton","20% polyester", "Gender-neutral"],
        
        variants:[
            {
                variantId: 2234,
                variantColor : "green",
                variantImages: '../assets/vmSocks-green.jpg'
            },
            {
                variantId: 2235,
                variantColor : "blue",
                variantImages: '../assets/vmSocks-blue.jpg'
            }
        ],
        cart : 0
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage;
        }
    },
})