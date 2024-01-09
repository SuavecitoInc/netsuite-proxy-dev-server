# NetSuite RestLET Endpoint

> Example Express Server to NetSuite RestLet Endpoint

This example express server exposes a post endpoint at `/product`. The expected payload is:

```javascript
{
  "sku": "P001NN"
}
```

The response will be NetSuite product data.

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
NETSUITE_RESTLET_URL="ResLET URL"

```

## Run

```bash
npm run start
```
