pipeline {
    agent none
    stages {
        stage('Back-end') {
            agent {
                dockerfile {
                    dir 'client'
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
                }
            }
            steps {
                sh 'node --version'
            }
        }
    }
}