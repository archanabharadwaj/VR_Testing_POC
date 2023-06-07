pipeline {
   agent any
   tools {nodejs "nodejs"}
   stages {
     stage('install playwright') {
      steps {
       sh '''
       npm config ls
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