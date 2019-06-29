pipeline {
  agent none
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