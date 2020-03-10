import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard : Chessboard;

export class TestKingMoves {

    @Setup
    beforeEach() {
        // TODO:
        // Initialize an empty chessboard
        // Place a black King on E4
    }

    @Test("A King can move 1 square in all directions")
    testCanMoveOneSquare() {
        // TODO:
        // Check it can move to squares D3, D4, D5, E3, E5, F3, F4, and F5
    }

    @Test("A King cannot move more than 1 square")
    testCannotMoveMoreThanOneSquare() {
        // TODO:
        // Check it cannot move to squares C2, C3, C4, C6, D4, and F4
 
    }

    @Test("A King cannot capure pieces from the same color")
    testCannotCaptureSameColor() {
        // TODO:
        // Place a black Pawn on E5
        // Check the King cannot move to E5.
    }

    @Test("A King can capure pieces from a different color")
    testCanCaptureSameColor() {
        // TODO:
        // Place a white Pawn on E5
        // Check the King can move to E5.
    }
}