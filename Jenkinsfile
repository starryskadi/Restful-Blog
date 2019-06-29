pipeline {
  agent {
    docker {
      image 'node:latest'
      args '-p 5000:5000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'node ./app.js'
      }
    }
  }
}