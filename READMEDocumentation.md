### Prerequisites (Before You Start)
Before installing the project, ensure you have the following installed on your system:

### Backend (Laravel) Requirements:
•	PHP (>=8.0)
•	Composer (Dependency manager for PHP)
•	MySQL (For database)
•	Laravel Installer (Optional but recommended)
•	A Web Server (Apache or Nginx)
•	
### Frontend (React) Requirements:
•	Node.js (>=14.0)
•	npm (Node Package Manager) or Yarn


### Installation Steps
Follow these steps to install and run the project.
### 1.	Clone the Repository
Open a terminal or command prompt and run:
 git clone <repository-url>
Example:
git clone https://github.com/username/project.git

This downloads the project files to your local machine.
### 2.	Navigate to the Project Directory 
After cloning, move into the project folder:

cd project-folder-name

### 3.	Install Dependencies 
For Backend (Laravel)
Run the following command inside the backend folder:
composer install
This will install all necessary PHP dependencies.
For Frontend (React)
Run the following command inside the frontend folder:
npm install
This installs all required JavaScript dependencies.
### 4.	Set Up Environment Variables 
1.	Copy the example environment file:
cp .env.example .env
2.	Open the .env file in a text editor and set up the database configuration:
ini

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password

### 5.	Create and Migrate the Database 
1.	Create a MySQL database with the same name as set in the .env file.
2.	Run migrations to create tables:

php artisan migrate –seed


### 6.	 Generate Application Key (Laravel)
Run this command in the Laravel project root to generate a secure application key:
php artisan key:generate

### 7.	Run the Project 
### For Backend (Laravel)

Start the Laravel development server by running:
php artisan serve

This will output a URL (e.g., http://127.0.0.1:8000) where the backend API will be accessible.
### For Frontend (React)
If the frontend is a separate project, navigate to its folder and run:
npm start
This will open the frontend application in your default browser.

•	Once both backend and frontend servers are running, open the browser and access:
### o	Backend API: http://127.0.0.1:8000/api (or as configured in Laravel)
### o	Frontend: http://localhost:3000 (default for React)

