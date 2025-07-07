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
    serverUrl: 'http://192.168.10.4:9000',
    options: {
      'sonar.sources': '.',
    }
  },
  () => process.exit()
);
