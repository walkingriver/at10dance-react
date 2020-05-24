# URLs Referenced in This Lesson
These are the URLs mentioned in this lesson:
- Install Node: https://nodejs.org
- Install Git: https://git-scm.com

# Shell Commands (Linux)
The following commands are the same as those mentioned in the lesson video. They are provided here for your convenience so that you can copy/paste them as needed.

## Install Git from the Package Manager
```
git --version
sudo apt-get install git
```

## Install Node from the Package Manager
```
node --version
sudo apt-get install node
```

## Install Node Version Manager
Choose one of these commands to install nvm. Some Linux distributions prefer curl to wget, and vice versa.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

## Using nvm

Here are some useful commands for using nvm, which were not shown in the video.

### Install latest "long term support" version

`nvm install 'lts/*'`

### Check node version
`node --version`

### See which node versions you've installed
`nvm ls`

### See which node versions are available to install
`nvm ls-remote`

### Install particular node version
`nvm install v11`

### Switch to a different installed node version
`nvm use 12`
