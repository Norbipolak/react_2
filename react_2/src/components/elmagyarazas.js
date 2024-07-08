/*
Mik lehetnek egy option tag-nek 

<select name="fruits">
  <option value="apple">Apple</option>
  <option value="banana" selected>Banana</option>
  <option value="cherry" disabled>Cherry</option>
</select>

1. value
2. selected -> akkor ez lesz a pre-selected
3. disabled -> akkor ez az option disabled lesz 
4. label -> itt meg meg lehet adni, hogy miről van szó 

és amikor ezt beküldjük, akkor mindig a selected tag lesz amit beküldünk, tehát a banana az alapból selected, akkor az lesz ha nincsen semmi 
változás

<form action="/submit-form" method="post">
  <label for="fruit-select">Choose a fruit:</label>
  <select id="fruit-select" name="fruits">
    <option value="apple">Apple</option>
    <option value="banana" selected>Banana</option>
    <option value="cherry" disabled>Cherry</option>
  </select>
  <input type="submit" value="Submit">
</form>
**********************************************************************************************************************************************
*/

/*
Form Methods

GET

Description: Appends form data to the URL in name/value pairs.
Use Case: Suitable for forms where the data does not need to be secured and can be bookmarked, such as search forms.

<form action="/search" method="get">
  <input type="text" name="query">
  <input type="submit" value="Search">
</form>

POST

Description: Sends form data in the body of the HTTP request.
Use Case: Suitable for forms that handle sensitive information or large amounts of data, such as login forms or data submission forms.

<form action="/submit-form" method="post">
  <input type="text" name="username">
  <input type="password" name="password">
  <input type="submit" value="Login">
</form>

Form Attributes

1. action

Description: Specifies the URL where the form data should be sent.

<form action="/submit-form" method="post">
  <!-- Form elements -->
</form>

2. method

Description: Specifies the HTTP method to use when sending form data (get or post).

<form method="post">
  <!-- Form elements -->
</form>

3. enctype

Description: Specifies how the form data should be encoded when submitted. Common values include application/x-www-form-urlencoded, multipart/form-data, and text/plain.
Use Case: Use multipart/form-data when the form includes file uploads.

<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="fileUpload">
  <input type="submit" value="Upload">
</form>

4. target

Description: Specifies where to display the response after submitting the form. Common values include _self, _blank, _parent, and _top.

<form action="/submit-form" method="post" target="_blank">
  <!-- Form elements -->
</form>

5. autocomplete

Description: Specifies whether the form should have autocomplete on or off.

<form action="/submit-form" method="post" autocomplete="on">
  <!-- Form elements -->
</form>

Example Form with Multiple Attributes
Here’s a comprehensive example that includes several of these attributes:

<form action="/submit-form" method="post" enctype="multipart/form-data" target="_blank" autocomplete="off">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  
  <label for="fileUpload">Upload a file:</label>
  <input type="file" id="fileUpload" name="fileUpload">
  
  <input type="submit" value="Submit">
</form>
In this example:

The form data will be sent to /submit-form using the POST method.
The data will be encoded as multipart/form-data (suitable for file uploads).
The form response will open in a new browser tab or window (target="_blank").
Autocomplete is turned off (autocomplete="off").
*/

<form action="/submit-form" method="post" enctype="multipart/form-data" target="_blank" autocomplete="off">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  
  <label for="fileUpload">Upload a file:</label>
  <input type="file" id="fileUpload" name="fileUpload">
  
  <input type="submit" value="Submit">
</form>
