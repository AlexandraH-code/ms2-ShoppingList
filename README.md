# My Shopping List

Developer - Alexandra Holstensson

[Link to the project](https://alexandrah-code.github.io/ms2-ShoppingList/)

![Image Of The Site](assets/images/am_I_responsive/am_I_responsive.jpg)

## Table of Contents
- [About](#about)
- [User Goals](#user-goals)
  - [External User Goals](#external-user-goals)
  - [Site Owner Goals](#site-owner-goals)
- [User Stories](#user-stories)
- [Design Of The Website](#design-of-the-website)
  - [Structure](#structure)
  - [Wireframes](#wireframes)
  - [Colors](#colors)
  - [Fonts](#fonts)
  - [Icon And Image](#icon-and-image)
- [Existing Features](#existering-features)
  - [Add Item](#add-items)
  - [Edit Item](#edit-items)
  - [Delete Item](#delete-items)
  - [Save Shopping List To localStorage](#save-shopping-list-to-localstorage)
- [Features Left To Implement](#features-left-to-implement)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Programs And Other Resources](#programs-and-other-resources)
- [Testing](#testing)
  - [User Story Testing](#user-story-testing)
  - [Manual Testing](#manual-testing)
    - [Test - Add Item](#test---add-item)
    - [Test - Edit Item](#test---edit-item)
    - [Test - Check Item](#test---check-item)
    - [Test - Delete Item](#test---delete-item)
    - [Test - Shopping List Saved To Local Storage](#test---shopping-list-saved-to-local-storage)
- [Bugs](#bugs)
- [Validation](#validation)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [Lighthouse Testing](#lighthouse-testing)
  - [Desktop](#desktop)
  - [Mobile](#mobile)
- [Device Testing](#device-testing)
- [Browser Compatibility](#browser-compatibility)
- [Deployment](#deployment)
- [Credits](#credits)

### About 
[Back To The Top](#table-of-contents)

My Shopping List is a website where you can create a shopping list of items that you want to buy. 

My Shopping List has the following functions:
- add items
- edit items
- delete items

It is also possible to check out items that you have already added to your shopping cart/that you have already purchased.

What is added to the shopping list is saved in localStorage. This means that what is added to the shopping list remains there even if you refresh the page or close it.

### User Goals
[Back To The Top](#table-of-contents)

#### External User Goals

- Be able to create a shopping list.
- Be able to edit and delete items in the shopping list.
- Be able to have the shopping list saved even if you refresh or close the page.

#### Site owner Goals

- Provide the ability for users/visitors to create a shopping list where items can be added, removed and edited.

### User Stories
[Back To The Top](#table-of-contents)

- As a visitor to the site, I want it to be usable on all types of screen sizes and devices (e.g. mobile, tablet, computer). This is so that I will not be dependent on a particular type of device.

- As a visitor to the site, I want it to be usable on all types of screen sizes and devices (e.g. mobile, tablet, computer). This is so that I will not be dependent on a particular type of device.

- As a visitor to the site, I want to be able to add items to the shopping list. This is so that I can see a summary of the items I intend to buy.

- As a visitor to the site, I want to be able to check off the items I have added to my shopping cart/picked up. This is so that I can easily see how many items are left (to buy).

- As a user of the site, I want to be able to edit and delete items that I have added to the shopping list. This is so that I cac delete things that I don't need or edit them if I realize that I need to make a change to something I have intended to buy.

- As a user of the site, I want the items I have added to the shopping list to remain even if I refresh the site or close it. This is so that I can easily continue on an existing shopping list if I come across more items that I want to add (or if I want to edit or delete one).

### Design Of The Website
[Back To The Top](#table-of-contents)

#### Structure

I have chosen not to have a main navigation menu on my site. This is because all functions fit on a single page. Therefore, there is no reason to have a navigation menu.

I have also chosen to have the main function for my page centered (horizontally) on the page because I think it looks the best.

#### Wireframes

![Wireframes](assets/images/wireframes/wireframes.jpg)

#### Colors

When I chose which colors to use on my page, I based my choice on the palette below, which is available at [Happy Hues](https://www.happyhues.co/).

[Link to the color palette that I have chosen](https://www.happyhues.co/palettes/12)

![Color Palette](assets/images/colors/colors_6_2.jpg)

The colors that I have chosen to use from the palette are: 
- #232946 - background color My Shopping List feature and buttons in the list, font color Add item button and text in the list
- #eebbc3 - background color Add item button and list items in the list
- #fffffe - headline
- #B8C1EC : button hover Add item button

I then used [ColorMagic's Contrast Checker](https://colormagic.app/contrast-checker) to make sure the colors I chose were okay in terms of contrast.

![Image of Contrast - Headline](assets/images/colors/contrast_headline.jpg)

![Image of Contrast - Buttons items list](assets/images/colors/contrast_buttons_items_list.jpg)

![Image of Contrast - Add button and items](assets/images/colors/contrast_add_button_and_items.jpg)

![Image of Contrast - Add button hover](assets/images/colors/contrast_button_hover.jpg)

In order to create a gradient for the background color of the function itself, I used [ColorSpace](https://mycolor.space/). I have chosen to use #484266 as background color on my site.

[Link to my color gradient](https://mycolor.space/?hex=%23232946&sub=1) (See Matching Gradient)

![Color Gradient](assets/images/colors/matching_gradient.jpg)

#### Fonts

To figure out which fonts to use on my site, I used [Easil's The Ultimate Free Font Pairing Guide](https://about.easil.com/free-font-pairing-guide-templates/). Here I chose the font Cookie because I wanted a font that looked a bit hand-written. In the pairing guide, the font Cookie is paired with the fonts Raleway and Roboto. Here I chose to use the font Roboto. I then downloaded the fonts from [Google Fonts](https://fonts.google.com/).

Links to the fonts:
- [Cookie](https://fonts.google.com/specimen/Cookie)
- [Roboto](https://fonts.google.com/specimen/Roboto)

#### Icon And Image

I have chosen to have a favicon on my site. The favicon was created from an image of a shopping basket that I found on [Open Clipart](https://openclipart.org/). To create the favicon itself, I then used [favicon.io](https://favicon.io/).

[Link to the image of the shopping basket](https://openclipart.org/detail/301004/basket-2)

The image of the shopping basket on the page is an icon that comes from [Font Awsome](https://fontawesome.com/).

[Link to the shopping basket](https://fontawesome.com/v6/icons/basket-shopping?f=classic&s=solid)


### Existering Features
[Back To The Top](#table-of-contents)
#### Add Item

To add an item to the shopping list, you enter the item in the text field and then click the Add item button. The item will then be added to the shopping list itself, which will be located below the form. In addition to the item name, a checkbox and an Edit and a Delete button also appear.

![Image Of Add Item Feature](assets/images/features/add_item/add_item_1.jpg)

![Image Of Add Item Feature](assets/images/features/add_item/add_item_2.jpg)

If you have purchased an item/added an item to your shopping cart, you can check the checkbox next to that item. The item name will then be crossed out.

![Image Of Add Item Feature](assets/images/features/add_item/checked_item.jpg)

If you click the Add item button without having entered anything in the text box, a pop-up box will appear asking you to enter an item.

![Image Of Add Item Feature](assets/images/features/add_item/add_item_empty.jpg)

#### Edit Item

When you click the Edit button, a pop-up box appears. In it, you can make the change you want to make and then click Ok. The shopping list will then be updated with the change you have made.

![Image Of Edit Item Feature](assets/images/features/edit_item/edit_item_1.jpg)

![Image Of Edit Item Feature](assets/images/features/edit_item/edit_item_2.jpg)

![Image Of Edit Item Feature](assets/images/features/edit_item/edit_item_3.jpg)

#### Delete Item

If you want to delete an item, click the Delete button next to that item. The item will then be removed from the shopping list.

![Image Of Delete Item Feature](assets/images/features/delete_item/delete_item_1.jpg)
![Image Of Delete Item Feature](assets/images/features/delete_item/delete_item_2.jpg)

#### Save shopping list to localStorage

I have chosen to save the shopping list to localStorage. This is to be able to update or close the page without having to worry about the shopping list disappearing (see manual testing section to see how this feature works).

### Features Left To Implement
[Back To The Top](#table-of-contents)

To my shopping list, you could also add the ability to print the shopping list (if you prefer to have it in paper form). You could also add a function that makes it possible to sort the shopping list by a specific store (i.e. the shopping list is sorted by how a specific store is planned).

### Technologies Used
[Back To The Top](#table-of-contents)
#### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

#### Programs And Other Resources

- [Responsinator](http://www.responsinator.com/) - Used to check how the site looks on different devices and how responsive it is
- [Am I Responsive](https://ui.dev/amiresponsive) - Used to check how the site looks on different devices and how responsive it is
- [tinypng](https://tinypng.com/) - Used to compress images
- [HTML Validator](https://validator.w3.org/nu/) - Used to validate the HTML files
- [CSS Validator](https://jigsaw.w3.org/css-validator/) - Used to validate the JavaScript code
- [Site24x7's JavaScript validator](https://www.site24x7.com/tools/javascript-validator.html) - Used to validate the JavaScript code
- [JShint](https://jshint.com/) - Used to validate the JavaScript Code
- [Open Clipart](https://openclipart.org/) - The image of the shopping basket can be found here
- [Favicon](https://favicon.io/favicon-converter/) - Used to generate the favicon
- [Fontawsome](https://fontawesome.com/) - For the shopping basket icon
- [Happy Hues](https://www.happyhues.co/) - for the color palette that I have chosen to use  
- [ColorSpace](https://mycolor.space/) - to find a color gradient to the background color on my shopping list function
- [ColorMagic Contrast Checker](https://colormagic.app/contrast-checker) - to check the constrast of the colors that I have chosen
- [Easils font pairing guide](https://about.easil.com/free-font-pairing-guide-templates/) - to find the fonts that I have chosen to use
- [Google Fonts](https://fonts.google.com/) - to download the fonts that I have chosen to use (Cookie and Roboto)
- [W3Schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) - to find breakpoints for different devices

### Testing
[Back To The Top](#table-of-contents)
#### User Story Testing

| Feature | User Story | Expected Result | Pass |
|---------|------------|-----------------|------|
| Entire site | As a visitor of the site, I want it to be usable on all types of screen sizes and devices (e.g. mobile, tablet, computer). This is so that I will not be dependent on a particular type of device. | The site works on different devices (e.g. mobile, tablet, computer) and screen sizes. | &check; |
| Entire site | As a visitor to the website, I want it to be easy to use. This is so that I don't have to spend a lot of time learning how it works. | The site is easy to use and understand. | &check; |
| Add item | As a visitor to the site, I want to be able to add items to the shopping list. This is so that I can see a summary of the items I intend to buy. | The visitor can add items to the shopping list. | &check; |
| Checkbox next to item | As a visitor to the site, I want to be able to check off the items I have added to my shopping cart/picked up. This is so that I can easily see how many items are left. | The visitor can check off items that have been added to the shopping cart/that have already been purchased. | &check; |
| Edit and delete item | As a user of the site, I want to be able to edit and edit items that I have added to the shopping list. This is so that I can remove things that I don't need or change them if I realize that I need to make a change to something I have intended to buy. | The user can edit and delete items that are saved to the shopping list. | &check; |
| Save shopping list | As a user of the site, I want the items I have added to the shopping list to remain even if I update the site or close it. This is so that I can easily continue on an existing shopping list if I come across more items that I want to add (or if I want to edit or delete one). | The shopping list is saved (to localStorage) so it does not disappear if the user update or close the page. | &check; |

#### Manual Testing
##### Test - Add Item

To test that it works to add an item, I enter an item in the text field (where it says "Add items to shopping basket") and click the Add item button. The item then appears in a list that is created below the form. 

![Image Of Add Item Test](assets/images/manual_testing/add/add_item.jpg)

##### Test - Edit Item

To test that it is possible to edit an item, I click on the Edit button. A pop-up box opens where I can make the desired change.

![Image Of Edit Item Test](assets/images/manual_testing/edit/edit_item_1_1.jpg)

To save the change, I click on the Ok button. The item is then updated in the list itself. 

![Image Of Edit Item Test](assets/images/manual_testing/edit/edit_item_2.jpg)

If I change my mind and do not want to make any changes to the item, I click on the button that says Cancel (or Avbryt as it says on the button as the text is in Swedish for me). The item will then (for natural reasons) not change.

#### Test - Check Item

To test that the check item function works as it should, I click in the checkbox next to an item. The item's text then gets a line through it. Which is the idea of ​​the function.

![Image Of Check Item Test](assets/images/manual_testing/check/check_item.jpg)

##### Test - Delete Item

To see how the Delete item function works, I click the Delete button on the item (milk) that I checked in the Check item test. When I click the Delete button, the item milk disappears from the list.

![Image Of Delete Item Test](assets/images/manual_testing/delete/delete_item.jpg)

##### Test - Shopping List Saved To Local Storage

To ensure that the shopping list is saved correctly to localStorage, I choose to check the checkbox next to an item, delete an item and edit an item. I then refresh the page to see that it looks the same as it did before updating the page. I also choose to close the page and reopen it. The page looks the same both if I refresh the page and if I close the page and reopen it. This means that the page is saved correctly to localStorage.

![Image Of Shopping List Saved To Local Storage Test](assets/images/manual_testing/localStorage/localStorage_1.jpg)

![Image Of Shopping List Saved To Local Storage Test](assets/images/manual_testing/localStorage/localStorage_2.jpg)

### Bugs
[Back To The Top](#table-of-contents)

The biggest problem I've encountered when making my site (and which I haven't really solved exactly as I wanted) is the following:

From the beginning, I had planned for the main function of the page to be centered both horizontally and vertically.

The problem that arose then was that if you add so many items to the shopping cart that the list does not fit on one screen height (i.e. you need to scroll), the content at the top of the page will be “pushed” off the screen. 

![Image That Shows The Problem](assets/images/bug/bug_heading.jpg)

To try to solve the problem, I looked into whether scrolling had anything to do with it. However, changing the scroll has no effect on the problem. If you add too many items, what is at the top will disappear over time. This is because for each item added to the list, the function itself is enlarged to the same height as the item added to the list. This means that after a while, content will be pushed outside the "screen".

I haven't found a solution to the problem where I can have the list centered both vertically and horizontally. So the solution for now is to only have the list centered horizontally.

Even though the page doesn't look exactly as I had originally envisioned (with the content centered both horizontally and vertically), I'm happy with how it looks now.

### Validation
[Back To The Top](#table-of-contents)
#### HTML

I used [the W3C Markup Validation Service](https://validator.w3.org/) to validate the HTML. The validation passed without showing any errors.

![Image That Shows The Result Of The Validation Of The HTML](assets/images/validation/HTML.jpg)

[Link To The Validation Of The HTML](https://validator.w3.org/nu/?doc=https%3A%2F%2Falexandrah-code.github.io%2Fms2-ShoppingList%2F)

#### CSS

I used [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to validate the CSS. The validation passed without showing any errors.

![Image That Shows The Result Of The Validation Of The HTML](assets/images/validation/CSS.jpg)

[Link To The Validation Of The CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Falexandrah-code.github.io%2Fms2-ShoppingList%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

#### JavaScript

The  JavaScript code was validated using [JSHint](https://jshint.com/) and [site24x7's](https://www.site24x7.com/tools/javascript-validator.html) validator. No errors were found. But there were some warnings regarding the use of ES6 features. As I understand it, this means that the code is modern and utilizes the latest JavaScript standards.

![Image That Shows The Result Of The Validation Of The JavaScript](assets/images/validation/JavaScript.jpg)

### Lighthouse Testing
[Back To The Top](#table-of-contents)
#### Desktop

![Image Of Lighthouse Test - Desktop](assets/images/lighthouse/lighthouse_desktop.jpg)

#### Mobile

![Image Of Lighthouse Test - Mobile](assets/images/lighthouse/lighthouse_mobile.jpg)

### Device Testing
[Back To The Top](#table-of-contents)

In addition to my laptop (a Dell Vostro 3520), I have tested the site on my mobile phone, a Samsung Galaxy S24 Ultra, and on my tablet, a Samsung Galaxy Tab S8. The site works, and looks, as it should on all devices.

Then I have also tested my site on [Am I Responsive](https://ui.dev/amiresponsive) and [Responsinator](http://www.responsinator.com/) to see how it looks on other devices and if it is responsive.

### Browser Compatibility
[Back To The Top](#table-of-contents)

I have used the browsers below to test my site. The site looks as it should and works as it should in all browsers.

- Google Chrome (my primary browser)
- Microsoft Edge
- Opera
- Firefox

### Deployment
[Back To The Top](#table-of-contents)

This project was deployed to GitHub pages. To deploy the project, follow these steps:

1. In the GitHub repository, navigate to the Settings tab (last option in the top menu bar)
2. Then click on Pages in the vertical menu bar on the left.
3. Under Build and deployment
    - select Deploy from a branch under Source.
    - select and main (root) under Branch.
4. Then click on the Save button.
5. Back in the repository, you may have to wait a while before the deployment is complete.
6. The page can then be found under Deployments in the vertical menu bar on the right.
7. Click on github-pages and there is a link to the page.

Link to the project - https://alexandrah-code.github.io/ms2-ShoppingList/

### Credits
[Back To The Top](#table-of-contents)

- [W3Schools - HTML](https://www.w3schools.com/html/default.asp) - for guidance on CSS-related issues.
- [W3Schools - CSS](https://www.w3schools.com/css/default.asp) - for guidance on CSS-related issues.
- [W3Schools - JavaScript](https://www.w3schools.com/js/default.asp) - for guidance on JavaScript-related issues.