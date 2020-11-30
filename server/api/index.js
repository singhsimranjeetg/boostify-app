const ShopifyAPIClient = require('shopify-api-node');

  //SHOPIFY API NODE
  const shopify = new ShopifyAPIClient({
    shopName: 'sept-five-app.myshopify.com',
    accessToken: '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'
    
  });
 // shopify.on('callLimits', (limits) => console.log(limits));

 
    shopify.theme
    .list({ limit: 5 })
    .then((themes) => {
      console.log(themes)
      
     
    })
    .catch((err) => console.error(err));
 

// export default getThemes;