pipeline {
   agent {
 docker {
 image 'mcr.microsoft.com/playwright:v1.33.0-focal' }
 }
   stages {
stage('install playwright') {
   steps {
    sh '''
     npm i -D @playwright/test
     npx playwright install
    '''
   }
  }
      stage('test') {
         steps {
            // Depends on your language / test framework
            sh 'npm install'
            sh 'npx playwright test --headed visualRegressionPoc.spec.js --project="firefox"'
         }
      }
   }
}