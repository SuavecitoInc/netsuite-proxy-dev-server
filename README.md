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

To test / add other RESTLet endpoints simply add the url as an env var and update the endpoint on the `proxyRequest` controller or add another route and controller.

```typescript
export const proxyRequest = async (req: Request, res: Response) => {
  try {
    const endpoint = process.env.NETSUITE_RESTLET_PROXY_URL;
    const body = req.body;
    console.log('PROXY REQUEST PAYLOAD', body);
    const response = await authenticatedFetch(endpoint, body);
    console.log('RESPONSE', response);
    res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
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
# other reestlet urls
....

```

## Run

```bash
npm run start
```
