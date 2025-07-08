//const sonarqubeScanner = require('sonarqube-scanner');
   //  sonarqubeScanner({
     //  serverUrl: 'http://192.168.56.4:9000',
       //options : {
      // 'sonar.sources': '.',
       //'sonar.inclusions' : '.' // Entry point of your code
    //   }
    // }, () => {});

const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner.scan(
  {
    serverUrl: 'http://192.168.56.4:9000',
    //token: process.env.SONAR_TOKEN,
   
    options: {
       'sonar.login': process.env.SONAR_TOKEN,
     // 'sonar.login':'8b523babbaac718a4ce12442a2c3bf3786088783',
      'sonar.sources': '.',
    }
  },
  () => process.exit()
);
