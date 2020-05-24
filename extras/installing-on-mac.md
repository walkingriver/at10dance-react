# Shell Commands (macOS)
The following commands are the same as those mentioned in the lesson video. They are provided here for your convenience so that you can copy/paste them as needed.

## Install Homebrew

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Install Git
```
git --version
brew install git
```

## Install nvm

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

## Using nvm

Here are some useful commands for using nvm, which were not shown in the video.

### Install latest "long term support" version

`nvm install lts/*`

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
