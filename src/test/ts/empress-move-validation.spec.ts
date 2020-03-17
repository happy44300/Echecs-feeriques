import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard : Chessboard;

export class TestEmpressMoves {
    @Setup
    beforeEach() {
        // TODO:
        // Initialize an empty chessboard
        // Place a white Empress on E4
    }

    @Test("A Empress can move horizontally")
    testCanMoveHorizontally() {
        // TODO:
        // Check the following moves are possible: moveE4_H4, moveE4_A4 
    }

    @Test("A Empress can move vertically")
    testCanMoveVertically() {
        // TODO:
        // Check the following moves are possible: moveE4_E1, moveE4_E8        
    }

    @Test("A Empress can move diagonally")
    testCanMoveDiagonally() {
        // TODO:
        // Check the following moves are possible: 
        // moveE4_A8, moveE4_B1, moveE4_H7, moveE4_H1
    }

    @Test("A Empress can capture a piece from different color")
    testCanCaptureDifferentColor() {
        // TODO:
        // Place a black Pawn on H4
        // Check the move moveE4_H4 is possible        
    }

    @Test("A Empress cannot capture a piece from the same color")
    testCannotCaptureSameColor() {
        // TODO:
        // Place a white Pawn on H4
        // Check the move moveE4_H4 is impossible        
    }

    @Test("A Empress cannot leap other pieces")
    testCannotLeap() {
        // TODO:
        // Place a black Pawn on F4
        // Check the move moveE4_H4 is impossible        
    }
}