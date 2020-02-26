# Implemented

- As an event goer, I want to be able to save the name and URL for calendars I am interested in, so I can recall the calendars I have found on the web.
- As an event goer, I want to be able to see the calendars I have entered, so I can recall what I saved previously.
- As an event goer, I want to be able to delete a calendar, so that calendars I am no longer interested in will not be recalled.
- As an event goer, I want to be able to edit a calendr name or link, so that I can correct that information.
- As an event goer, I want to only see my own calendars and no one to be able to see my calendars, so that this information is kept private.
- As an event goer, I want to be able to create an account,so that I can use the system.
- As an event goer, I want to be able to change my password, to keep my information secure.
Nice to have
- As an event goer, I want to be able to click on a link in the calendar and go to that calendar.

# Backlog
## Technical
- As a product owner, I want **more tests** so quality will be better and development will be faster.
  - Have tests only delete the user or users they create.  Each test suite should create a different user.
  - Complete feature tests for calendars
- As a product owner and a developer, I would like to be able to **manage stories through a tool (candidate: Trello)**, so they are easier to prioritize, schedule, and maintain
- As a developer, I want to have **robust debug capabiilty**, so that I can quickly identify solutions to issues.
  - abiity to hide debug output based on env variable
  - create categories of messages
  - create ability to have a method trace, where it writes out the name of each method
  - hide password in debug
  - add color to debug so easier to spot
  - add `**** DEBUG ****` so easier to spot
- As a developer, I want to **minimize deprecation warnings**, so that the app will continue to work in the future
  - Change success to successful

## Behavior

## Minor Features
- As an **administrator**, I want to **see everyone's info** so I can troubleshoot issues
- As a user, I would like to be able to reset my password if I forget it, so that I can log in if I forget password
- As a user, I would like **fields to be required**, so that I don't accidentally fill up with junk

## Major Feature - retrieving events
- As an event goer, I  want to be able to search EventBrite and Meetup on criteria I specify, so that it is easier for me to find events I am interested in.|
- As an event goer, I want to be able to save these events, so that I can save time by not having to redo the search.
- As an event goer, I want to be able to find new events that match the specified criteria, so that I can save time by avoiding looking at events I have already reviewed.
-  As an event goer, I want to be able to store level of interest (going, not going, don’t know), have I registered, and notes, so that I can remember what I think about the event and what I have done.

## Major feature - export events and Google Calendar capability
- As a user (and producer) of other calendars, I want to be able to export these events to an ics, so that I can import them into a calendar.
- As a google calendar user, I want to be able to import these events if I have not already imported them, so that these events are synched with my calendar.
- As an event goer, I want to know if events I have registered for are on my Google calendar
- As an event goer, I want to know if events I have registered for are in this app.

## Major feature - sharing

- As a social person, I want other people see the events I am interested in, to help them find events and encourage them to go to same events as me.
- As a social person, I want to see what events other people are interested in and who is going to specific events, to help me decide whether to go to an event and find other events that interest me.
