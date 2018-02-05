@Library('defra-shared') _

def buildProperties
node {
    buildProperties = loadProperties.fromGit('git@gitlab-dev.aws-int.defra.cloud:data-returns/ci.git', 'properties/build/pi_frontend.properties', '*/master')
}

pipeline {
    agent { label buildProperties.jenkins_slave }
    stages {
        stage('Create docker image') {
            steps {
                script {
                    dockerImage = docker.build(buildProperties.ecr_repository_name)
                }
            }
        }
        stage('Push docker image') {
            steps {
                script {
                    docker.withRegistry(buildProperties.ecr_registry_url, buildProperties.ecr_credentials_id) {
                        dockerImage.push(generateBuildTag())
                    }
                }
            }
        }
        stage("Cleanup") {
            steps {
                cleanWs cleanWhenFailure: false
            }
        }
    }
}
