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
        dockerfile {
          filename 'DockerFile'
        }

      }
      steps {
        echo 'DockerFile'
      }
    }
  }
}