pipeline {
    agent none
    stages {
        stage('Build Back-end') {
            agent {
                dockerfile {
                    dir 'client'
                    args ' -t backend-nodejs-cvx'
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
                    args ' -t frontend-reactjs-cvx'
                }
            }
            steps {
                sh 'node --version'
            }
        }
    }
}