# CodeCollab


## Description:

This is an application for people to share any cool code-related content, including pictures using the cloudinary API:
  - The application is a mySQL database driven website that has has a RESTful API.
  - The application includes functionality for user's to sign-up, which then allows     them to post content to the app for other user's to see. 
  - The application uses the bcrypt node package to keep user's password data secure.
  - The application follows the MVC folder structure.
  - The application uses Express handlebars package to dynamically render content from the database onto the page.
  - The application uses the Cloudinary API to upload and save user's pictures to Cloudinary, via the Cloudinary upload widget. The images are saved to the database only as links, which are then used to fetch the pictures from Cloudinary later on and display them to the page.

Things we learned building this application:
  - Communication is key when working as a group, making sure that we were working on different things so we didn't do anything twice was important.
  - Merging is VERY important, we had a few instances of things that were originally working, only to realize they got broken along the way after merging.
  - We learned that as developers sometimes our work seems to go 1 step forward and 2 steps back. Fixing some issues led to creating more in other areas.
  - We decided as a group on using one git-branch at the beginning of this project. After seeing how messy and easy it is to break things when adding new features, and even just working as a group in general all pushing to the same place, we definitely now realize the value in using separate branches for new features.
  - Testing is super important before pushing any code. ESPECIALLY in our case because we were just using the main branch. When adding new features and functionality, you should try everything you can to break it first.
  - Building this application we got hands-on experience with a lot of new things. Cloudinary, bcrypt, Express sessions and handlebars. Not to mention this project was our first actual full-stack project, and we did it from scratch.
  

## Installation:

This application is deployed on heroku and can be viewed at this link: 
https://code-collab.herokuapp.com/


## Usage:

<!-- keeping these empty for now, once project is finished we can add screenshots of the completed code and the deployed application here -->
![""](/images/)
![""](/images/)


## Credits:

This project was built by the three of us: Gabe, Stephen, and Victoria.


## License:

MIT license