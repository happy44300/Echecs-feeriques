import { Expect, Test, Setup} from "alsatian";
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard : Chessboard;

export class TestKnightMoves {
    @Setup
    beforeEach() {
        // TODO:
        // Initialize an empty chessboard
    }

    @Test("A Knight can move two squares horizontally and one square vertically")
    testCanMoveTwoHorizontalAndOneVertical() {
        // TODO:
    }

    @Test("A Knight can move two squares vertically and one square horizontally")
    testCanMoveTwoVerticalAndOneHorizontal() {
        // TODO:
    }

    @Test("A Knight can leap other pieces")
    testCanLeapOtherPieces() {
        // TODO:
    }

    @Test("A Knight cannot move diagonally")
    testCannotMoveDiagonally() {
        // TODO:
    }

    @Test("A Knight cannot move horizontally")
    testCannotMoveHorizontally() {
        // TODO:
    }

    @Test("A Knight cannot move vertically")
    testCannotMoveVertically() {
        // TODO:
    }

    @Test("A Knight can capture a piece from another color")
    testCanCaptureAnotherColor() {
        // TODO:
    }

    @Test("A Knight cannot capture a piece from the same color")
    testCannotCaptureSameColor() {
        // TODO:
    }
}
