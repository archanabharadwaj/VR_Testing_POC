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
        post {
        success {
         publishHTML([allowMissing: true, alwaysLinkToLastBuild: true, keepAll: true, 
         reportDir: 'target/site', reportFiles: 'my-report.html', reportName: 'Visual_Regression_Report',
         reportTitles: '', useWrapperFileDirectly: true])
        }
      }
   }
}