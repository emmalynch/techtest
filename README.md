[![Build Status](https://travis-ci.org/emmalynch/techtest.svg?branch=main)](https://api.travis-ci.com/emmalynch/techtest.svg?token=vyW9iJyoppTUFbWb8RwY&branch=main)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# About this program

A simple program to process a file containing customer's locations and write a file of customers within 100KM of a given location.

File paths and office locations are configured in `config/default.json`.

Tested with: 
 - Node - `v15.9.0`
 - Typescript - `v3.9.9`
 - Yarn - `v1.22.10`
# Running this program

- Install Node (>=10.0.0)
- Install Yarn
- Install project: `yarn install`
- Build: `yarn build`
- Run: `yarn start`

# Output

The program will write the results to `./resources/output.txt`.
The output should look like the following:
```
{"latitude":"53.2451022","longitude":"-6.238335","name":"Ian Kehoe","user_id":4}
{"latitude":"53.1302756","longitude":"-6.2397222","name":"Nora Dempsey","user_id":5}
{"latitude":"53.1229599","longitude":"-6.2705202","name":"Theresa Enright","user_id":6}
{"latitude":"54.0894797","longitude":"-6.18671","name":"Eoin Ahearn","user_id":8}
{"latitude":"53.008769","longitude":"-6.1056711","name":"Richard Finnegan","user_id":11}
{"latitude":"52.986375","longitude":"-6.043701","name":"Christina McArdle","user_id":12}
{"latitude":"53","longitude":"-7","name":"Olive Ahearn","user_id":13}
{"latitude":"52.966","longitude":"-6.463","name":"Michael Ahearn","user_id":15}
{"latitude":"54.180238","longitude":"-5.920898","name":"Patricia Cahill","user_id":17}
{"latitude":"54.080556","longitude":"-6.361944","name":"Eoin Gallagher","user_id":23}
{"latitude":"54.133333","longitude":"-6.433333","name":"Rose Enright","user_id":24}
{"latitude":"53.038056","longitude":"-7.653889","name":"Stephen McArdle","user_id":26}
{"latitude":"53.74452","longitude":"-7.11167","name":"Oliver Ahearn","user_id":29}
{"latitude":"53.761389","longitude":"-7.2875","name":"Nick Enright","user_id":30}
{"latitude":"53.1489345","longitude":"-6.8422408","name":"Alan Behan","user_id":31}
{"latitude":"53.0033946","longitude":"-6.3877505","name":"Lisa Ahearn","user_id":39}
```

