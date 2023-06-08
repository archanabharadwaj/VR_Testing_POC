pipeline {
   agent any
   tools {nodejs "NODEJS"} 
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

       stage('HTML-Report') {


         steps {
         post {
         success {
         archiveArtifacts artifacts: 'VR_Testing_POC/my-report/index.html', followSymlinks: false
        }
      }
      }
      }     
   }
}