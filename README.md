# NextJS Dynamic Context Load

This is a concept of having multiple context shared between pages in NextJS without losing the state when navigating across the pages. The context are loaded into the application if the page needs it. Other contexts already loaded are keeped in the array.

A usefull scenario for this is for example:

- The application has two screens, one for the user information and other for his photos
- If the user navigates between the pages, data should not be lost
- When entering the page, only the information necessary for it must be loaded
