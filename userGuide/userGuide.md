# How to use the app

# Introduction

This document is a quick guide on how to get started with the IDSP app ‘firstmaps’. 

# Requirements

For this to work, you need to have a few things installed on your machine.

 **Node:** Node is a javascript runtime environment.

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

**GitHub Desktop:** This allows you to use a graphical user interface to do Github actions instead of using the command line.

[https://desktop.github.com/](https://desktop.github.com/)

✅ **DO THIS BEFORE YOU CARRY ON:** 

Set up your Github desktop, and sync it with VS Code. It will make things a lot easier for you to work on this. 

[https://www.youtube.com/watch?v=8Dd7KRpKeaE](https://www.youtube.com/watch?v=8Dd7KRpKeaE)

# Background Info

**What is git and github?**

Git is a version control system that lets you manage and keep track of your source code history. 

GitHub is a cloud-based hosting service that lets you manage Git repositories

# Installing & Running the app

## 1. Go to the repository and download the code.

The repository for firstmaps is found at: 

[https://github.com/First-Maps/first-maps](https://github.com/First-Maps/first-maps)

**Optional background info ******

The repository is inside of an organization, organizations are a feature on Github that allows you to put many repositories in the same place. 

For now, everything is in the ‘first-maps’ repository. 

**********************************

A repository ****is a place that ****contains all of your project's files and each file's revision history. 

When team members work on project together, each team member will download the code from the online repository (often referred to as “remote”) onto their own machine. 

The link above should bring you to this page: 

![Screen Shot 2022-10-16 at 12.34.27 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_12.34.27_PM.png)

Click the green button in the upper middle part of the screen that says “code”. A drop down menu should appear. 

Then, click the **“open with Github Desktop”** option

![Screen Shot 2022-10-16 at 12.35.46 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_12.35.46_PM.png)

After clicking “open with Github Desktop”, your machine will open up the Github Desktop program, you should get a window that looks like this: 

** Don’t click “Clone” just yet, let me explain something first. 

![Screen Shot 2022-10-16 at 12.38.47 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_12.38.47_PM.png)

In order for us to run the app, we first need to get the code from the Github repository onto our own machine. This is called “cloning” the repository. 

On the bottom of the pop-up window (in the image above), you will notice an input bar that says “Local Path”, with a button that says “choose” next to it. 

This is where you tell Github exactly where to put the code from the online repository. I recommend having a dedicated folder on your computer strictly for Github projects. 

⚠️ NOTE: 

**Make sure that you do not clone a repository inside another repository. Git does not like it and it will give you problems.** 

```jsx

// this folder structure is okay
folder1
		.git 
		index.html
		index.css
folder2
		.git
		index.html
		index.css
		

// this is NOT okay, 
folder1 
		.git 
		index.html
		index.css
		folder2
				.git
				index.html
				index.css

```

*** Read this **If you forgot whether a folder is a git repository: *******

A folder that is a git repository on your machine will have a “.git” folder. 

This is a hidden folder, which means you may need to tell your computer to show it to you. 

On Mac, you can toggle whether hidden files are displayed by opening the finder, then press “command + shift + .”

Hidden files visible

![Screen Shot 2022-10-16 at 1.04.48 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_1.04.48_PM.png)

Hidden files not visible

![Screen Shot 2022-10-16 at 1.07.05 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_1.07.05_PM.png)

**********************************************************************

**Back to cloning the repository…**

After you tell Github desktop where to put the code from the online(remote) repository, you should see this: 

![Screen Shot 2022-10-16 at 1.21.10 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_1.21.10_PM.png)

**Click “Open in Visual Studio Code”**

You should now see a vs code window with all of the code from the online repository. 

![Screen Shot 2022-10-16 at 1.27.41 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_1.27.41_PM.png)

## 2. Installing Dependencies and Run The App

You will need 'npm' an 'yarn' to install and run the project smoothly, npm and yarn are package managers. 

If you've already done commands like 'npm install <something>', you have 'npm' already.

Yarn is an addon to npm that tries to help you with speeding up smoothing out installations and running servers for development. 

Many of the things that we do with npm can also be done with yarn. Yarn tends to give us less problems, so we will go over how to use yarn in this guide. 

To install yarn, run the command:

```jsx
npm install --global yarn
```

Now, before we can run our app, we need to install the dependencies. 

Dependencies are code other people wrote, that you want to use in your own project. ex. React, Express…

These external code will change over time, as people will make updates and improvements, so it may not be the best idea to download the files and put it into our Github repository. 

The code that other people wrote is in a folder called “node_modules” (for node applications).

We need to have the dependencies in our local machine before the app can run, but we also don’t want to put it in our Github repo.

To get around this, we have a file called package.json

Inside package.json, there is a section that lists out your project’s dependencies. 

![Screen Shot 2022-10-16 at 1.42.42 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_1.42.42_PM.png)

When we commit our code to the remote (online) repository, we put the

node_modules folder inside the “.gitignore” file. 

Github will go inside .gitignore, and make sure that none of the files listed in .gitignore are commited into the github repository. 

Now, you may wonder, how do I add dependencies to the package.json

You may have written something like this in your code 

```jsx
// index.js

const express = require("express")

// or in ESModule syntax
import express from 'express'
```

Then you went in your command line and typed 

```jsx
npm install express
```

This command installs the dependency files into your node_modules, and then adds the name of the dependency to your package.json file. 

**Back to running the app…**

Now that we have yarn installed on our machine, we need to tell yarn to install the dependencies. 

Enter this in the command line: 

```jsx
yarn run dev
```

This should install all the dependencies and run the app. 

If successful, you should see this in your command line

![Screen Shot 2022-10-16 at 1.53.57 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_1.53.57_PM.png)

You’ll notice that inside the command line text output, in the line that starts with “ready”, it says that it has 

“started server on…….http://localhost:3000”

This means that the app is now running on your local machine. It has a server running. 

A server accepts requests, and gives back a response. The thing that sends the requests is called the client. 

Since this is on [localhost](http://localhost), it means that your computer will only take requests from itself. 

The application only works on your machine and nobody else can see it. Aka you are both the server and 

We will be using a browser to send the server a request. 

**Open a browser and enter [http://localhost:3000](http://localhost:3000/)**

Your browser should show you a map, like this: 

![Screen Shot 2022-10-16 at 2.04.26 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_2.04.26_PM.png)

# COLLABORATING IN GIT, WITHOUT BREAKING EVERYTHING

…and then have your teammates be very upset at you.

 

> When you code a project, **one error somewhere can cause the entire app to stop working.**
> 

So as you are building the app, you want to have a stable branch. Code in the stable branch should be well…stable. 

As in it has been tested, and your team members have agreed to the changes that are in that branch. 

**In our project, the stable branch is the ‘dev’ branch** 

<aside>
💡 When you are working, make a branch from the dev branch, and work on that one.

</aside>

There are many ways to organize branches. For now name the branch “dev-<your name>”

## How to create your own branch

1. On Github Desktop, click the current branch button

![Screen Shot 2022-10-16 at 2.30.39 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_2.30.39_PM.png)

1. Then, click the new branch button

![Screen Shot 2022-10-16 at 2.46.24 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_2.46.24_PM.png)

1. A window titled “Create a branch” will pop up, name your branch and click the blue “create branch” button.
    
    If successful, at the top of the window, it should say: “current branch: <name of the branch you just created>
    

![Screen Shot 2022-10-16 at 2.47.31 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_2.47.31_PM.png)

1. Click “publish branch to github” 
    
    This will make the branch appear on the remote (online) repository
    

![Screen Shot 2022-10-16 at 2.48.33 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_2.48.33_PM.png)

1. Making sure you are on your own branch:

At the top of your github desktop app, it should tell you which branch you are on. 

Alternatively, you can enter this in the command line

```jsx
git branch
```

It should look like this: 

![Screen Shot 2022-10-16 at 2.51.09 PM.png](How%20to%20use%20the%20app%20f1b2e0aeadba42e3852a4d6b06625f18/Screen_Shot_2022-10-16_at_2.51.09_PM.png)