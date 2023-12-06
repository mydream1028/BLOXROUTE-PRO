# BLOXROUTE Blog Application
This is a blog application that allows users to create, view, and search for blog posts. It consists of a backend built with Python and MySQL, and a frontend built with React components.
## Backend
The backend of the application is built using Python and utilizes a MySQL database to store blog posts. It provides a RESTful API with the following endpoints:

- /blog (GET): Retrieves a list of blog posts that are sorted paginated and searched.
- /blog/{id} (GET): Retrieves a single blog post by its ID.
- /blog (POST): Creates a new blog post.

The backend also includes interesting and complex MySQL queries for tasks such as filtering, sorting, and searching blog posts.
## Frontend
The frontend of the application is built using HTML, CSS, and JavaScript. It provides a modern and responsive user interface with the following features:

- Displaying a list of blog posts with titles, excerpts, and publication dates.
- Allowing users to click on a blog post to view its full content.
- Providing a search bar for users to search for blog posts based on keywords.
- Allowing users to create new blog posts.
## Bonus Features
In addition to the basic requirements, the application also implements the following bonus features:

- Pagination: The list of blog posts is paginated, showing a limited number of posts per page.
- Authentication: Users can register and authenticate themselves, and only authenticated users are allowed to create new posts.
## Running the Application
To run the application locally, follow these steps:
### backend
1. Clone the GitHub repository: [link-to-your-repository]
2. Navigate to the project directory
    cd backend
3. Setup virutal environment.
    
    `pip install virtualenv`
4. Configure virtual environment in the project.
    
    `virtualenv venv`
5. Run activate virtual environment.
    
    `venv\Scripts\activate`
6. Install packages using following command.

    `pip install -r requirements.txt`
7. Setup the database
    
    - Create the 'blog-test' database in MySQL.
    
    - Migrate database using following command.

        `python manage.py migrate`
8. Run server using following command and access the application in your web browser.

    `python manage.py runserver`

    https://localhost:8000

### frontend
1. Clone the GitHub repository: [link-to-your-repository]
Set up the backend:
2. Install Python and the required dependencies specified in the requirements.txt file.
    - Set up a MySQL database and configure the connection details in the backend code.
    - Run the backend server using the command python app.py.
3. Set up the frontend:
    - Install Node.js and npm.
    - Install the required dependencies by running npm install in the frontend directory.
    - Start the frontend server using the command npm start.
4. Access the application in your web browser at http://localhost:4173.
## Conclusion
This blog application provides a complete solution for creating, viewing, and searching for blog posts. It includes both a backend API built with Python and MySQL, and a frontend user interface built with React components. The application also implements bonus features such as pagination and authentication.