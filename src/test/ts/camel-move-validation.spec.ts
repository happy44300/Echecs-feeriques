import { Expect, Test, Setup, Ignore } from "alsatian";
import * as isPossible from '../../main/ts/move-validation'
import * as pieces from '../../main/ts/piece'
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import { Position, position } from '../../main/ts/position';
import { Move, move } from '../../main/ts/movements';

let chessboard: Chessboard;

const positionA4: Position = position(0, 3) // A4
const positionA5: Position = position(0, 4) // A5
const positionA6: Position = position(0, 5) // A6
const positionA7: Position = position(0, 6) // A7
const positionA8: Position = position(0, 7) // A8

const positionB1: Position = position(1, 0) // B1
const positionB2: Position = position(1, 1) // B2
const positionB3: Position = position(1, 2) // B3
const positionB5: Position = position(1, 4) // B5
const positionB6: Position = position(1, 5) // B6

const positionC2: Position = position(2, 1) // C2
const positionC3: Position = position(2, 2) // C3
const positionC4: Position = position(2, 3) // C4
const positionC5: Position = position(2, 4) // C5
const positionC6: Position = position(2, 5) // C6
const positionC7: Position = position(2, 6) // C7

const positionD1: Position = position(3, 0) // D1
const positionD2: Position = position(3, 1) // D2
const positionD3: Position = position(3, 2) // D3
const positionD4: Position = position(3, 3) // D4
const positionD5: Position = position(3, 4) // D5
const positionD6: Position = position(3, 5) // D6
const positionD7: Position = position(3, 6) // D7


const positionE1: Position = position(4, 0) // E1
const positionE2: Position = position(4, 1) // E2
const positionE3: Position = position(4, 2) // E3
const positionE4: Position = position(4, 3) // E4
const positionE5: Position = position(4, 4) // E5

const positionE8: Position = position(4, 7) // E8

const positionF1: Position = position(5, 0) // F1
const 
positionF2: Position = position(5, 1) // F2
const positionF3: Position = position(5, 2) // F3
const positionF4: Position = position(5, 3) // F4
const positionF5: Position = position(5, 4) // F1
const positionF6: Position = position(5, 5) // F6
const positionF7: Position = position(5, 6) // F7
const positionG3: Position = position(6, 2) // G3
const positionG5: Position = position(6, 4) // G5

const positionH1: Position = position(7, 0) // H1
const positionH3: Position = position(7, 2) // H3
const positionH4: Position = position(7, 3) // H4
const positionH5: Position = position(7, 4) // H5
const positionH7: Position = position(7, 6) // H7

// Horizontal moves
const moveE4_H4: Move = move(positionE4, positionH4);
const moveE4_A4: Move = move(positionE4, positionA4);

// Vertical moves
const moveE4_E1: Move = move(positionE4, positionE1);
const moveE4_E8: Move = move(positionE4, positionE8);

// Diagonal moves
const moveE4_A8: Move = move(positionE4, positionA8);
const moveE4_B1: Move = move(positionE4, positionB1);
const moveE4_H7: Move = move(positionE4, positionH7);
const moveE4_H1: Move = move(positionE4, positionH1);

// Camel moves
const moveE4_F7: Move = move(positionE4, positionF7);
const moveE4_H5: Move = move(positionE4, positionH5);
const moveE4_F1: Move = move(positionE4, positionF1);
const moveE4_H3: Move = move(positionE4, positionH3);
const moveE4_D1: Move = move(positionE4, positionD1);
const moveE4_B3: Move = move(positionE4, positionB3);
const moveE4_B5: Move = move(positionE4, positionB5);
const moveE4_D7: Move = move(positionE4, positionD7);

// Impossible moves
const moveE4_C7: Move = move(positionE4, positionC7);
const moveE4_B2: Move = move(positionE4, positionB2);

