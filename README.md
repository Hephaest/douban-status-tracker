<p align="center">
  <img width="400" alt="Douban Status in English" src="https://user-images.githubusercontent.com/37981444/101275947-a636e100-375e-11eb-9ce8-5affbda6e228.png">
  <h3 align="center">Douban Status Tracker</h3>
  <p align="center">
    <img src="https://github.com/Hephaest/douban-status-tracker/workflows/Update%20Douban%20Stats%20Gist/badge.svg?branch=master" alt="Update Douban Stats Gist">
  </p>
</p>

---

[![LICENSE](https://img.shields.io/cocoapods/l/AFNetworking.svg)](https://github.com/Hephaest/douban-status-tracker/blob/master/LICENSE)

English | [简体中文](README_CN.md)

> 📌✨ For more pinned-gist projects like this one, check out: https://github.com/matchai/awesome-pinned-gists

## Table of Contents
* [Previous Work](#previous-work)
* [Setup](#setup)
  * [Prep work](#prep-work)
  * [Project setup](#project-setup)
* [Installing](#installing)

## Previous Work

This repo is based off [douban-box](https://github.com/CodeDaraW/douban-box). Special thanks to [CodeDaraW](https://github.com/CodeDaraW).

## Setup

### Prep work

1. Create a new public [GitHub Gist](https://gist.github.com/).
2. Create a [personal access token](https://github.com/settings/tokens/new) with the `gist` scope and copy it.
3. Login or sign up a [Douban](https://www.douban.com/) account.
4. Open your developer console and copy the value corresponding to the name of **dbcl2**.
<img width="600" align="center" src="https://user-images.githubusercontent.com/37981444/101277019-2d3b8780-3766-11eb-83c7-81b4a1071f45.png">
5. Get your Douban ID by clicking your profile page. Copy the ID in the URL.

### Project setup

1. Fork this repo
2. Go to the repo **Settings > Secrets**
3. Add the following environment variables:

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0lax"><b>GIST_ID</b></td>
    <td class="tg-0lax">The ID portion from your gist url: <br> https://gist.github.com/Hephaest/<b>fb33918377b0e2c2d6ffaad64d11bccb</b></td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>GH_TOKEN</b></td>
    <td class="tg-0lax">The GitHub token generated above.</td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>DOUBAN_ID</b></td>
    <td class="tg-0lax">The ID portion from your Douban url: <br> https://www.douban.com/people/<b>12345</b></td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>DOUBAN_COOKIE</b></td>
    <td class="tg-0lax">The copied value corresponding to the name of <b>dbcl2</b> from developer console.</td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>LANG(Optional)</b></td>
    <td class="tg-0lax">The preferred language, default is <b>Chinese</b>.</td>
  </tr>
</tbody>
</table>

## Installing

You can install this package by using npm:

``` sh
$ npm i -g douban-status-tracker
```
