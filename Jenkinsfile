pipeline {
  agent {
    docker {
      image 'node:latest'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Pre Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('') {
      agent {
        node {
          label 'docker'
        }

      }
      steps {
        sh '"docker build -t accountownerapp:B${BUILD_NUMBER} -f Dockerfile ."'
      }
    }
  }
}