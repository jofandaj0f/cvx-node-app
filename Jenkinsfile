pipeline{
    agent any
    options{
        buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '5'))
        timestamps()
    }
    environment{
        BUILD_ID = "latest"    
        registry = "ferraro/cvx-node-js"
    //     registryCredential = 'ad0dd249-febd-4459-9a91-6faa667d2c30'        
    }
    
    stages{
       stage('Building image for backend') {
      steps{
        script {
          dockerImage = docker.build("${registry}:${env.BUILD_ID}"
                        + " --build-arg PORT=3000"
                        + " ./server/"
                    )
          // dockerImage.tag("Backend")
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
}