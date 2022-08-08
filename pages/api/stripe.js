import Stripe from 'stripe'
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            biling_address_collection: 'auto',
            shipping_options: [
                {shipping_rate: 'shr_1LSi17DQdkSbfb6pyH1nOAij'},
                {shipping_rate: 'shr_1LSi2qDQdkSbfb6pjorOND50'},
            ],
            line_items: req .body.cartItems.map((item) => {
              const img = item.image[0].asset._ref;
              const newImage = img.replace('image-', 'https://cdn.sanity.io/images/hhlcxnbp/Production/').replace('-webp', '.webp'); 
           
              return {
                price_data: {
                  currency: 'NGN',
                  product_data: {
                    name: item.name,
                    image: [newImage],
                  },
                  unit_amount: item.price * 100,
                },
                adjustable_quantity: {
                  enabled: true,
                  minimum: 1,
                },
                quantity: item.quantity

                }

            }),

        


        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '{{PRICE_ID}}',
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        };
     
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}