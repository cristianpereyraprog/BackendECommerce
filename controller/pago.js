
// SDK de Mercado Pago
import mercadopago from 'mercadopago'

// Agrega credenciales
mercadopago.configure({
    access_token: 'APP_USR-3719867502702418-020522-9cac6e7df5e5589b17b696032d2e0cc1-210616873',
});

console.log('-----------configuración de SDK de mercadopago OK!-----------')

const feedBack = (req,res) => {
    let infoPago = {
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	};

    console.log(infoPago)
    res.redirect('/')
}

export default {
    feedBack
}
