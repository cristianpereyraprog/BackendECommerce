export default {
    PORT: 8080,
    TIPO_DE_PERSISTENCIA_PRODUCTOS : 'MONGODB',    // 'MEM', 'FILE', 'MONGODB'
    TIPO_DE_PERSISTENCIA_CARRITO : 'MONGODB',    // 'MEM', 'FILE', 'MONGODB'
    //STR_CNX : 'mongodb://localhost/ecommerce'   // base local
    STR_CNX : 'mongodb+srv://cristian:torito2022@cluster0.nqvwh.mongodb.net/ecommerce?retryWrites=true&w=majority'   // base local
}