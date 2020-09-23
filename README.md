# paapi5-express-sample
 You can run [paapi5-nodejs-sdk](https://github.com/wusoma/paapi5-nodejs-sdk) as REST API.
## Installation
Clone and install packages.
```
$ git clone https://github.com/sakatech-jp/paapi5-express-sample.git
$ cd paapi5-express-sample
$ npm install
```
Modify config.js with your access key, secret key and partner tag.
```
module.exports = {
  ACCESS_KEY: '<YOUR ACCESS KEY>',
  SECRET_KEY: '<YOUR SECRET KEY>',
  API_HOST: 'webservices.amazon.co.jp',
  REGION: 'us-west-2',
  PARTNER_TAG: '<YOUR PARTNER TAG>',
  PARTNER_TYPE: 'Associates'
}
```
```
$ node app.js
```
If you want to use with docker, please build image and run.
```
$ docker build .
$ docker run -p 3000:3000 -d <IMAGE ID>
```
## Usage
This is a sample request.

You can get keyword search result.

More detail about body parameter:  
https://webservices.amazon.com/paapi5/documentation/operations.html

```
$ curl -X GET 'localhost:3000/searchItems' \
--header 'Content-Type: application/json' \
-d '{
    "Keywords": "Harry Potter",
    "Resources": ["Images.Primary.Medium", "ItemInfo.Title", "Offers.Listings.Price"],
    "ItemCount": 1
}'
```
Sample response.
```
{
    "SearchResult": {
        "TotalResultCount": 146,
        "SearchURL": "https://www.amazon.co.jp/s?k=Harry+Potter&rh=p_n_availability%3A-1&tag=****&linkCode=osi",
        "Items": [
            {
                "ASIN": "B00FIWMXTQ",
                "DetailPageURL": "https://www.amazon.co.jp/dp/B00FIWMXTQ?tag=****&linkCode=osi&th=1&psc=1",
                "Images": {
                    "Primary": {
                        "Medium": {
                            "URL": "https://m.media-amazon.com/images/I/51ON0XUcGaL._SL160_.jpg",
                            "Height": 160,
                            "Width": 120
                        }
                    }
                },
                "ItemInfo": {
                    "Title": {
                        "DisplayValue": "ハリー・ポッターと賢者の石 (字幕版)",
                        "Label": "Title",
                        "Locale": "ja_JP"
                    }
                },
                "Offers": {
                    "Listings": [
                        {
                            "Id": "6Fs4lD56qb9HZmZ85Cw%2BdWK7dmNQ8oAqYcBKqxzbazgDugXjkzA6iSbhQlxNwLoveoXO0LFUGQA%2FShBvyVyqYe%2BaAEzB8QM4gDnhUyM7RnUvRz9CUkixas%2F2FZI8yEmP9tThhI35x3GVMsjleqwNsQknEFGYbGgX",
                            "Price": {
                                "Amount": 299,
                                "Currency": "JPY",
                                "DisplayAmount": "￥299"
                            },
                            "ViolatesMAP": false
                        }
                    ]
                }
            }
        ]
    }
}
```