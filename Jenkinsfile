node ('Ubuntu-app-agent') {  
    def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    }  
    stage('SAST'){
        build 'SECURITY-SAST-SNYK'
    }*
  stage('SonarQube Analysis') {
    withCredentials([usernamePassword(credentialsId: 'sonar_token', usernameVariable: 'SONAR_USER', passwordVariable: 'SONAR_TOKEN')]) {
        sh 'npm install'
        sh 'npm run sonar'
    }
}
    
    stage('Build-and-Tag') {
        
    /* This builds the actual image; synonymous to
         * docker build on the command line */
        app = docker.build("ibrahim661993/snake")
    }
    stage('Post-to-dockerhub') {
    sh 'echo Post-to-dockerhub'
     docker.withRegistry('https://registry.hub.docker.com', 'training_creds') {
            app.push("latest")
        			}
         }
   /* stage('SECURITY-IMAGE-SCANNER'){
        build 'SECURITY-IMAGE-SCANNER-AQUAMICROSCANNER'
    }*/
  
    
    stage('Pull-image-server') {
    sh 'echo Pull-image-server'
         sh "docker-compose down"
         sh "docker-compose up -d"	
      }
    /*stage('DAST - OWASP ZAP Scan') {
        // Lance le scan ZAP via docker
        sh '''
          docker pull zaproxy/zap-stable
          docker run --rm --security-opt seccomp=unconfined --network=host -v $PWD:/zap/wrk/:rw zaproxy/zap-stable zap-baseline.py -t http://192.168.56.4:80 -r zap_report.html || true
        '''
    }

    stage('Publish ZAP Report') {
        publishHTML (target: [
            reportDir: '.', 
            reportFiles: 'zap_report.html', 
            reportName: 'OWASP ZAP Report', 
            allowMissing: false, 
            alwaysLinkToLastBuild: true, 
            keepAll: true
        ])
    }*/
    stage('DAST - OWASP ZAP Scan') {
    build 'SECURITY-DAST-ZAP-FREESTYLE'
}

    
    /*stage('DAST')
        {
        build 'SECURITY-DAST-OWASP_ZAP'
        }*/
 }
