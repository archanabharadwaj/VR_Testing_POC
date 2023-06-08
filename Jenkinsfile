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
          publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, 
          keepAll: false, reportDir: 'VR_Testing_POC/my-report/', reportFiles: 'index.html',
         reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
      }
      }
      }     
   }
}