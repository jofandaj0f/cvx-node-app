pipeline {
    agent none
    stages {
        stage('Build Back-end') {
            agent {
                dockerfile {
                    dir 'client'
                    image 'node:current-alpine3.16'
                }
            }
            steps {
                sh 'node --v'
            }
        }
        stage('Build Front-end') {
            agent {
                dockerfile {
                    dir 'server'
                }
            }
            steps {
                sh 'node --version'
            }
        }
    }
}