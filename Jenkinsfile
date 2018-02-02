@Library('defra-shared') _

pipeline {
    agent { label 'POI-JENKINS-SLAVE' }
    stages {
        stage('Create docker image') {
            steps {
                script {
                    dockerImage = docker.build('defra/data_returns_pi_frontend')
                }
            }
        }
        stage('Push docker image') {
            steps {
                script {
                    docker.withRegistry('https://989140231452.dkr.ecr.eu-west-1.amazonaws.com', 'ecr:eu-west-1:sandpit-admin') {
                        dockerImage.push(generateBuildTag())
                    }
                }
            }
        }
    }
}
