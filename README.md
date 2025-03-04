# Meme Website

A simple meme website that dynamically loads images from the `/assets/memes/` directory and allows users to search for memes.

## Features
- **Dynamic Meme Loading**: Automatically fetches and displays all images from the `assets/memes/` folder.
- **Search Functionality**: Users can search for memes by filename.
- **One-Page Design**: Simple and clean UI with a search bar.
- **Responsive Design**: Works on all devices.
- **Lightweight and Fast**: No external dependencies required.

## Installation
### 1. Clone the Repository
```bash
git clone https://github.com/charliemiggins/MemeWebsite.git
cd MemeWebsite
```

### 2. Run a Local Server
Since this project includes a PHP script, you need a local server.

#### Option 1: PHP Built-in Server
```bash
php -S localhost:8000
```
Open `http://localhost:8000/` in your browser.

#### Option 2: XAMPP (Windows)
1. Move the project to `C:\xampp\htdocs\MemeWebsite`
2. Start Apache in **XAMPP Control Panel**
3. Visit `http://localhost/MemeWebsite/`

## File Structure
```
MemeWebsite/
│── assets/
│   ├── memes/          # Store meme images here
│── getMemes.php        # PHP script to fetch meme images
│── index.html          # Main webpage
│── styles.css          # Website styling
│── script.js           # Meme loading & search functionality
│── README.md           # Project documentation
```

## How It Works
1. `getMemes.php` scans the `assets/memes/` directory for images (`.jpg`, `.png`, `.gif`) and returns them as a JSON array.
2. `script.js` fetches this list and dynamically displays memes on the webpage.
3. The search bar filters memes based on their filename.

## Contributing
Feel free to fork this repo and improve it! Pull requests are welcome.

## License
MIT License

