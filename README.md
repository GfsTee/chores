This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# This app reminds you on your reacuring To-Do-Things

I created this app for my old tablet.   
It's now mounted to my wall and shows me, how much time has passed since I did the To-Do-Things.   

## Features:
* TimerUp: Counts up every second since reset. (I use it for things that should happen from time to time but doesnt has a "deadline")
* Timer: Counts down every second since reset. (I use it for things that should happen regularly like cleaning the cat toilet or the appartment)

## Use:

to use Timer or TimerUp just create a statless Component and import the component there.   
The size of the circles are set to 300px in the timer.css.

### Timer:
* props: headline and days are required. 
* Headline takes a string (as a headline and for local storage)
* days takes a number (your deadline in days)

### TimerUp:
* props: headline, alert and days
* Headline takes a string (as a headline and for local storage)
* alert takes a boolean. If you want the circle to fill and to flash you need to give it true and a prop day. If you dont want that... give it false.
* days takes a number (your deadline in days)


#### Assets:
* React
* React Hooks
* LocalStorage