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
         success {publishHTML (target : [allowMissing: false,
                  alwaysLinkToLastBuild: true,
                  keepAll: true,
                  reportDir: 'reports',
                  reportFiles: 'myreport.html',
                  reportName: 'My Reports',
                  reportTitles: 'The Report'])
               }
      }
      }
      }     
   }
}