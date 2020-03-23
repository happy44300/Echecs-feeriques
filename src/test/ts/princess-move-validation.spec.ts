import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard : Chessboard;

export class TestPrincessMoves {
    @Setup
    beforeEach() {
        // TODO:
        // Initialize an empty chessboard
        // Place a black Princess on E4
    }

    @Test("A Princess can move diagonally")
    testCanMoveDiagonally() {
        // TODO:
        // Check the following moves are possible: 
        // moveE4_A8, moveE4_B1, moveE4_H7, moveE4_H1        
    }

    @Test("A Princess can move two squares horizontally and one square vertically")
    testCanMoveTwoHorizontalAndOneVertical() {
        // TODO
    }

    @Test("A Princess can move two squares vertically  and one square horizontally")
    testCanMoveTwoVerticalAndOneHorizontal() {
        // TODO
    }

    @Test("A Princess cannot move horizontally")
    testCannotMoveHorizontally() {
        // TODO:
        // Check the following moves are impossible: moveE4_H4, moveE4_A4        
    }

    @Test("A Princess cannot move vertically")
    testCannotMoveVertically() {
        // TODO:
        // Check the following moves are impossible: moveE4_E1, moveE4_E8        
    }

    @Test("A Princess can capture a piece from another color")
    testCanCaptureDifferentColor() {
        // TODO:
        // Place a white Pawn on A8
        // Check the move moveE4_A8 is possible        
    }

    @Test("A Princess cannot capture a piece from the same color")
    testCannotCaptureSameColor() {
        // TODO:
        // Place a black Pawn on A8
        // Check the move moveE4_A8 is impossible        
    }

    @Test("A Princess cannot leap other pieces")
    testCannotLeapDiagonally() {
        // TODO:
        // Place a white Pawn on C6
        // Check the move moveE4_A8 is impossible       
    }

    @Test("A Princess can leap other pieces when moving in L ")
    testCanLeapOtherPiecesWhenMovingInL() {
        // TODO:
    }
}
