# ImagePreview Class

The `ImagePreview` class provides functionality to preview images dynamically when a file input is changed. It updates an image element with a new image selected by the user, and restores the original image if no file is selected.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Include jQuery in your project if it's not already included.
   
   ```html
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   ```
2. Include the JavaScript file containing the `ImagePreview` class in your project.
   ```html
   <script src="path/to/your/preview-image.js"></script>
   ```
## Usage
1. Create a file input element and an image element where the preview will be displayed.
   ```html
   <input type="file" data-preview-target="image-preview" />
   <img data-preview="image-preview" src="path/to/default/image.jpg" />
   ```
2. Instantiate the ImagePreview class 
   ```html
   import { ImagePreview } from "./preview-image"
   const previewImage  =  new ImagePreview($('#some_input'))
   ```
