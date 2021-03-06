# AndroidApiMonitoring
[![Python Version](https://img.shields.io/badge/Python-3.5%2B-green.svg?logo=python&logoColor=white)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Dado1513/AndroidApiMonitoring/blob/master/LICENSE)

**AndroidApiMonitoring** is a python tool based on Frida for monitoring all APIs selected during the app execution.
The app is installed within an emulator, already up and connected through ADB to the pc host. 
The user can choose to monitor a predefined list of API  divided into categories (e.g., Device Info, SMS, etc.) or a specific API passed through the command line to the script.
For each app, the tool stores the API and their parameter values invoked during app execution and writes them into a log file.

### Installation

- install virtualenv

```bash
pip install virtualenv
```

- install requirements

```bash
pip install -r requirements
```

- adb in path file
- emulator/device already running and connect

### Usage

![Help](https://github.com/Dado1513/AndroidApiMonitoring/blob/master/img_repo/command_help_v2.gif)

--------------------

Usage script frida in a general way:

```bash
frida -U -l script.js -f "packagename" --no-pause
```

### Credits