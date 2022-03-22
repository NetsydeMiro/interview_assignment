# Instructions

You are a new hire for Netsyde Systems, a web development company currently in the process of launching a new web app for managing personal media collections: CollectionDB.  

Among your first tasks as a new developer is to scan the codebase and get a feel for the project structure and technologies used.  See [README.md](./README.md) for more information about some of the incorporated technologies and how to get a development version of the application running. 

Once you get the application up and running, you decide to jump in and tackle some of the items in Netsyde's issue tracker.  There is no expectations that you will be an expert on your first day at Netsyde: feel free to take on as many or as few items as you like.  You can mix and match between item sizes as you wish, or can stay within one category if preferred.  

Implementation difficulty goes up approximately with issue size.  

## Small

- Add home page content 
  - The home page is quite barren at present.  
  - Add a brief paragraph of text content to describe the application and an image to make it look a bit less empty. 

- Format dates 
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
  - Currently a user must first view a specific item before clicking its edit button. 
  - It would be well if users could go straight to an item's edit page via an edit button beside its view button in the table. 

- Add unit testing
  - Currently there exist almost no unit tests in the project. 
  - Add one or more [Jest] unit tests to increase the project's code coverage. 
  - Hint: an example unit test (albeit an almost useless one) can be seen here: [Home.test.tsx](./src/pages/Home.test.tsx).

## Medium

- Style the CollectionItem view page
  - The layout of the CollectionItem view page is just a skeleton at present. 
  - Fix the layout to be more intuitive and pleasant. 
  - Hint: Feel free to leverage the bundled [Bulma] [Sass] framework. 

- Add collection items table to home page
  - Currently the home page is blank
  - Add a table to it that lists all collection items (regardless of collection type)

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

- Add a 404 page
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

## DIY

- Fix a bug
  - CollectionDB has barely scraped by alpha testing.  
  - Spot a bug you'd like to take on?  Document and squash it.  

- Add your own enhancement
  - CollectionDB is a very rudimentary application at present. 
  - Have an idea for an improvement, whether functional or aesthetic?  
  - Describe why your change is an improvement and implement.  

## Final Notes

There are many more items in Netsyde's issue tracker (above) than are necessary to complete for a new recruit.  You do not have to (and in fact are discouraged from) completing all, most, or even many of the above.  The wide variety has been outlined simply to give multiple options for developers of different experience levels.  

If you find you can't complete as many stories as you'd like, whether because of limited prior experience with the technologies used, or because of the time you have available, then feel free to jot down in point form which items you would take on if there were more time allotted, and how you might go about designing and/or implementing the solutions.  We can discuss your ideas and proposed solutions as well as any completed work during your code review (interview).  

Welcome aboard!


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