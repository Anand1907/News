Prerequisites :
Ionic, if not available, run
npm install -g ionic

To install dependencies :
Navigate to project root folder and run
npm install


Design:
-- Structuring the project for better readability.

a) Templates along with respective typescript files are added within the "pages" folder.

   This folder contains all the application pages along with specs.
b) Created "utilities" and "constants" file for handling static as well as reusable contents.
   Example : Toaster, URL's etc.

c) Created HTTP interceptors. 
   This is done to ensure all requests are passed through interceptors within which we can add any general parameters required for the application.
   Example : Token, Content-type etc.

d) All services file are created in separate "providers" folder. This folder is responsible for all HTTP requests.

-- Font sizes for different form factors are relatively measured.
a) Application now scales font sizes for different resolution based on device width.


-- Data Caching
a) Refreshers are added within which users can refresh the application as and when required.
   This ensures app is updated even when caching is enabled.

   
	
  