pipeline {
  agent {
    docker {
      image 'node:latest'
      args '-p 5000:5000'
    }

  }
  stages {
    stage('') {
      steps {
        sh 'npm install'
        sh 'npm start'
      }
    }
  }
}