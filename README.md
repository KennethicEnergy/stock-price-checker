# Stock Price Checker

A simple React application that allows users to check the current stock price by entering a stock symbol. The app validates the symbol before fetching the price and provides feedback to the user, such as error messages or a loading state.

## Features

- **Symbol Validation**: Validates the stock symbol before making any API calls.
- **Fetch Stock Price**: Retrieves the current price of the stock symbol entered by the user.
- **Error Handling**: Displays appropriate error messages if the symbol is invalid or if there are issues fetching the data.
- **Loading State**: Shows a loading message while fetching data from the API.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: Provides type safety and better development experience.
- **Axios**: For making HTTP requests to the stock price API.
- **Finnhub API**: Used to validate stock symbols and fetch the current stock price.
- **CSS**: For styling the application.

## Getting Started

### Prerequisites

Ensure that you have the following installed:

- **Node.js** (v12 or above)
- **npm** (v6 or above)

### Installation

1. Clone the repository:

   ```bash
   git@github.com:KennethicEnergy/stock-price-checker.git
   cd stock-price-checker```

2. Install the dependencies:
  ```bash
  npm install```

3. Create a .env file in the root directory and add your Finnhub API key

4. Running the Application
  ```bash
  npm start```

# Usage
  1. Enter a valid stock symbol (e.g., AAPL, TSLA) in the input field.
  2. Click the "Get Price" button.
  3. The app will validate the symbol and then fetch and display the current stock price.

# Project Structure
  - **src/**: Contains all the source code.
    - **App.tsx**: The main component of the application.
    - **api.ts**: Contains the functions for validating symbols and fetching stock prices.
    - **types.ts**: TypeScript interfaces and types used in the application.
    - **index.css**: Styling for the application.

# API Integration
  This application uses the Finnhub API to:
    - Validate Stock Symbols: The app checks if the symbol entered by the user is valid.
    - Fetch Stock Prices: The app retrieves the current stock price for the valid symbol.

# Error Handling
  - If the user does not enter a symbol, an error message "Please enter a stock symbol" is displayed.
  - If the entered symbol is invalid, an error message "Invalid stock symbol" is shown.
  - If there are any other issues (e.g., network errors), a generic error message "An error occurred" is displayed.

# Styling
  - The app uses basic CSS for styling.
  - Errors are highlighted by applying a red border around the input field.
  - The **Loading...** message is shown while the app is fetching data from the API.

# Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

# License
This project is licensed under the MIT License. 

