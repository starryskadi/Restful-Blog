pipeline {
  agent {
    node {
      label 'Node'
    }

  }
  stages {
    stage('error') {
      agent any
      steps {
        sh 'npm install'
        sh 'npm start'
      }
    }
  }
}