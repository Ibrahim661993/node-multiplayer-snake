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
   
    options: {
       'soar.login':'74fe79d97806f01a4cb181c1e514e875b06707ab',
      'sonar.sources': '.',
    }
  },
  () => process.exit()
);
