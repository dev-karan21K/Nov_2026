pipeline {
    agent any
    parameters {
        string(
            name: 'TAG',
            defaultValue:'@smoke',
            description: 'Select Cucumber tag to execute'
        )
    }
    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        stage('Install Playwright') {
            steps {
                bat 'npx playwright install'
            }
        }
        stage('Run Cucumber Tests') {
            steps {
                script {
                    if (params.TAG == 'all') {
                        bat 'npx cucumber-js'
                    } else {
                        bat "npx cucumber-js --tags \"${params.TAG}\""

                    }
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts(
                artifacts: 'reports/**/*',
                allowEmptyArchive: true
            )
        }

        success {
            echo 'Cucumber tests passed successfully.'
        }

        failure {
            echo 'Cucumber tests failed.'
        }
    }
}