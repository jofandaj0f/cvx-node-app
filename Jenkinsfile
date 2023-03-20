pipeline {
    agent none
    stages {
        stage('Back-end') {
            agent {
                dockerfile {
                    dir 'client'
                    label 'NodeJS-Backend'
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
                    label 'React-Frontend'
                }
            }
            steps {
                sh 'node --version'
            }
        }
    }
}