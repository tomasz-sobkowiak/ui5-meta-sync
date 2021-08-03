//  Required node modules
var dotenv = require("dotenv");
var fs = require('fs');
var https = require('https'); //For accessing https url we need this module instead of http.
var xml2js = require('xml2js');//Required for xml parsing.
var xmlPrettyPrnter = require('xml-formatter');

// Call dotenv, so that contents in the file are stored in the environment variables
dotenv.config();

// Parameters
var sHostname = process.env.UI5_MS_HOSTNAME;
var sProtocol = process.env.UI5_MS_PROTOCOL || 'https';
var sPort = process.env.UI5_MS_PORT || '443'; 
var sSapClient = process.env.UI5_MS_SAPCLIENT || '400';
var sServiceName = process.env.UI5_MS_SERVICENAME;
var sUsername = process.env.UI5_MS_USER; 
var sPass = process.env.UI5_MS_PASS;
var sFilePath = process.env.UI5_MS_PATH || './webapp/localService';
var sFileName = process.env.UI5_MS_FILENAME || 'metadata.xml';
var sMetadataFile = sFilePath + "/" + sFileName;

// Get options
var options = {
    host: sHostname,
    port: sPort,
    path: '/sap/opu/odata/sap/' + sServiceName + '/$metadata?sap-client=' + sSapClient,
    // authentication headers
    headers: {
        'Authorization': 'Basic ' + Buffer.from(sUsername + ':' + sPass).toString('base64')
    }
};

// Get metadata
https.get(options, function (oResponse) {
    var sData = "";
    // fetch data from oDataService
    oResponse.on('data', function (sNewData) {
        sData += sNewData.toString();
    })
    // format xml and save it as a file
    oResponse.on('end', function () {
        sData = xmlPrettyPrnter(sData);
        fs.writeFile(sMetadataFile, sData, function (sError) {
            if (sError) {
                return console.log(sError);
            }
        });
        console.log('[SUCCESS] - Metadata synchronized successfully!');
    })
    oResponse.on('error', function (oError) {
        console.log("[ERROR]: " + oError.message);
    });
});
