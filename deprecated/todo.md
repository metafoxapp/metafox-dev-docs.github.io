curl 'http://localhost:3000/api/v1/user/login' \
 -H 'Content-Type: application/json' \
 --data-raw '{"username":"dev@phpfox.com","password":"bubble666"}' \
 --compressed

curl 'http://localhost:3000/api/v1/user/login' \
 -H 'Accept: application/json, text/plain, _/_' \
 -H 'Accept-Language: en-US,en;q=0.9' \
 -H 'Authorization: ' \
 -H 'Cache-Control: no-cache' \
 -H 'Connection: keep-alive' \
 -H 'Content-Type: application/json' \
 -H 'Cookie: yA0JuFD6n6zkC1previewDevice=' \
 -H 'Origin: http://localhost:3000' \
 -H 'Pragma: no-cache' \
 -H 'Referer: http://localhost:3000/' \
 -H 'Sec-Fetch-Dest: empty' \
 -H 'Sec-Fetch-Mode: cors' \
 -H 'Sec-Fetch-Site: same-origin' \
 -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36' \
 -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"' \
 -H 'sec-ch-ua-mobile: ?0' \
 -H 'sec-ch-ua-platform: "macOS"' \
 --data-raw '{"username":"dev@phpfox.com","password":"bubble666","grant_type":"password","client_id":"2","client_secret":"738ab5b83c902a7b81860e05811fd5cd65e95f72"}' \
 --compressed
