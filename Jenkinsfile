pipeline {
  agent {
    node {
      label 'Node'
    }

  }
  stages {
    stage('') {
      agent {
        node {
          label 'Nodejs'
        }

      }
      steps {
        sh 'npm install'
        sh 'npm start'
      }
    }
  }
}