
# ui5-meta-sync

  This tool gets the newest metadata version of the OData Service placed on the SAP system and updates the metadata.xml file of the project.

# Parameters in .env
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

# License

  MIT