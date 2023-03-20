pipeline{
    agent any
    options{
        buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '5'))
        timestamps()
    }
    // environment{
        
    //     registry = "ferraro/cvx-node-js"
    //     registryCredential = 'ad0dd249-febd-4459-9a91-6faa667d2c30'        
    // }
    
    stages{
       stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":latest"
          dockerImage.tag("")
        }
      }
    }
    // stage('Deploy Image') {
    //   steps{
    //      script {
    //         docker.withRegistry( '', registryCredential ) {
    //         dockerImage.push()
    //       }
    //     }
    //   }
    // }
}