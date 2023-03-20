pipeline {
    agent none
    stages {
        stage('Back-end') {
            agent {
                dockerfile {
                    dir 'client'
                    tag 'cvx-app-react'
                }
            }
            steps {
                sh 'node -v'
            }
        }
        stage('Front-end') {
            agent {
                dockerfile {
                    dir 'server'
                    tag 'cvx-app-nodejs'
                }
            }
            steps {
                sh 'node --version'
            }
        }
    }
}