# Smart Menu Creator

A **full-stack web application** that allows a merchant to create menu items using **AI** or voice input, save them in **MongoDB**, and share them instantly via **WhatsApp**. Built with **Ionic + Angular** on the frontend and **Node.js + Express.js** on the backend.

---

## Features

- **AI-Powered Menu Generation:** Generate professional **Title, Description, and Price** from a typed input.  
- **Voice Input (Mic):** Speak the menu item instead of typing.  
- **Image Support:** Upload a photo or optionally generate an AI image for the dish.  
- **MongoDB Integration:** Save and fetch menu items with real-time updates.  
- **Cart & Share:** Add items to cart and share via **WhatsApp**.  
- **Responsive UI:** Built with **Ionic + Angular**, works seamlessly on mobile and desktop.  

---

## Tech Stack

- **Frontend:** Ionic + Angular  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  
- **AI Integration:** HuggingFace Flan-T5 API for menu description generation  
- **Deployment:** Vercel (frontend), Node.js backend can be hosted on Heroku/Render  

---

## Demo

- **Live App:** [https://smart-menu-inky.vercel.app/](https://smart-menu-inky.vercel.app/)  
- **GitHub Repository:** [https://github.com/viji777/smart-menu](https://github.com/viji777/smart-menu)  

---

## Setup Instructions

### Backend

1. Clone the repository:
   ```bash
2. Install dependencies:
npm install

3.Create a .env file and add your MongoDB URI and HuggingFace API Key:
MONGO_URI=your_mongodb_connection_string
HF_API_KEY=your_huggingface_api_key
PORT=3000
   git clone https://github.com/viji777/smart-menu.git
   cd smart-menu/smart-menu-backend
   
4.Start the server:

node index.js

5.Frontend

Navigate to frontend:

cd ../smart-menu-frontend


6.Install dependencies:

npm install


7.Run the app:

ionic serve


Supports voice input using device microphone.

Fully responsive and styled for a modern restaurant look.

Author

Vijayalekshmi
Full Stack Developer
GitHub

nt, say “Draft HR mail” and I’ll write it perfectly for YumBlock 🚀
