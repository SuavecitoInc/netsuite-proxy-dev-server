import dotenv from 'dotenv';
import OAuth from 'oauth-1.0a';
import crypto from 'crypto';
import fetch from 'node-fetch';
dotenv.config();

export const authenticatedFetch = async (data: any) => {
  // production
  const accountID = process.env.NETSUITE_ACCT_ID;
  const token = {
    key: process.env.NETSUITE_ACCESS_TOKEN,
    secret: process.env.NETSUITE_TOKEN_SECRET,
  };
  const consumer = {
    key: process.env.NETSUITE_CONSUMER_KEY,
    secret: process.env.NETSUITE_CONSUMER_SECRET,
  };

  const requestData = {
    url: process.env.NETSUITE_RESTLET_URL,
    method: 'POST',
  };

  const oauth = new OAuth({
    consumer: consumer,
    signature_method: 'HMAC-SHA256',
    hash_function(base_string, key) {
      return crypto
        .createHmac('sha256', key)
        .update(base_string)
        .digest('base64');
    },
    realm: accountID,
  });

  const authorization = oauth.authorize(requestData, token);
  const header = oauth.toHeader(authorization) as any;
  header['Authorization'] += ', realm="' + accountID + '"';
  header['Content-Type'] = 'application/json';
  header['user-agent'] = 'SuavecitoApi/1.0 (Language=JavaScript/ES6)';

  try {
    const endpoint = '';
    const response = await fetch(requestData.url, {
      method: requestData.method,
      headers: header,
      body: JSON.stringify(data),
    });

    const json = await response.json();
    return json;
  } catch (err: any) {
    console.log('ERROR FETCHING FROM NETSUITE', err);
  }
};
