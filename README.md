# RepoFavs

How to use?

In your terminal run "npm run dev"

You should see two tabs - Repo List and favorites.

Click repo list to see repo's. Select a repo to favorite. Select Favorites tab and you should see your repo stored there. If it not there, please go back to the repo list and select favorite again. After refreshing the favorite values can not be seen by clicking favorites, you have to select RepoList first and then select favorites. This is because the data needs to be re-fetched.

**How it was made?**

Made with nextjs and tailwind Hooks to get the data

**Methods** 
.sort  
.map

unit testing -- jest react npm jest fetch rendering text in index and components

**problems** 
closure issue with the button toggle 
favorites not seen unless data is re-fetched 
unit testing useEffect 
JSON pretty-print isn't as effective to display the data more clearly

**future improvements **
store data in a backend like firebase 
toggle button class so one button calls two functions 
add button "unfavorite" to the favorites page 
add redux to manage some state 
cleaner ui
