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

       stage('Report'){
         post {
         always {
                archive (includes: 'pkg/*.gem')
                publishHTML([allowMissing: false, 
                alwaysLinkToLastBuild: false,
                keepAll: false,
                reportDir: 'my-report',
                reportFiles: 'index.html',
                reportName: 'VR_testint_Report',
                reportTitles: '', 
                useWrapperFileDirectly: true])
               }
      }
       }  
   }
}