# KickassTorrent-API
The Unofficial JS API for Kickass torrent (`https://kat2.biz/`)

![alt text](https://travis-ci.org/Droid997/KickassTorrent-API.svg?branch=master)
![alt text](https://img.shields.io/badge/License-MIT-yellow.svg)
# Usage
## Setup

>npm install --save kickass-torrent-api

## Donate  



## Initialize

```
const kat =require('kickass-torrent-api');
```
# Example Usage

Every Request returns a Promise.

## Base URL

```
kat.baseURL
```
>https://kat2.biz/

## Categories

```
kat.Categories
```
OR
```
kat.getCategories();
```
Available Categories

- Apps
- Books
- GAMES
- Latest
- MUSIC
- Movies
- Other
- TV
- Top100
- XXX

## Options

Options for the type of the results required for the request.

```
kat.Options
```
Options Mainly Includes 
- Fields 
- Order

### Fields

`kat.Options.Fields`
The Available Fields are

- Age
- Leech
- Seed
- Size

### Order

`kat.Options.Order`
The Available Orders are

- Ascending
- Descending

## getApps()

getApps() without parameters returns result for the apps filtered page for page index 1 

```
kat.getApps().then(data=>{
 //returns result for the apps filtered page for page index 1
}).catch(error=>{})

```
### with parameters

```
kat.getApps({
    page:2,
    field:kat.Options.Fields.Seed,
    order:kat.Options.Order.Ascending
    }).then(data=>{
        //returns result for the apps filtered page for page index 2 with seeders in ascending order
    }).catch(error=>{})

```

## getFunctions()

All The getFunctions work in a similar manner as shown above

some of the other get functions are
- kat.getBooks()
- kat.getGames()
- kat.getLatest()
- kat.getMovies()
- kat.getMusic()
- kat.getOthers()
- kat.getTop100()
- kat.getTvTorrents()
- kat.getXXX()

## AdvanceSearch

Used for Custom Search

```
kat.advanceSearch('Game Of Thrones')
.then(data=>{
    // game of thrones result
    }).catch(error=>{})
```

### advanceSearch with Parameters

```
kat.advanceSearch('Game Of Thrones',{
    page:2,
    field:kat.Options.Fields.Seed,
    order:kat.Options.Order.Ascending
}).then(data=>{
    //game of thrones result of page2 seeders in ascending order
})
```

## Response

The Return response includes following data for kat.getApps()

```
category: "applications"
page: "1"
results: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total_results: 20

```

the result inturn contains the data in following manner

```
Download magnet link: "download magentic link........"
comments: "0"
leeches: "0"
page_link: "/t3-Titanium-TV-v2-0-7-Mod-Ad-Free-Apk-CracksNow-tt3549353.html"
posted_by: "cracksnow"
posted_in: "/applications"
seeders: "0"
size: "15.7 MB"
time: "43 minutes ago"
title: "Titanium TV v2.0.7 Mod Ad-Free Apk [CracksNow]"
torrent magnet link: "torrent maggentic link......"
verifed: false
verified_uploader: false
```



