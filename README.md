[![Greenkeeper badge](https://badges.greenkeeper.io/marcusasplund/priceindex.svg)](https://greenkeeper.io/)
[![GitHub issues](https://img.shields.io/github/issues/marcusasplund/priceindex.svg)](https://github.com/marcusasplund/priceindex/issues)
[![Build status](https://travis-ci.org/marcusasplund/priceindex.svg?branch=master)](https://travis-ci.org/marcusasplund/priceindex)
[![dependencies](https://david-dm.org/marcusasplund/priceindex.svg)](https://david-dm.org/marcusasplund/priceindex)

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard) 

# prisomräknare

## [demo prisomräknaren](https://pap.as/prisomraknare/)

Här kan du konvertera längre serier med historiska priser, både framåt till 2018 o bakåt till 1830. Du kan välja mellan att ladda upp en .csv med tabelldata i ett format där de två första kolumnerna är [år], [pris]. Även att skriva eller klistra in den i textrutan.
När du har data kan du även byta slutår i selecten. Efter konvertering kan du ladda ned en .csv med resultatet.

Datan kommer från [SCB:s prisomräknare](https://www.scb.se/hitta-statistik/sverige-i-siffror/prisomraknaren/)

## installation

````bash
$ git clone https://github.com/marcusasplund/priceindex.git
$ cd priceindex
$ yarn
$ yarn start

````
