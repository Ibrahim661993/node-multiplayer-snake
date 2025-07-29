/* node ('Ubuntu-app-agent') {  
    def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
      /* checkout scm
    }  
    stage('SAST'){
        build 'SECURITY-SAST-SNYK'
    }


stage('SonarQube Analysis') {
    build 'Sonar-Qube'
}
    
    stage('Build-and-Tag') {
        
    /* This builds the actual image; synonymous to
         * docker build on the command line */
     /*   app = docker.build("ibrahim661993/snake")
    }
    stage('Post-to-dockerhub') {
    sh 'echo Post-to-dockerhub'
     docker.withRegistry('https://registry.hub.docker.com', 'training_creds') {
            app.push("latest")
        			}
         }*/
 
  
    
   /* stage('Pull-image-server') {
    sh 'echo Pull-image-server'
         sh "docker-compose down"
         sh "docker-compose up -d"	
      }*/
   

 
   /* stage('DAST - OWASP ZAP Scan') {
    build 'SECURITY-DAST-ZAP-FREESTYLE'
}

    
    
 }*/

properties([
  parameters([
    string(name: 'REPO_URL', defaultValue: '', description: 'URL du dépôt Git'),
    string(name: 'DOCKER_IMAGE_NAME', defaultValue: '', description: 'Nom de l\'image Docker à créer')
  ])
])

node('Ubuntu-app-agent') {
  def app

  stage('Cloner le code') {
    git url: params.REPO_URL, branch: 'master'
  }

  stage('SAST') {
    build 'SECURITY-SAST-SNYK'
  }

  stage('SonarQube Analysis') {
    build 'Sonar-Qube'
  }
   

  stage('Build image Docker') {
    app = docker.build(params.DOCKER_IMAGE_NAME)
  }

  stage('Push image Docker') {
    docker.withRegistry('https://registry.hub.docker.com', 'training_creds') {
      app.push('latest')
    }
  }

  stage('Déploiement avec docker-compose') {
    sh 'docker-compose down'
    sh 'docker-compose up -d'
  }

  stage('DAST - OWASP ZAP Scan') {
    build 'SECURITY-DAST-ZAP-FREESTYLE'
  }
}

