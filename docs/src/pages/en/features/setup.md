---
title: Setup
description: xs-dev platform setup
layout: ../../../layouts/MainLayout.astro
---

# Moddable Platform Setup

This command downloads the [Moddable developer tooling](https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/tools/tools.md) for the current OS (Windows support coming soon).

[After installing the CLI](/en/introduction#installation), call the `setup` command:

```
xs-dev setup
```

This process mostly automates the instructions provided by [Moddable's "Getting Started" documentation](https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/Moddable%20SDK%20-%20Getting%20Started.md) with a few exceptions.

**On macOS:**

[Homebrew](https://brew.sh/) is assumed to be installed.

The [Xcode Command Line tools](https://developer.apple.com/xcode/) are required; `setup` will check for their existence before continuing.

A symlink for [`xsbug.app`](https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/xs/xsbug.md) is created in `/Applications` for easy access through Launchpad.

**On Unix environments:**

The [`moddable` git repo](https://github.com/Moddable-OpenSource/moddable) is cloned into `~/.local/share` instead of a new/existing `~/Projects` directory.

## Target Branch

The default behavior of this command for Moddable developer tooling pulls the [latest release tooling](https://github.com/Moddable-OpenSource/moddable/releases) and source code for the associated tagged branch. This provides a known-working state for the SDK and avoids needing to build the tooling on the local machine. 

To override this behavior, use the `--target-branch` flag to select `public`; this fetches the latest commit off that main branch and runs the build to generate the associated tools.

```
xs-dev setup --target-branch public
```

_This will only work for the `mac`, `windows`, and `linux` device options, which are the respective defaults for the operating system on which the command is run._

## Device Setup

While the `setup` command provides the Moddable SDK for the dev environment, the `--device` flag selects another platform target SDK to set up. It ensures the Moddable SDK has been installed first.

```
xs-dev setup --device esp32
```

Use the `--list-devices` flag to get a prompt for supported device tooling to install.

```
xs-dev setup --list-devices
```

## Additional related tooling

There are some utilities that are not included in the Moddable SDK or other platform tooling but can be helpful with some common development tasks. The `--tool` flag allows for installing one of these related tools, which may not be easily done from a typical package manager.

**Supported tools:**

[`fontbm`](https://github.com/vladimirgamalyan/fontbm): BMFont compatible, cross-platform (Linux/macOS/Windows) command line bitmap font generator (FreeType2 based render)

```
xs-dev setup --tool fontbm
```
