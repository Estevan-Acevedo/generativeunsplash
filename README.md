# generativeunsplash

- [Project Planning](#project-planning)
  - [Overview](#overview)
  - [Wireframes](#wireframes)
  - [MVP](#mvp)
    - [Goals](#goals)
    - [Libraries](#libraries)
    - [Data](#data)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
    - [Helper Functions](#helper-functions)
  - [Post-MVP](#post-mvp)
- [Project Delivery](#project-delivery)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

## Project Planning

I will use the Unsplash Api to create a list of images with a search bar. The images will be clickable. Once Clicked, the user will be routed to a second page. On this page they will have options to use generative art elements on the photo.

<br>

### Overview

**Generative Unsplash.** 

**Project Description** I will use the Unsplash Api to create a list of images with a search bar. The images will be clickable. Once Clicked, the user will be routed to a second page. On this page they will have options to use generative art elements on the photo.


<br>

### Wireframes

Home Page: https://wireframe.cc/6UXqr3

Image Page: https://wireframe.cc/M0s5P4

<br>

### MVP

### Planning <!-- omit in toc -->

- Have a **thoroughly** developed `README.md` file. (Refer below to _"Step 5: Pitch Your Project Idea"_ for more.)

### React <!-- omit in toc -->

- Be a working, interactice React app, built using `create-react-app`. Make sure that the React app is at the root of your repository and not in a nested folder. 
- Utilize React Router, installed via NPM. 
- Have at least 6 separate, rendered components.
- Implement an organized and understandable React file structure.
- Utilize functional and class React components appropriately.
- Use Axios to consume data from an third party API, and render that data in your components. (Remember, many lists of good API's are listed in the #Resources section.)
- Use **only** React for DOM Manipulation.

### Styling <!-- omit in toc -->

- Be styled with CSS, either using global style sheets or styled components.
- Use flexbox (`display: flex`) or CSS Grid.
- Implement responsive design on 3 screen sizes (including desktop) using 2 media queries (tablet and mobile).
  
### Linting <!-- omit in toc -->

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase` and `kebab-case` conventions.
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes and comments are okay).

### Deployment <!-- omit in toc -->

- Deployed via Surge or Netlify.

### Procedural <!-- omit in toc -->

- Commit early and often! Have GitHub commits (documenting substantial progress) **every day**.

### Dealer's Choice <!-- omit in toc -->

- Utilize Storybook to create at least 5 reusable components, which are then used in your project; OR



-
<br>

#### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Spring   | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website                  | Sample Query                                                 |
| :--------: | :-----------: | :------------            | :--------------------------------------                      |
|Unsplash API|      yes      | https://api.unsplash.com | https://api.unsplash.com/photos/?page=1&per_page=9&client_id=|

```
JSON data sample from your API goes here.
```

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Hero.jsx
      |__ Ipsum.jsx
      |__ Lorem.jsx
      |__ CTA.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

#### Helper Functions

> Use this section to document all helper functions, i.e. generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- _Add user account and auth capabilities._
- _Utilize the Giphy API to welcome new users with funny gifs._

<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
code snippet here
```

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
