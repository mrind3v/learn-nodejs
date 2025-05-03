# To-do

### Design a url-shortener that takes a valid URL and returns and shortened URL redirecting the user to the org URL

#### Also keep track of the number of visits/clicks on the URL generated

Routes:

1. POST /URL - generates a shortened url in the formal example.com/random-id
2. GET /:id - redirects user to the original url
3. GET /URL/analytics/:id - Returns the number of clicks on the short id