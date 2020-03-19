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

    @Test("An Empress can move horizontally")
    testCanMoveHorizontally() {
        // TODO:
        // Check the following moves are possible: moveE4_H4, moveE4_A4 
    }

    @Test("A Empress can move vertically")
    testCanMoveVertically() {
        // TODO:
        // Check the following moves are possible: moveE4_E1, moveE4_E8        
    }

    @Test("An Empress can move three squares horizontally and one square vertically")
    testCanMoveTwoHorizontalAndOneVertical() {
        // TODO
        // Check the following moves are possible: 
        // moveE4_G3
        // moveE4_G5
        // moveE4_C3
        // moveE4_C5
    }

    @Test("An Empress can move three squares vertically  and one square horizontally")
    testCanMoveTwoVerticalAndOneHorizontal() {
        // TODO
        // moveE4_F2
        // moveE4_F6
        // moveE4_D2
        // moveE4_D6  
    }


    @Test("A Empress cannot move diagonally")
    testCannotMoveDiagonally() {
        // TODO:
        // Check the following moves are impossible: 
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

    @Test("A Empress cannot leap other pieces, when moving horizontally")
    testCannotLeapHorizontally() {
        // TODO:
        // Place a black Pawn on F4
        // Check the move moveE4_H4 is impossible        
    }

    @Test("A Empress cannot leap other pieces, when moving horizontally")
    testCannotLeapvertically() {
        // TODO:
        // Place a black Pawn on E3
        // Check the move moveE4_E1 is impossible        
    }
}
