---
title: Installing Arch linux on WSL
date: 2022-04-17
tags: code-blog
---

Install [Arch linux](tmic0p2e) under [WSL](yulpo75g) is quite straightforward.
1. Head over to [ArchWsl](https://github.com/yuk7/ArchWSL) and download the [latest](https://github.com/yuk7/ArchWSL/releases/tag/22.3.18.0) version
2. Extract the file
3. Launch a terminal  (I highly recommend [windows terminal](https://www.microsoft.com/en-US/p/windows-terminal/9n0dx20hk701))
4. `cd` into the location of the `arch.exe` file
5. Run it!

And just like that, arch is installed in wsl.
There are further steps needed to turn it into a full fledged OS, but the above is way easier than the [traditional](https://wiki.archlinux.org/title/Installation_guide) installation steps.

## Further customization

Just like that, arch isn't quite useful. There are further [steps recommended](https://wsldl-pg.github.io/ArchW-docs/How-to-Setup/).
I'll be writing up more on this later on.

## Import / Export

One of the coolest things about [WSL](yulpo75g) is the ability to export then import the distro.
This is how I move it from one PC to another when a lot of changes happened. \
That way, I end up finding myself on the new PC with the exact same files and environment as the one on the old PC!


### Export
First, export the distro:
```sh
wsl --export <WSL Image Name> <Export file>

```

You can find the `<WSL Image Name>` by running  `wsl --list`

### Import
Importing is also done with a single command:

```sh
wsl –import <Image Name> <Directory to store Distro> <Export file>
```

Note that if the you are replacing a distro that already exists, you might first need to run:\
`wsl --unregister`


## Things to watch out for

If you are coming from a linux background, you need to know that `systemd` doesn't not work as expected

----

## How to have a GUI

While you can run wsl from a windows terminal, it is also cool to start it with a window manage such as [i3](l73n59zf).\
Here's an in-depth guide on how to do that: [Running arch with i3 in wsl using vcxsrv](lbzvfcl7)
