micro-library
=============

Enter books in your collection and receive the Dewey Decimal Number or Library of Congress number associated with that book.

I want this to be as simple as possible. Here's the plan:

* Several text boxes on the left side of the screen, instructions at the top.
* Type book information in the box and we will query the Classify API.
* UI will present a dropdown with possible choices but will auto-populate the first result with following columns:
 1. What you typed
 1. "Tall" Book Dropdown with entries for Title, Author, Year
 1. Dewey Decimal Call Number
 1. Library of Congress Number
* Pressing Enter or Tab will switch to the next box.
* There will always be at least one empty text box.
* Can remove rows of course
* Sort, which will also remove empty rows
* "Create ----- library" which will show the groups and sorting for the given collection
* Library will be saved to local store
* Generate binding label
* Generate barcode (is this possible?)
* Scanning ISBN? This would be pretty badass.
