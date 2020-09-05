# DeepQuake

Deep Quake is an Ionic Application so therefore you will need to have setup Ionic inorder to use. For instructions on how to setup Ionic go here:
  https://ionicframework.com/docs/intro/cli

## Components needed:

###  React Carts:
    npm install --save react-chartjs-2 chart.js
  
###  TomTom Libraries:
      npm i @tomtom-international/web-sdk-maps
      npm i @tomtom-international/web-sdk-services

## Supply API Key
  Once you have installed the needed dependancies then you will need a tomtom api Key:
  In order to run this on your own machine you will need to create a API key with TomTom and add it to Keys.keys.json,
  an example of how the Json would look like is:
  
      "Keys" : {
          "TomTom" : "[API Key]"
      }
