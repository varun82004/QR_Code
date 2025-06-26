## 📷 QR Code Generator

A simple Node.js application to generate QR codes from user-provided URLs. This utility uses the following packages:

- [`inquirer`](https://www.npmjs.com/package/inquirer) for interactive command-line user input
- [`qr-image`](https://www.npmjs.com/package/qr-image) to generate QR code images
- Native Node.js `fs` module to save the QR code and URL data to disk

---

## 🚀 Features

- Converts any user-entered URL into a QR code.
- Saves the generated QR code as a PNG image.
- Stores the original URL in a `.txt` file for record-keeping.

---

## 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (Node Package Manager)

---

## 🛠️ Installation

1. **Clone the repository:**

   ```bash
   
   git clone https://github.com/your-username/QR_Code_Generator.git

   cd QR_Code_Generator

2. **Install the dependencies**

   ```npm install inquirer qr-image```

## 📄 Usage

1. **Run the script:**

   ```node index.js```

2. **You will be prompted to enter a URL.**
3. **The script will:
     -> Generate a qr_code.png image in the same directory.
     -> Save the URL you entered to URL.txt.**

## 📁 File Structure
QR_Code_Generator/
│
├── index.js         # Main script
├── URL.txt          # Stores the entered URL (generated on run)
├── qr_code.png      # Generated QR code image (generated on run)
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation

## 🧪 Example
? Type the URL you want to convert to a QR code: https://www.google.com
Generating QR code for: https://www.google.com
URL saved to URL.txt

## 🙋‍♂️ Author
Created by Varun Adhithya S
