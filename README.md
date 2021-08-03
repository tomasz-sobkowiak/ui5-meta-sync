
# ui5-meta-sync

  This tool gets the newest metadata version of the OData Service placed on the SAP system and updates the metadata.xml file of the project.

# Parameters in ```.env``` file
| Option              | Default                 | Description |
|---------------------|-------------------------|-------------|
| UI5_MS_PROTOCOL     | 'https'                 | SAP host protocol
| UI5_MS_HOSTNAME     |                         | SAP hostname
| UI5_MS_PORT         | '443'                   | Port
| UI5_MS_USER         |                         | SAP user
| UI5_MS_PASS         |                         | SAP password
| UI5_MS_SAPCLIENT    | '400'                   | SAP client
| UI5_MS_SERVICENAME  |                         | OData Service name
| UI5_MS_PATH         | './webapp/localService' | Directory of the metadata.xml file
| UI5_MS_FILENAME     | 'metadata.xml'          | Metadata file name

# Usage

  - Add the below line into the package.json of your project:
    ```"ui5-meta-sync": "https://github.com/tomasz-sobkowiak/ui5-meta-sync"```
  - Type ```npm install```
  - Add the following command to the project's ```scripts``` section in the ```project.json```:
    ```"sync:metadata": "node ./node_modules/ui5-meta-sync/src/index.js"```
  
  - In order to execute the metadata synchronization type in CMD the below command:
    ```npm run sync:metadata```
  
  - If everything is fine, you should see the success message in the console:
    ```[SUCCESS] - Metadata synchronized successfully!```

# License

  MIT