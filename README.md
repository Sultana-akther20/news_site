# news_site
* [News_Site](https://newstic-9bd1594d1063.herokuapp.com/)
* [My Website Description](#my-website-description)
* [Mockup](#mockup)
* [User Story](#user-story)
* [Design and Elements](#design-and-elements)
* [Content](#content)
* [Get Helps From](#get-helps-from)
* [Deployment](#deployment)
* [Language Used](#language-used)
* [Frameworks, Libraries and Programme Used](#frameworks-libraries-and-programme-used)
* [Target Audience](#target-audience)
* [HTML Validator](#html-validator)
* [CSS Validator](#css-validator)
* [JSHint for JavaScript](#jshint-for-javascript)
* [Lighthouse](#lighthouse)
* [Wireframe](#wireframe)
* [Test Plan](#test-plan)
* [Explanation Of The Testing](#explanation-of-the-testing)
* [Manual Testing](#manual-testing)
* [Gantt Chart](#gantt-chart)
* [ScreenShots Of The Pages](#screenshots-of-the-pages)

## Mockup
![Image](https://github.com/user-attachments/assets/5753c285-038d-450d-89a7-987e069a9f90)

## My Website Description
My website is about a latest news where the news reader can visit and read news. I have made this by using API key to fetch the latest news. The news reader can open the site by login or signup. They can leave a comment and like and dislike. They also can edit the comment or delete it.To use this site they nneed to sign in and if they are new they need to sign up first. then they can login to the home page where they can see the the headlines of the news. If they click on the headline, they will enter the page where they can read and do the other stuff. If they made a comment and submit it, they can see it is waiting aapproval. So when the admin approved the comment, then the comment will be approved. Also in home page news reader can see a Fetch Latest News button,if they click on the button, it will show you a message "You can't fetch any news. This buttton is only for admin users.". There is also another NEXT button, if you click the button it will take you to the next page and click again and again to see more news. after going to  next page you can see a PREV button to get to the previous page.

As a superuser I have the username and password, so that I can make the changes inside of the admin page. There is a Fetch Latest News button in home page so I can click it to fetch the latest news. These news will be about anything around the world. So reader can choose anything to read. after clicking the Fetch button it will show me a message that how many news it fetch now. Inside the admin page I can add articles and comments. I can add groups and users and I can add the sites for domain url where I deployed my project. I can also add attachment for django Summernote to get the files from my computer. For example I could get the Image file and save them there. I also can add my social account under social account section.

## User Story
### For us
1. As a news dropper, I can post the news story, so that user can read the news story and get the information they are looking for.
2. As a creator, I can create a login page, so that I know who entered on my website to read the news
3. As a creator, I can create like and dislike button, so that I know who likes and dislikes the news
4. As a creator, I can create a comment box, so that I know who comments about the news and what they comment.
5. As a news dropper, I can create a delete button for comment, so that if user want to delete any comment, they can delete them
6. As a news dropper, I can create an edit button, so that the reader can click on edit button to edit


### For News Reader
1. As a news reader, I can search the news list, so that I can choose which news to read.
2. As a news reader, I can like and dislike the news, so that poster can see the reader are liking or disliking their post.
3. As a news reader, I can add comments, so that they can improve.
4. As a news reader, I can login by adding the information about me, so that I can return anytime to read.
5. As a reader, I can delete the comment if I don't like to send, so that creator would not see
6. As a news reader, I can sing in by using my information to register, so that I can entered the news site to read the news anytime by login.
7. As a news reader, I can sing out by clicking the sign out button, so that I can close the site securely.
8. As a news reader, I can edit the comment, so that I can edit if I want to change something.


## Design and Elements
1. Fetch news- I have got the API KEY by sign in and used this in my project to get the latest news by fetching. I am using these to get the news from all over the world instesd of using same article. Also I have setup a post-backup.json so if I want to create an article I can.
2. Footer- I used font awesome kit to get the icon for social media and used copyright symble.
3. Favicon- I used favicon to make the logo of my website.
4. 

## Image Site
1.  https://unsplash.com/photos/venn-diagram-9Bs7b1cpek8

## Get Helps From
1. I got helps most of it from Code Institute blog part. It helps me how to crete the project by using django, allauth and how to implement these with python code. 
2. From my teacher, he explained what need to be included and how to deploy.
3. My mentor helps me by giving me some ideas.
4. W3School
5. Bootstrap- I used this for implement some design
6. Django- I used django for administration site and with my python code 
7. Allauth- I used this for authentication


## Deployment
To deploy News_Site Project to heroku I followed these steps: I have created a requirements.txt file by running pip freeze >requirements.txt in terminal. Then I have I have created a Procfile in the root of my project by running echo web: python app.py > Procfile. Then I commited for these files and pushed them to github. I have created a new app in heroku website after login by clicking New in dashboard and then gave a name and set to region to United States. After clicking the new app from dashboard I click deploy and then deployment method and select github. I confirm the linking to heroku app to connect the github repository. From heroku dashboard, I clicked on settings, then Reveal Config Vars, then I have set the database_url and Secret_key from the key and value. 
Then from the heroku dashboard I clicked deploy. For the manual deployment, go to manual deployment section, then the branched to main and then then click deploy branch. Then the site is successfully deployed.

### How to run this project locally
* If the user wants to run this project, they have to Create a GitHub account.
* Then from any IDE they have to make the project remotely from any IDE to github [Project GitHub repository](https://github.com/Sultana-akther20/news_site.git).
* Then they have to run python manage.py runserver in terminal and click on the link from terminal.

### To work on the project within any local IDE
* First they have to click this link [ Project GitHub repository](https://github.com/Sultana-akther20/news_site.git). Under the repository name, they have to click "Clone or download".
* In the HTTPs section, copy the clone URL for the repository.
* In their IDE open the terminal, then change the current working directory to the location where they want to cloned directory to be made.
* Then type git clone and paste the URL they copied before, the project github repository one. 
* Then press Enter and a local clone will be created for them. 

## Language Used
[HTML5](https://en.wikipedia.org/wiki/HTML5),
[CSS3](https://en.wikipedia.org/wiki/CSS3),
[JavaScript](https://en.wikipedia.org/wiki/JavaScript),
[python](https://en.wikipedia.org/wiki/Python)
[PostgreSQL](https://www.postgresql.org/)

## Frameworks, Libraries and Programme Used
1. [Font Awesome Kit](https://fontawesome.com/) I used this in the footer to use social media icons.
2. [git](https://git-scm.com/) I used this to commit messages in terminal.
3. [github](https://github.com/) I used this to create repository, links to VScode etc.
4. [Figma](https://www.figma.com/) I used this to create wareframe.
5. [w3school](https://www.w3schools.com/) I used this to show the instruction in the main page.
6. [favicon](https://favicon.io/) I used this to create a logo related to my website and used this in both page.
7. [Django](https://www.udemy.com/)
8. [Allauth](https://django-allauth.readthedocs.io/en/latest/)

## Target Audience
1. News Readers
2. Admin
3. colleagues

## Explanation Of The Testing:
Manual testing means all the testing from the project been tested without any automation tools. I have tested my project by manually like: I used test discription, expected outcome, actual outcome, error status, screenshots for the test. By doing this test helped me identify the UI/UX issues and helped me to test the elements and design across different devices.
In automated testing: By using this test it runs the tests repeatedly without manual effort and it is faster. 
### differences between these tests are below:
* Manual testing performed by human and Autometed testing excuted by tools.
* Manual testing takes more time and automated testing faster execution once set up.
* For the reliability it based on tester and autometed testing based on consistent results.
* Manual testing is flexible to adapt to change requirements quickly and automated testing requires updates to test scripts when requirments change etc.

## Test Plan 
1. when user visit the site, a login page should be appear
2. for new user if they try to sign in a message should be appear for sign up
3. after sign in the user should see the home page and the news articles
4. they can choose the news articles by clicking next button
5. in the next page they can see the prev button to come to the previous page
6. in the home page if they click the fetch latest news button a message should be appear, as "You can't fetch any news. This buttton is only for admin users."
7. after clicking the news header user should enter the page
8. under the news user should see the comment box to comment
9. there should be an edit comment button to edit the comment
10. there should be a delete button to delete the comment
11. there should be a like button and a dislike button 
12. after making a comment the message should appear on the left side for approval
13. there should be comment count box to see how many comments have been made
14. for a super user there should be the add and change button to add any groups or users 
15. for a super user there should be a section for article and comment to add or change
16. as a super user there should be a section for recent action where super user can approved the comments 
17. for a super user there should be site section where super user can add or change the domain 

## Manual Testing: 

![Image](https://github.com/user-attachments/assets/88f3c09b-75c1-42cd-bb70-c073b6a2b369)

![Image](https://github.com/user-attachments/assets/b02a8a64-ad87-488f-9b8b-65da174ea95a)

![Image](https://github.com/user-attachments/assets/426d84c5-b371-440d-8c99-118d6520342a)

![Image](https://github.com/user-attachments/assets/72667135-b22a-4925-9dfb-1c9494893502)

![Image](https://github.com/user-attachments/assets/24cc5425-5ab5-4a9b-b592-689a7fe9ef6f)

![Image](https://github.com/user-attachments/assets/5347ccfc-e282-4d44-9792-f5d56c90ed6b)

![Image](https://github.com/user-attachments/assets/54b68fcb-a004-479a-bcc6-fbd9b5e6d804)

![Image](https://github.com/user-attachments/assets/6c5dafe3-544a-4ee7-b153-9c771efbea43)

![Image](https://github.com/user-attachments/assets/27c10916-2a62-4427-8cad-b1fa95f82938)

![Image](https://github.com/user-attachments/assets/9996ee32-5954-4c7c-9c28-0fc9838e511f)

## HTML Validator

![Image](https://github.com/user-attachments/assets/be1add71-92e2-489b-8a58-8fffa99c8d6b)

![Image](https://github.com/user-attachments/assets/bf0cd130-0b7b-49aa-8ca1-15f59fede7f9)

## CSS Validator

![Image](https://github.com/user-attachments/assets/2910c7f6-bbab-4852-bbdc-10aac4b20c0f)

## JSHint for JavaScript

![Image](https://github.com/user-attachments/assets/4325eb0d-9f4a-4a44-b66b-4854fba3e432)

![Image](https://github.com/user-attachments/assets/304c5b1c-b675-49b2-bd73-447879b651fe)

![Image](https://github.com/user-attachments/assets/23df9a95-f126-4981-b078-b0f690456b9f)

## Lighthouse

![Image](https://github.com/user-attachments/assets/c99b80da-6fe0-4280-b6d4-de2d17e22cc5)

![Image](https://github.com/user-attachments/assets/4324492a-9808-40d5-92d9-2ab6a12a396f)

![Image](https://github.com/user-attachments/assets/7dfc82d0-577c-4ab4-be17-ee600a80c3be)

## Wireframe

![Image](https://github.com/user-attachments/assets/6e539de8-b1b3-4a51-8701-60ebfae86a72)

![Image](https://github.com/user-attachments/assets/a6aa6fc1-e64e-47e4-9b11-4686fe931e34)

![Image](https://github.com/user-attachments/assets/ec912363-e9e0-4f0b-92f4-302c163635e7)

![Image](https://github.com/user-attachments/assets/0c9f15ab-cbb6-4c4a-b56f-e3d221f16aca)

## Gantt Chart

![Image](https://github.com/user-attachments/assets/5073b3c1-aba6-49e0-a7ad-dec4a7cdcd05)

## ScreenShots Of The Pages

![Image](https://github.com/user-attachments/assets/881e0415-c1af-4200-831b-245538262dc3)

![Image](https://github.com/user-attachments/assets/9cbfc777-2ee8-4b76-a774-ebbcdf891a37)

![Image](https://github.com/user-attachments/assets/ff61de8f-2d0e-42f7-a1d5-b10ce4787922)

![Image](https://github.com/user-attachments/assets/2455df13-299c-4bf4-89d5-d14b3d6b52d7)

![Image](https://github.com/user-attachments/assets/aee85744-4fdd-47e2-a00c-a549041f0e4e)

![Image](https://github.com/user-attachments/assets/af59f6e1-8b44-4b15-bb2d-5f5569a87eeb)

![Image](https://github.com/user-attachments/assets/0b4a9527-4499-44b2-bfc5-02bf834830f4)

![Image](https://github.com/user-attachments/assets/8989e61c-be9e-4aeb-9452-cdfbc192bd65)

![Image](https://github.com/user-attachments/assets/90f8b849-a04c-41bf-a0c0-678db6b122bb)

![Image](https://github.com/user-attachments/assets/b6122e55-cfc3-44e1-bdc4-5a45fcb2b3ca)
