# A Node Custom API that will accept user details and return the list of users in a Wordpress system via API.

Tools used:

For wordpress backend

- XAMPP
- PhpMyAdmin
- WordPress
- PostMan 
- FileZilla

For Custom API 

- Node JS
- Express JS Framework
- Axios
- Docker Desktop

# to access the POSTMAN documentation 
- https://documenter.getpostman.com/view/31269485/2sAYJAeczd

# how to access users in wordpress
http://localhost/wordpress/wp-json/wp/v2/users

# other Rest API endpoints in wordpress

List posts:
GET http://localhost/wordpress/wp-json/wp/v2/posts

Get a specific post:
GET http://localhost/wordpress/wp-json/wp/v2/posts/{id} or 1

# wordpress references

- https://developer.wordpress.org/rest-api/reference/


!!! 
this test is tested on Node.js server using Express and Axios to connect to the WordPress API and Postman and used for API documentation and testing. 
!!!

# run node index.js to see if wordpress api in custom api is fetching or working  
- http://localhost:3000/users

# for wordpress folder 
it consists of my local database which used for xampp or my local development and also wordpress setup and its main folder

# use postman and test get http://localhost/wordpress/wp-json/wp/v2/users and this is the json

[
    {
        "id": 1,
        "name": "daniel_naval",
        "url": "http://localhost/wordpress",
        "description": "",
        "link": "http://localhost/wordpress/author/daniel_naval/",
        "slug": "daniel_naval",
        "avatar_urls": {
            "24": "https://secure.gravatar.com/avatar/b7ba776cc611936696fd75027d2882fc?s=24&d=mm&r=g",
            "48": "https://secure.gravatar.com/avatar/b7ba776cc611936696fd75027d2882fc?s=48&d=mm&r=g",
            "96": "https://secure.gravatar.com/avatar/b7ba776cc611936696fd75027d2882fc?s=96&d=mm&r=g"
        },
        "meta": [],
        "_links": {
            "self": [
                {
                    "href": "http://localhost/wordpress/wp-json/wp/v2/users/1",
                    "targetHints": {
                        "allow": [
                            "GET"
                        ]
                    }
                }
            ],
            "collection": [
                {
                    "href": "http://localhost/wordpress/wp-json/wp/v2/users"
                }
            ]
        }
    }
]

# for my CUSTOM API

# Now do POST http://localhost:3000/users and since my wordpress doesn't require password or skipped password use and test it using username only. here below after post send
# Note it should be in raw json format 

{
  "username": "daniel_naval"
}

# And fetch users using http://localhost:3000/users again then use GET and it should response like this 

[
    {
        "id": 1,
        "name": "daniel_naval",
        "username": "daniel_naval",
        "link": "http://localhost/wordpress/author/daniel_naval/"
    }
]

# run docker build -t custom-wordpress-api .

# then docker run -d -p 3001:3000 --name custom-wordpress-api custom-wordpress-api

# once run http://host.docker.internal/wordpress/wp-json/wp/v2/users for testing