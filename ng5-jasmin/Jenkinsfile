pipeline {
  agent any

  tools {nodejs "node"}

  stages {
   
    stage('test') {
        steps {
            git branch: 'master', url: "https://github.com/shubhikagarg/myangular-code.git"
            }
    }

    stage('build') {
      steps {
        sh 'npm install -g @angular/cli@latest'
        
        sh 'ng serve'
      }
    }
  }
}
