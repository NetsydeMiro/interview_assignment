# Instructions

You are a new hire for Netsyde Systems, a web development company currently in the process of launching a new web app for managing personal media collections: CollectionDB.  

Among your first tasks as a new developer is to scan the codebase and get a feel for the project structure and technologies used.  See [README.md](./README.md) for more information about some of the incorporated technologies and how to get a development version of the application running. 

Once you get the application up and running, you decide to jump in and tackle some of the stories in Netsyde's story tracker.  There is no expectations that you will be an expert on your first day at Netsyde: feel free to take on as many or as few items as you like.  You can mix and match between story sizes as you wish, or can stay within one category if preferred.  

Implementation difficulty goes up approximately with story size.  

## Small

- Add some content to the home page. 
  - The home page is quite barren at present.  
  - Add a brief paragraph of text content to describe the application and an image to make it look a bit less empty. 

- Format dates. 
  - The published dates rendered in the collection table and on the collection item page are quite busy.  
  - Format them into something more friendly. 

- Add TV Show category
  - Currently users can only organize their Books, Movies, and Video Games. 
  - Add a 'TV Show' category to the application. 

- Add icons to buttons
  - Currently the buttons used through the application are somewhat bland. 
  - Add icons to make them more compact. 
  - Optionally replace their text content with tooltip text that appears when hovering over the button. 

- Add an edit button to the collection table. 
  - Currently a user must first view a specific item before clicking it's edit button. 
  - It would be well if users could go straight to an item's edit page via an edit button beside it's view button in the table. 

## Intermediate

- Style the CollectionItem view page
  - The layout of the CollectionItem view page is just a skeleton at present. 
  - Fix the layout to be more intuitive and pleasant. 
  - Hint: Feel free to leverage the bundled [Bulma] [Sass] framework. 

- Add modifiedAt property to DbRows
  - Currently we only track when a record was initially created (via createdAt). 
  - Add a modifiedAt date property that is updated everytime the record is altered. 

- Fix mobile nav menu
  - On mobile devices the collection names don't appear in the nav menu, and the hamburger flyout menu is not working. 
  - Fix the nav so that it works on mobile devices. 
  - Hint: mobile browsers can be emulated on the desktop by using the browser's developer tools. 

- Add loading indicators
  - Currently there is a lag during initial data loads and upon save operations. 
  - Add a loading spinner of some sort to indicate that a load is in progress.
  - Disable the save button so that saves can't initiated again while a load is in progress. 

- Add a 404 page. 
  - Currently users can navigate to any url and are presented with a blank page. 
  - Add 404 Not Found functionality so that users get a friendly message notifying them if they try to go to any nonsupported url (eg. localhost:3000/nonexistant/url) 
  - Hint: you may want to leverage the bundled [React Router] library. 


## Large

- Add the ability to *Delete* collection items
  - Currently users can only create and edit items.
  - Add a delete button on the item view page (and/or the table listing) to allow users to delete existing collection items. 

- Add the ability to *Create* collections 
  - Currently the category list is essentially hard-coded and fixed to Books, Movies, and Video Games. 
  - Add the ability for users to add their own categories for things like TV Shows, Music, etc. 

- Add table sorting
  - Currently collection items are rendered in natural database order. 
  - Add the ability to click on table headings to sort according to name and published date. 


## Epic

- Add the ability to *Edit* collections
  - Currently the category list is essentially hard-coded and fixed to Books, Movies, and Video Games. 
  - Add the ability for users to add/edit/delete their own categories for things like TV Shows, Records, CDs, etc. 


[Node.js]: https://nodejs.org/en/
[TypeScript]: https://www.typescriptlang.org/
[Create React App]: https://create-react-app.dev/
[React]: https://reactjs.org/
[React Router]: https://reactrouter.com/
[Jest]: https://jestjs.io/
[Toast UI Calendar]: https://ui.toast.com/tui-calendar/
[React Datepicker]: https://reactdatepicker.com/
[Bulma]: https://bulma.io/
[Sass]: https://sass-lang.com/
[React Datepicker]: https://reactdatepicker.com/