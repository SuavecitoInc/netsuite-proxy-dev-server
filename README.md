# NetSuite RESTLet Development Server

> A development Server to proxy requests to NetSuite RESTLets

## Development

This express server exposes an example post endpoint at `/product`.

The expected payload is:

```javascript
{
  "sku": "P001NN"
}
```

The expected response is:

```javascript
{
    "data": [
        {
            "recordType": "assemblyitem",
            "id": "24867",
            "values": {
                "internalid": [
                    {
                        "value": "24867",
                        "text": "24867"
                    }
                ],
                "custitem_sp_item_sku": "P001NN",
                "displayname": "Original Hold Pomade",
                "upccode": "859896004001"
            }
        }
    ]
}
```

The response will be NetSuite product data.

## Test Other RESTLets

To proxy requests to RESETLets for development, please add the RESETlet url in the .env as `NETSUITE_RESTLET_PROXY_URL`. Also update the endpoints object at `/src/lib/utils`.

```typescript
const endpoints = {
  product: process.env.NETSUITE_RESTLET_URL, // default
  proxy: process.env.NETSUITE_RESTLET_PROXY_URL, // the restlet to proxy the request
};
```

The response will be w/e the RESTLet returns.

## Setup

.env

```bash
NETSUITE_ACCT_ID="NetSuite Account Number"
# netsuite integration : Suavecito API - Web Services
NETSUITE_CONSUMER_KEY="Suavecito API - Web Services Consumer Key"
NETSUITE_CONSUMER_SECRET="Suavecito API - Web Services Consumer Secret"
NETSUITE_ACCESS_TOKEN="Suavecito API - Web Services Access Token"
NETSUITE_TOKEN_SECRET="Suavecito API - Web Services Token Secret"
# restlets
NETSUITE_RESTLET_URL="RESTLet URL"
NETSUITE_RESTLET_PROXY_URL="RESTLet URL"

```

## Run

```bash
npm run start
```
