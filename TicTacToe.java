import java.util.Scanner;

public class TicTacToe {

    static char[][] board = {
        {'1', '2', '3'},
        {'4', '5', '6'},
        {'7', '8', '9'}
    };

    static char currentPlayer = 'X';

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean gameEnded = false;

        printBoard();

        while (!gameEnded) {
            System.out.println("Player " + currentPlayer + ", enter a number (1-9): ");
            int move = sc.nextInt();

            if (makeMove(move)) {
                printBoard();

                if (checkWinner()) {
                    System.out.println("Player " + currentPlayer + " wins!");
                    gameEnded = true;
                } else if (isDraw()) {
                    System.out.println("It's a draw!");
                    gameEnded = true;
                } else {
                    // Switch player
                    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
                }
            } else {
                System.out.println("Invalid move. Try again.");
            }
        }

        sc.close();
    }

    // Print the current state of the board
    public static void printBoard() {
        System.out.println();
        for (int i = 0; i < 3; i++) {
            System.out.println(" " + board[i][0] + " | " + board[i][1] + " | " + board[i][2]);
            if (i < 2) System.out.println("---+---+---");
        }
        System.out.println();
    }

    // Make a move on the board
    public static boolean makeMove(int move) {
        if (move < 1 || move > 9) return false;

        int row = (move - 1) / 3;
        int col = (move - 1) % 3;

        if (board[row][col] == 'X' || board[row][col] == 'O') return false;

        board[row][col] = currentPlayer;
        return true;
    }

    // Check for a winner
    public static boolean checkWinner() {
        // Check rows and columns
        for (int i = 0; i < 3; i++) {
            if (
                (board[i][0] == currentPlayer && board[i][1] == currentPlayer && board[i][2] == currentPlayer) ||
                (board[0][i] == currentPlayer && board[1][i] == currentPlayer && board[2][i] == currentPlayer)
            ) {
                return true;
            }
        }

        // Check diagonals
        if (
            (board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2] == currentPlayer) ||
            (board[0][2] == currentPlayer && board[1][1] == currentPlayer && board[2][0] == currentPlayer)
        ) {
            return true;
        }

        return false;
    }

    // Check if the board is full (draw)
    public static boolean isDraw() {
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                if (board[i][j] != 'X' && board[i][j] != 'O')
                    return false;

        return true;
    }
}
