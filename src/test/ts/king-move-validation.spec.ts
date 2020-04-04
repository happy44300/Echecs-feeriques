import { Expect, Test, Setup } from "alsatian";
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
const positionE6: Position = position(4, 5) // E6

const positionE8: Position = position(4, 7) // E8

const positionF1: Position = position(5, 0) // F1
const positionF2: Position = position(5, 1) // F2
const positionF3: Position = position(5, 2) // F3
const positionF4: Position = position(5, 3) // F4
const positionF5: Position = position(5, 4) // F1
const positionF6: Position = position(5, 5) // F6
const positionF7: Position = position(5, 6) // F7

const positionG2: Position = position(6, 1) // G2
const positionG3: Position = position(6, 2) // G3
const positionG4: Position = position(6, 3) // G4
const positionG5: Position = position(6, 4) // G5
const positionG6: Position = position(6, 5) // G6

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
export class TestkingMoves {

    @Setup
    beforeEach() {
        // Initialize an empty chessboard
        // Place a black King on E4
        chessboard = createEmptyChessboard();
        putPiece(chessboard, positionE4, pieces.blackKing);
    }

    @Test("A King can move 1 square in all directions")
    testCanMoveOneSquare() {
        // Check it can move to squares D3, D4, D5, E3, E5, F3, F4, and F5
        let singleLeft: Move = { from: positionE4, to: positionD4, isValid: true };
        let diagonalLeftdown: Move = { from: positionE4, to: positionD3, isValid: true };
        let diagonalLeftUp: Move = { from: positionE4, to: positionD5, isValid: true };
        let singleDown: Move = { from: positionE4, to: positionE3, isValid: true };
        let single: Move = { from: positionE4, to: positionE5, isValid: true };
        let diagonalRightDown: Move = { from: positionE4, to: positionF3, isValid: true };
        let singleRight: Move = { from: positionE4, to: positionF4, isValid: true };
        let DiagonalRightUp: Move = { from: positionE4, to: positionF5, isValid: true };

        Expect(isPossible.kingMove(chessboard, singleLeft)).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, diagonalLeftdown)).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, diagonalLeftUp)).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, singleDown)).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, single)).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, diagonalRightDown)).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, singleRight)).toBeTruthy();
        Expect(isPossible.kingMove(chessboard, DiagonalRightUp)).toBeTruthy();

    }

    @Test("A King cannot move more than 1 square")
    testCannotMoveMoreThanOneSquare() {
        // Check it cannot move to squares C2, C3, C4, C6, E2, E6, G2, G4, and G6
        let C2: Move = { from: positionE4, to: positionC2, isValid: true };
        let C3: Move = { from: positionE4, to: positionC3, isValid: true };
        let C4: Move = { from: positionE4, to: positionC4, isValid: true };
        let C6: Move = { from: positionE4, to: positionC6, isValid: true };
        let E2: Move = { from: positionE4, to: positionE2, isValid: true };
        let E6: Move = { from: positionE4, to: positionE6, isValid: true };
        let G2: Move = { from: positionE4, to: positionG2, isValid: true };
        let G4: Move = { from: positionE4, to: positionG4, isValid: true };
        let G6: Move = { from: positionE4, to: positionG6, isValid: true };
        Expect(isPossible.kingMove(chessboard, C2)).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, C3)).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, C4)).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, C6)).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, E2)).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, E6)).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, G2)).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, G4)).not.toBeTruthy();
        Expect(isPossible.kingMove(chessboard, G6)).not.toBeTruthy();
    }

    @Test("A King cannot capure pieces from the same color")
    testCannotCaptureSameColor() {
        // Place a black Pawn on E5
        // Check the King cannot move to E5.
        putPiece(chessboard, positionE5, pieces.blackPawn);
        let Capture: Move = { from: positionE4, to: positionE5, isValid: true };
        Expect(isPossible.kingMove(chessboard, Capture)).not.toBeTruthy();
    }

    @Test("A King can capure pieces from a different color")
    testCanCaptureSameColor() {
        // Place a white Pawn on E5
        // Check the King can move to E5.
        putPiece(chessboard, positionE5, pieces.whitePawn);
        let Capture: Move = { from: positionE4, to: positionE5, isValid: true };
        Expect(isPossible.kingMove(chessboard, Capture)).toBeTruthy();
    }
}