//@Ignore("Not implemented yet")
export class TestcamelMoves {
    @Setup
    beforeEach() {
        // TODO:
        // Initialize an empty chessboard
        // Place a white Camel on E4
        chessboard = createEmptyChessboard();
        putPiece(chessboard, positionE4, pieces.blackCamel);
    }

    @Test("A Camel can move three squares horizontally and one square vertically")
    testCanMoveThreeHorizontalAndOneVertical() {
        // TODO:
        // Check the following moves are possible:
        // - moveE4_H3
        // - moveE4_H5
        // - moveE4_B3
        // - moveE4_B5
        let H3: Move = { from: positionE4, to: positionH3, isValid: true };
        let H5: Move = { from: positionE4, to: positionH5, isValid: true };
        let B3: Move = { from: positionE4, to: positionB3, isValid: true };
        let B5: Move = { from: positionE4, to: positionB5, isValid: true };
        Expect(isPossible.camelMove(chessboard, H3)).toBeTruthy();
        Expect(isPossible.camelMove(chessboard, H5)).toBeTruthy();
        Expect(isPossible.camelMove(chessboard, B3)).toBeTruthy();
        Expect(isPossible.camelMove(chessboard, B5)).toBeTruthy();


    }

    @Test("A Camel can move three squares vertically and one square horizontally")
    testCanMoveThreeVerticalAndOneHorizontal() {
        // TODO:
        // Check the following moves are possible:
        // - moveE4_F1
        // - moveE4_F7
        // - moveE4_D1
        // - moveE4_D7
        let F1: Move = { from: positionE4, to: positionF1, isValid: true };
        let F7: Move = { from: positionE4, to: positionF7, isValid: true };
        let D1: Move = { from: positionE4, to: positionD1, isValid: true };
        let D7: Move = { from: positionE4, to: positionD7, isValid: true };
        Expect(isPossible.camelMove(chessboard, F1)).toBeTruthy();
        Expect(isPossible.camelMove(chessboard, F7)).toBeTruthy();
        Expect(isPossible.camelMove(chessboard, D1)).toBeTruthy();
        Expect(isPossible.camelMove(chessboard, D7)).toBeTruthy();


    }

    @Test("A Camel can leap other pieces")
    testCanLeapOtherPieces() {
        // TODO:
        putPiece(chessboard, positionF2, pieces.whitePawn);

        let Capture: Move = { from: positionE4, to: positionF1, isValid: true }
        Expect(isPossible.camelMove(chessboard, Capture)).toBeTruthy();
    }

    @Test("A Camel cannot move diagonally")
    testCannotMoveDiagonally() {
        // TODO:
        let Diagonal: Move = { from: positionE4, to: positionF5, isValid: true };
        Expect(isPossible.camelMove(chessboard, Diagonal)).toBe(false);
    }

    @Test("A Camel cannot move horizontally")
    testCannotMoveHorizontally() {
        // TODO:
        let Horizontal: Move = { from: positionE4, to: positionF4, isValid: true };
        Expect(isPossible.camelMove(chessboard, Horizontal)).toBe(false);
    }

    @Test("A Camel cannot move vertically")
    testCannotMoveVertically() {
        // TODO:
        let vertical: Move = { from: positionE4, to: positionE5, isValid: true };
        Expect(isPossible.camelMove(chessboard, vertical)).toBe(false);
    }

    @Test("A Camel can capture a piece from another color")
    testCanCaptureAnotherColor() {
        // TODO:
        putPiece(chessboard, positionF1, pieces.whiteKing);

        let Capture: Move = { from: positionE4, to: positionF1, isValid: true }
        Expect(isPossible.camelMove(chessboard, Capture)).toBeTruthy();
    }

    @Test("A Camel cannot capture a piece from the same color")
    testCannotCaptureSameColor() {
        // TODO:
        putPiece(chessboard, positionF1, pieces.blackCamel);

        let Capture: Move = { from: positionE4, to: positionF1, isValid: true }
        Expect(isPossible.camelMove(chessboard, Capture)).not.toBeTruthy();
    }
}
