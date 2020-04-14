# Bookmark Bot Firebase Microservice

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ae2692625d0e431d96a82fed2ff2215f)](https://www.codacy.com/manual/rogojagad/bookmark-bot-firebase-service?utm_source=github.com&utm_medium=referral&utm_content=rogojagad/bookmark-bot-firebase-service&utm_campaign=Badge_Grade) [![codecov](https://codecov.io/gh/rogojagad/bookmark-bot-firebase-service/branch/master/graph/badge.svg)](https://codecov.io/gh/rogojagad/bookmark-bot-firebase-service)

## About

A simple microservice I used as an interface to interact with Firebase for my **Bookmark Bot** project (_more about this soon on separate repository_). In a short word, **Bookmark Bot** is a simple LINE Chat Bot and a website to save and manage saved link so it can be acessed on any platform.

This microservice itself will be consumed by 2 clients: **LINE chatbot** and **webview admin panel**.

I implement unit testing (with a bit of Test Driven Development) and clean code concept (as much as I can and understand) on this project.

Because, **learning while developing a project is tons of fun**.

## Library Used

Following are the library I use on this microservice:

-   **Express.js** : A web application framework
-   **Jest** : A testing framework for unit testing
-   **Firestore** : A cloud database by Firebase for storing data
-   **Eslint** : To standarize code style
