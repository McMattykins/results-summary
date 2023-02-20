# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

This component seems relatively simple to design so I want ot challenge myself by using React to build it instead of standard HTML and CSS.

I'll begin with a mobile first apporach in my design. The results section looks relatively easy to build so I want start with the summary section and map over the items from the included data. After I have a skeleton of the sections, I begin to stylize them summary section to make sure that it is compatable with the mapped data.

The most difficult part in working with the results section is going to be eyeballing the padding, font sizes and weights. This will be a good challenge for me, but I wish some of the measurements beyond on paragraph size were included in the style guide.

After I've finished the mobile design, I'll work on making the desktop design for the page. It looks like I'll just need to move the direction of the flexbox container and maybe make some small adjustments to the padding and margins.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

#### The magic of React and SVGs
When I first received the data for this project, it was stored as JSON file and the `icon` key was a reference to the SVG icons location. Because I would need to iterate over this list to get the other data inside, I researched different ways to get all of this data. 

When I put the location into an `<img>` tag, the tag would return a broken link, so I couldn't use it. When I attempted to use the `<ReactSVG />` component, nothing displayed at all. The only method that produced a visable result was declaring each individual path as a `ReactComponent` but then I would have to declare each icon in each summary component which stop me from keeping my code DRY. 

At this point, I decided to stick with what I know would work and adapt the tools I was given. I converted the data into a JavaScript file and declared the `ReactComponents` inside of that same file. Then inside of the `icon` key refering to the icon's location, I changed it to reference the `ReactComponent`. 

```
import { ReactComponent as Reaction } from "./assets/images/icon-reaction.svg"

...

export default [
  {
    category: "Reaction",
    score: 80,
    Icon: Reaction
  },
```

I'm sure there may be other solutions to this issue, but at the time that I was dealing with this issue, my computer had no access to the internet. I will look into other solutions that preserve the data as a JSON in the future.

#### Vertical Alignment

No matter how many times I look it up, there always seems to be a different suggested or best way to center elements both horizontally and vertically. In this particular case, the method I usually used caused some major display issues during resizing and at several sizes from 500px up to 900px.

Thankfully, I was able to find salvation in CSS Grid's `place-items`. This allowed me to place the items both horizontally and verticalled centered without any issues.

### Continued development

I'm not used to working with a mobile first approach in development, so it was a new and interesting styling this component. I think that my code might be a bit overcluttered at this point, but I'm hoping that I'll find more efficient ways to stylize my components in the future.

### Useful resources

- [Best 3 Ways to Center a Div with CSS](https://medium.com/nerd-for-tech/best-3-ways-to-center-a-div-with-css-1668b66c9891) - This helped me for explore other options to center my component. Though it is very straight forward and doesn't provide a lot of explaination in why one method may be more helpful than another, it still is good as a resource. 

## Author

- GitHub - [Matthew Askett](https://www.github.com/mcmattykins)
- Frontend Mentor - [@McMattykins](https://www.frontendmentor.io/profile/mcmattykins)
- Twitter - [@mcmattykins](https://www.twitter.com/mcmattykins)
