# Bluetooth Chat - Raspberry Pi Client Code

A sample chat service to demonstrate android-phone to Raspberry Pi bluetooth communication via serial. This repository is the codebase for the Raspberry Pi display window.

For this part of the project, the client and server code are separate to better suit your potential use case. This code is for the client-side of the application.

## Angular Framework

This project makes use of the Angular framework. For this project, the current versions are displayed below:
```
    _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 11.0.7
Node: 15.7.0
OS: darwin arm64

Angular: 11.0.9
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1100.7
@angular-devkit/build-angular   0.1100.7
@angular-devkit/core            11.0.7
@angular-devkit/schematics      11.0.7
@angular/cli                    11.0.7
@schematics/angular             11.0.7
@schematics/update              0.1100.7
rxjs                            6.6.6
typescript                      4.0.7
```
## Prerequisites for Framework

If you are new to this space, and Angular or CLI is not a term that's familiar to you, Angular is a Javascript framework that allows web developers to create power ful web apps. To learn more about Angular, check out [this page](https://angular.io/start) to get started. If you simply want to know what Angular is all about, check out this [link](https://www.youtube.com/watch?v=G0bBLvWXBvc).

If you're the person described above, chances are you'll also be unfamiliar with the name *node.js*. For simplicity's sake, this is simply the technology for which Angular, and subsequently Ionic is built upon. Be sure to install the necessary *node.js* software through this [link](https://nodejs.org/en/download/).

## Yarn package manager

This project uses yarn for package management. Be sure to [install yarn](https://classic.yarnpkg.com/en/docs/install) if you haven't already.

## Deployment
### Deployment for testing

If you're simply interested in testing the code out in your local machine, follow these steps:
1. Turn on your Raspberry Pi and have it connect to the internet or a local network.
2. Retrieve your IP Address by using the command `hostname -I` on a terminal window.
3. Open up the project in your IDE and navigate to `src > environments > environment.ts`.
4. Replace the IP address listed in the `socketServerURL` property with the IP address you get for your device.
5. Save, and open a terminal with the root directory of the project open (If your IDE hadn't done so already) and run the command `ng serve -o`.
6. This should open a window with your app loaded and ready.
