pipeline {
    agent any
    tools {
        nodejs "node"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git url:'https://github.com/kartikjoshi267/node-simple-todo', branch:'main'
            }
        }
        stage('Test') {
            steps {
                git url:'https://github.com/kartikjoshi267/node-simple-todo', branch:'main'
                sh "npm install && npm run test"
            }
        }
        stage('Build') {
            steps {
                sh 'docker build . -t node-simple-todo'
            }
        }
        stage('Run') {
            steps {
                sh 'docker run -d --name node-simple-todo -p 8000:8000 node-simple-todo'
            }
        }
    }
}