declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NETSUITE_ACCESS_TOKEN: string;
      NETSUITE_TOKEN_SECRET: string;
      NETSUITE_CONSUMER_KEY: string;
      NETSUITE_CONSUMER_SECRET: string;
      NETSUITE_ACCT_ID: string;
      NETSUITE_RESTLET_URL: string;
      NETSUITE_RESTLET_PROXY_URL: string;
      [key: string]: string; // catch all
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
