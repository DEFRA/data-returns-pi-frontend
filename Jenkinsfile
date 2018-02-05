@Library('defra-shared') _
@Library('data-returns-ci')

def buildProperties
node {
    buildProperties = buildConfiguration('pi_frontend.groovy')
}

pipeline {
    agent { label buildProperties['jenkins.slave'] }
    stages {
        stage('Create docker image') {
            steps {
                script {
                    dockerImage = docker.build(buildProperties['ecr.repository.name'])
                }
            }
        }
        stage('Push docker image') {
            steps {
                script {
                    docker.withRegistry(buildProperties['ecr.registry.url'], buildProperties['ecr.registry.credentials']) {
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
