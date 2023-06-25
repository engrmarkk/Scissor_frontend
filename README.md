## Scissor frontend

This a project that consumes the URL Shortener API built with flask.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Reflection

The final capstone project at Altschool Africa involves the development of a frontend application that consumes a URL shortener API built with Flask. This project aims to provide a user-friendly interface for generating shortened URLs and managing them efficiently.

The frontend is an essential component of any web application as it directly interacts with users, providing them with a visually appealing and intuitive interface. In this case, the frontend application serves as a client for the URL shortener API, allowing users to interact with the service seamlessly.

The frontend application is developed using React. These technologies enable the creation of dynamic and responsive web pages, providing an enhanced user experience.

The frontend application has multiple functionalities that enable users to interact with the URL shortener API effectively. Let's delve into some of the key features and components of this frontend project:

- User Interface Design: The frontend application focuses on delivering an attractive and user-friendly interface. This involves creating a layout that is visually appealing, easy to navigate, and intuitive to use. The design should incorporate a consistent theme, colors, and typography to provide a cohesive and engaging user experience.

- URL Shortening Form: The frontend application includes a form where users can input a long URL that they want to shorten. This form collects the user's input and sends a request to the backend API for URL shortening.

- API Integration: The frontend application communicates with the URL shortener API built with Flask. It sends HTTP requests to the API endpoints, such as creating a shortened URL or retrieving the list of previously shortened URLs. The frontend handles the responses from the API and displays them appropriately to the user.

- Shortened URL Display: Once a URL is successfully shortened, the frontend application displays the shortened URL to the user. It also provide additional information, such as the number of times the shortened URL has been accessed. It also generates a QR code for every shortened url.

- URL Management: The frontend application allows users to manage their shortened URLs efficiently. This includes features like displaying a list of all the shortened URLs created by the user, allowing them to delete URLs as needed.

- Error Handling: The frontend application incorporates robust error handling mechanisms to handle various scenarios, such as invalid URL inputs, server errors, or network issues. Meaningful error messages should be displayed to the user to provide guidance on resolving the problem.

- Responsive Design: The frontend application should be designed to be responsive, ensuring optimal user experience across different devices and screen sizes. This involves using CSS media queries and responsive design principles to adapt the layout and styling based on the user's device.

- User Authentication and Security: Depending on the requirements of the project, the frontend application may incorporate user authentication mechanisms. This ensures that only authorized users can access and manage their shortened URLs. Additionally, security measures should be implemented to prevent misuse of the URL shortening service and protect user data.


The API repository can be located here [Scissor_API](https://github.com/engrmarkk/Scissor_API)
