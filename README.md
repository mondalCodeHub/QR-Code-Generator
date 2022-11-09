## Introduction

A machine-readable code consisting of an array of black and white squares, typically used for storing URLs or other information for reading by the camera on a smartphone.


## About this project
This is a fully functional responsive QR Code generator web app. I used HTML (for basic structuring), Tailwind CSS (css framework), and Pure Javascript to create this application.
## Run this project
To run this web app on your device, you must have node modules installed on your desktop or PC. The commands required to get started are listed below.

```
npm init -y
npm install -D tailwindcss postcss autoprefixer vite 
npx tailwindcss init -p
```

edit the ``input.css``
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
configure ``tailwind.config`` with ``content["*"]``

Here i've used vite. You can edit your package.json ``"start" : "vite"``

after everything is in place. You can now launch this app in your terminal type: ``npm run start``
## Technology used 
- HTML 
- tailwindcss 
- JavaScript
- qrcode cdn library ``(https://cdnjs.com/libraries/qrcodejs)``
## Features

- QR code will be created immediately.
- Responsive design ( user can use this in mobile device also).
- By clicking the "save image" button, the user can save an image.




## Screenshots
(01) [ responsive design using tailwindcss ]
![Screenshot (2146)](https://user-images.githubusercontent.com/88100576/200742133-ef2ab1cd-ccd0-4c42-90da-4fbb3dc0ccc4.png)
(02) [ Desktop or Laptop ]
![Screenshot (2147)](https://user-images.githubusercontent.com/88100576/200742293-5ee12053-4d61-4fe7-a61b-688901ba0c7e.png)

## Created by
Arup Mondal [@mondalCodeHub](https://www.github.com/mondalCodeHub)
