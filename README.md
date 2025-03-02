# Chessboard Implementation

This project is a TypeScript-based chessboard implementation that provides functionality to play a chess game. The code models chess pieces, their movement, and game rules such as check/checkmate detection, castling, and en passant.

## Features

- **Chessboard Initialization**

  - Automatically sets up the standard starting position.
  - Supports an 8x8 grid with correct piece placements.

- **Piece Movements**

  - Implements logic for all chess pieces: Pawns, Rooks, Knights, Bishops, Queens, and Kings.
  - Validates moves according to chess rules.

- **Game State Management**

  - Tracks the player's color (White or Black).
  - Detects check situations.
  - Calculates safe squares for pieces.
  - Enforces the fifty-move rule.

- **Special Moves**

  - Castling (both kingside and queenside).
  - En passant capture.
  - Pawn promotion 

## Installation

To use or contribute to this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chessboard-ts.git
   cd chessboard-ts
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project:
   ```bash
   npm start
   ```

## Usage

The `ChessBoard` class provides several public methods and getters to interact with the game state. Some key functionalities include:

```typescript
const board = new ChessBoard();
console.log(board.chessBoardView); // View the current board state

if (board.isInCheck(Color.White, true)) {
    console.log("White is in check!");
}

console.log(board.safeSquares); // Get safe squares for the player
```

## Key Classes

- **ChessBoard**: Handles the entire board state, move validation, and game logic.
- **Piece** (abstract): Base class for all chess pieces.
  - `Pawn`
  - `Rook`
  - `Knight`
  - `Bishop`
  - `Queen`
  - `King`

# Chessboard Models

## Coords
Represents a coordinate on the chessboard with x and y values.
Implemented as an object with two properties to easily reference and manipulate positions.

## CheckState
Tracks whether a player is in check and optionally stores the position of the king in check.
Implemented as an object with properties to track check status and coordinates if needed.

## LastMove
Stores details of the last move made, including piece type, previous position, and current position.
Implemented as an object to allow easy access to move-related data for game rules like en passant.

## Future Improvements

- Add support for move history and undo functionality.
- Implement Stockfish API



