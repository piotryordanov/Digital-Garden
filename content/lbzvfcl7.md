---
title: Running arch with i3 in wsl using vcxsrv
date: 2022-04-17
tags: code-blog
---

The goal of this post is to show a minimal configuration to run
[i3](l73n59zf) in [Arch linux](tmic0p2e) under [WSL](yulpo75g) using [vcxsrv](0f4migk7).

## Installing necessary apps
1. Make sure you [installed Arch linux on WSL](qfosh20u)
2. Download and install [VcXsrv](0f4migk7)

## Creating launch scripts

### Step 1:

You are going to need 2 files. The first is called `arch.vbs` and contains the following:

```bash
Set shell = CreateObject("WScript.Shell" )
shell.Run "wsl.exe -u <username> -- sh ~/.config/wsl.sh", 0
```

⚠️  Make sure your replace `<username>` with your actual user.


### Step 2:
Next, inside wsl run the following code:

```bash
mkdir ~/.config
touch ~/.config/wsl.sh
```

This will create a `.config` folder in your home, and add a `wsl.sh` file to it.

### Step 3:

Add the following to the `wsl.sh` file:
```bash
#!/bin/bash

export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0;
export WAYLAND_DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0;

/mnt/c/Program\ Files/VcXsrv/vcxsrv.exe -ac -wgl -dpms -fullscreen&
i3
```

Let's break down the file:
The first 2 line are important to tell `wsl` how to connect to the X-server. You don't have to worry about customizing it.

The line that launches `vcxsrv` is important:
1. The `-ac` is very important. It disables access control. Without it, nothing will work.
2. The last options are... optional 😆  Try playing around with the `-fullscreen` and `-multimonitor` options depending on your setup

You might also want to try `-nodecoration` in case you don't want to run the `-fullscreen` option.
A full breakdown of options is available on the [VcXsrv](https://sourceforge.net/projects/vcxsrv/) page


----

## Launch it

Now, when you double click the a`rch.vbs` file in windows, it should run wsl and start i3 for you.\
If it fails, try running `wsl.sh` from a wsl instance running in a standard windows terminal.
