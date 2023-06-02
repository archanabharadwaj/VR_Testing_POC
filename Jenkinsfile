pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.34.3-jammy' } }
   git credentialsId: 'a52ad621-3864-4c7b-92f8-0b7194d0b474',
   url: 'https://github.com/archanabharadwaj/VR_Testing_POC.git'
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