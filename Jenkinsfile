pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.34.3-jammy' } }
   stages {
      stage('test') {
         steps {
            // Depends on your language / test framework
            sh 'npm install'
            sh 'npx playwright test --headed visualRegressionPoc.spec.js --project="firefox"'
         }
      }
   }
}