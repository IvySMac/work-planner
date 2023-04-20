# Work Planner

## Description
To get a better grasp of Day.js, JQuery, and the event listener function, I'll be adding some functionality to a work planner. This is a good exercise to better understand how third-party APIs can really help organize and beef-up every-day Javascript. 


## Usage

![A big header reads 'Work Day Scheduler' and the subtitles under it reads 'A simple calendar app for scheduling your work day'. Right under that, there are 7 rows labeled by the hour and are colored either gray, red, green and have a save button displayed next to them](work-planner-screenshot.jpg)

A planner can be key in keeping your busy work schedule organized and on track! This planner will allow you to add events at each hour and store them so that you can revisit them later. A color coded feature also further organizes these events by displaying past in gray, present in red, and future in green. These colors will change depending on your current time-zone for better accuracy!  

<a href="https://ivysmac.github.io/work-planner/">Live Site</a>

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Credits

starter code provided by KU Bootcamp. This is used strictly for educational purposes only 