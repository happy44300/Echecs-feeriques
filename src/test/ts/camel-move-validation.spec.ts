import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard : Chessboard;

export class TestCamelMoves {
    @Setup
    beforeEach() {
        // TODO:
        // Initialize an empty chessboard
        // Place a white Camel on E4
    }

    @Test("A Camel can move three squares horizontally and one square vertically")
    testCanMoveThreeHorizontalAndOneVertical() {
        // TODO:
        // Check the following moves are possible:
        // - moveE4_H3
        // - moveE4_H5
        // - moveE4_B3
        // - moveE4_B5
    }

    @Test("A Camel can move three squares vertically and one square horizontally")
    testCanMoveThreeVerticalAndOneHorizontal() {
        // TODO:
        // Check the following moves are possible:
        // - moveE4_F1
        // - moveE4_F7
        // - moveE4_D1
        // - moveE4_D7
    }

    @Test("A Camel can leap other pieces")
    testCanLeapOtherPieces() {
        // TODO:
    }

    @Test("A Camel cannot move diagonally")
    testCannotMoveDiagonally() {
        // TODO:
    }

    @Test("A Camel cannot move horizontally")
    testCannotMoveHorizontally() {
        // TODO:
    }

    @Test("A Camel cannot move vertically")
    testCannotMoveVertically() {
        // TODO:
    }

    @Test("A Camel can capture a piece from another color")
    testCanCaptureAnotherColor() {
        // TODO:
    }

    @Test("A Camel cannot capture a piece from the same color")
    testCannotCaptureSameColor() {
        // TODO:
    }
}
