
pipeline {
  agent any
  stages {
      stage('Build') {
        agent {
          docker {
            image 'node:latest'
          }
        }

        steps {
            sh 'npm i'
            sh 'npm build'
        }
      }

      stage('Deploy') {
        steps {
          sh 'aws s3 sync .next s3://learn-next13 --delete'    
        }
      }
  }
}