pipeline {
  agent {
    docker {
      image 'node:latest'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('') {
      agent any
      steps {
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }

      }
    }
  }
}