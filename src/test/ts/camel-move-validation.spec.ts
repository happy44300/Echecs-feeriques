import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard : Chessboard;

export class TestCamelMoves {
    @Setup
    beforeEach() {
        // TODO:
        // Initialize an empty chessboard
    }

    @Test("A Camel can move three squares horizontally and one square vertically")
    testCanMoveThreeHorizontalAndOneVertical() {
        // TODO:
    }

    @Test("A Camel can move three squares vertically and one square horizontally")
    testCanMoveThreeVerticalAndOneHorizontal() {
        // TODO:
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
