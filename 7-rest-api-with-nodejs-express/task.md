# Tasks

- Create JSON based REST API (practice: for client-side rendering, we send JSON from
  server to client which is supposed to be rendered on the client side)
- Now create the following routes with specific HTTP methods:
    > [!NOTE]
    > Our server will be made hybrid (is a best practice). Meaning, it will be meant for
    > both casual-users and developers. So when we make a request at /api/users, we shall
    > return a JSON file (if the dev wants to make use of our api). Else, if someone
    > hits the route at /users, we shall return a rendered HTML doc to the user

    - GET /users -> List all users (render HTML doc)
    - GET /api/users -> List all users (JSON) (Do the same for all other routes!)
    - POST /api/users -> Create new user (Q. with which id?)
    - GET /users/1 -> Get user with ID 1
    - PATCH /users/1 -> Edit user with ID 1 (Q. edit to what?)
    - DELETE /users/1 -> Delete user with ID 1