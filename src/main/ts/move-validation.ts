import { Chessboard, isEmpty, Square, squareAtPosition, pieceAtPosition } from "./chessboard";
import { Move } from "./movements";
import { equals, left, right, top, bottom } from "./position";
import { Piece } from "./piece";

/**
 * Checks whether a Black Pawn can perform a given move.
 * A pawn can move forward to the unoccupied square immediately in front of 
 * it on the same file, or on its first move it can advance two squares along 
 * the same file, provided both squares are unoccupied (black dots in the 
 * diagram); or the pawn can capture an opponent's piece on a square diagonally 
 * in front of it on an adjacent file, by moving to that square (black "x"s). 
 * 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function blackPawnMove(board: Chessboard, move: Move): boolean {

    if (equals(move.to!, bottom(move.from!))) {
        //console.log("Single forward");
        return isEmpty(board, move.to!);
    }

    if (move.from!.rank === 6 && equals(move.to!, bottom(bottom(move.from!)))) {
        //console.log("Double forward");
        return isEmpty(board, bottom(move.from!)) && isEmpty(board, move.to!);
    }

    if (equals(move.to!, left(bottom(move.from!))) || equals(move.to!, right(bottom(move.from!)))) {
        let destination: Square = squareAtPosition(board, move.to!);
        return !(destination.isEmpty || !destination.piece!.isWhite)
    }

    return false;
}

/**
 * A pawn can move forward to the unoccupied square immediately in front of 
 * it on the same file, or on its first move it can advance two squares along 
 * the same file, provided both squares are unoccupied (black dots in 
 * the diagram); or the pawn can capture an opponent's piece on a square diagonally 
 * in front of it on an adjacent file, by moving to that square (black "x"s). 
 * 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function whitePawnMove(board: Chessboard, move: Move): boolean {

    if (equals(move.to!, top(move.from!))) {
        return isEmpty(board, move.to!);
    }

    if (move.from!.rank === 1 && equals(move.to!, top(top(move.from!)))) {
        return isEmpty(board, top(move.from!)) && isEmpty(board, move.to!);
    }

    if (equals(move.to!, left(top(move.from!))) || equals(move.to!, right(top(move.from!)))) {
        let destination: Square = squareAtPosition(board, move.to!);
        return !(destination.isEmpty || destination.piece!.isWhite)
    }

    return false;
}

/**
 * Checks whether a King can perform a given move.
 * The king moves one square in any direction. 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function kingMove(board: Chessboard, move: Move): boolean {

    let absRankDiff: number = Math.abs(move.to!.rank - move.from!.rank);
    let absFileDiff: number = Math.abs(move.to!.file - move.from!.file);
    let isPieceWhite: boolean = pieceAtPosition(board, move.from!).isWhite;
    let destination: Square = squareAtPosition(board, move.to!);
    let destinationIsWhite: boolean;
    
    //null check
    if (pieceAtPosition(board, move.to!) === undefined) {
        destinationIsWhite = !isPieceWhite;
    } else {
        destinationIsWhite = destination.piece!.isWhite;
    }

    //x
    if (move.from!.file == move.to!.file && absRankDiff == 1) {
        return isPieceWhite != destinationIsWhite;
    }

    //y
    if (move.from!.rank == move.to!.rank && absFileDiff == 1) {
        return  isPieceWhite != destinationIsWhite;
    }

    //diagonal
    if ( absRankDiff == absFileDiff && absFileDiff == 1 && absRankDiff == 1) {
        return isPieceWhite != destinationIsWhite;
    }
    return false;
}


/**
 * Checks whether a Queen can perform a given move.
 * The queen combines the power of a rook and bishop and can move any 
 * number of squares along a rank, file, or diagonal, but cannot leap over other pieces.
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function queenMove(board: Chessboard, move: Move): boolean {
    return rookMove(board,move) || bishopMove(board,move);
}


/**
 * Checks whether a Empress can perform a given move.
 * An Empress can move any number of squares along a rank or file, 
 * but cannot leap over other pieces.
 * An Empress can also move to any of the closest squares that are not on the 
 * same rank, file, or diagonal. (Thus the move forms an "L"-shape: 
 * two squares vertically and one square horizontally, or two 
 * squares horizontally and one square vertically.) 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function empressMove(board: Chessboard, move: Move): boolean {
    
    let absRankDiff: number = Math.abs(move.to!.rank - move.from!.rank);
    let absFileDiff: number = Math.abs(move.to!.file - move.from!.file);
    let isPieceWhite: boolean = squareAtPosition(board, move.from!).piece!.isWhite;
    let destination: Square = squareAtPosition(board, move.to!);
    let destinationIsWhite: boolean;

    //check if there is a piece on the square
    if (pieceAtPosition(board, move.to!) === undefined) {
        destinationIsWhite = !isPieceWhite;
    } else {
        destinationIsWhite = destination.piece!.isWhite;
    }

    //L move
    if (absRankDiff == 2 && absFileDiff == 1) { return isPieceWhite != destinationIsWhite; }
    if (absRankDiff == 1 && absFileDiff == 2) { return isPieceWhite != destinationIsWhite; }

    return rookMove(board,move);
}

/**
 * Checks whether a Princess can perform a given move.
 * A princess can move any number of squares diagonally, 
 * but cannot leap over other pieces.
 * A princess can also move to any of the closest squares that are not on the 
 * same rank, file, or diagonal. (Thus the move forms an "L"-shape: 
 * two squares vertically and one square horizontally, or two 
 * squares horizontally and one square vertically.) 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function princessMove(board: Chessboard, move: Move): boolean {

    let rankDiff: number = move.to!.rank - move.from!.rank;
    let fileDiff: number = move.to!.file - move.from!.file;
    let absRankDiff: number = Math.abs(move.to!.rank - move.from!.rank);
    let absfileDiff: number = Math.abs(move.to!.file - move.from!.file);
    let isPieceWhite: boolean = squareAtPosition(board, move.from!).piece!.isWhite;
    let destination: Square = squareAtPosition(board, move.to!);
    let destinationIsWhite: boolean;

    //check if there is a piece on the square and make it opposite
    if (pieceAtPosition(board, move.to!) === undefined) {
        destinationIsWhite = !isPieceWhite;
    } else {
        destinationIsWhite = destination.piece!.isWhite;
    }

    //L move
    if (absRankDiff == 2 && absfileDiff == 1) { return isPieceWhite != destinationIsWhite; }
    if (absRankDiff == 1 && absfileDiff == 2) { return isPieceWhite != destinationIsWhite; }

    return bishopMove(board, move);
}

/**
 * Checks whether a Camel can perform a given move.
 * The Camel move forms an "L"-shape: 
 * three squares vertically and one square horizontally, or three 
 * squares horizontally and one square vertically.) 
 * 
 * The camel can leap over other pieces.
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function camelMove(board: Chessboard, move: Move): boolean {

    let absRankDiff: number = Math.abs(move.to!.rank - move.from!.rank);
    let absfileDiff: number = Math.abs(move.to!.file - move.from!.file);
    let isPieceWhite: boolean = squareAtPosition(board, move.from!).piece!.isWhite;
    let destination: Square = squareAtPosition(board, move.to!);
    let destinationIsWhite: boolean;

    //null check
    if (pieceAtPosition(board, move.to!) === undefined) {
        destinationIsWhite = !isPieceWhite;
    } else {
        destinationIsWhite = destination.piece!.isWhite;
    }
    if (absRankDiff == 3 && absfileDiff == 1) { return isPieceWhite != destinationIsWhite; }
    if (absRankDiff == 1 && absfileDiff == 3) { return isPieceWhite != destinationIsWhite; }

    return false;
}


/**
 * Check whether a bishop can perform a given move.
 * A bishop can move any number of squares diagonally, 
 * but cannot leap over other pieces. 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
function bishopMove(board: Chessboard, move: Move) :boolean {

    let rankDiff: number = move.to!.rank - move.from!.rank;
    let fileDiff: number = move.to!.file - move.from!.file;
    let absRankDiff: number = Math.abs(move.to!.rank - move.from!.rank);
    let absFileDiff: number = Math.abs(move.to!.file - move.from!.file);
    let isPieceWhite: boolean = squareAtPosition(board, move.from!).piece!.isWhite;
    let destination: Square = squareAtPosition(board, move.to!);
    let destinationIsWhite: boolean;

    //check if there is a piece on the square and make it opposite
    if (pieceAtPosition(board, move.to!) === undefined) {
        destinationIsWhite = !isPieceWhite;
    } else {
        destinationIsWhite = destination.piece!.isWhite;
    }

    //diagonal move
    if (absRankDiff == absFileDiff) {
        for (let i = 1; i < absRankDiff; i++) {

            let xPos = move.from!.rank;
            let yPos = move.from!.file;

            //(1,1)
            if (rankDiff > 0 && fileDiff > 0) {
                xPos += i;
                yPos += i;
                if (!isEmpty(board, { rank: xPos, file: yPos })) { return false; }
            }
            //(1,-1) 
            else if (rankDiff > 0 && fileDiff < 0) {
                xPos += i;
                yPos -= i;
                if (!isEmpty(board, { rank: xPos, file: yPos })) { return false; }

            }
            //(-1,1)
            else if (rankDiff < 0 && fileDiff > 0) {
                xPos -= i;
                yPos += i;
                if (!isEmpty(board, { rank: xPos, file: yPos })) { return false; }
            }
            //(-1,-1)
            else if (rankDiff < 0 && fileDiff < 0) {
                xPos -= i;
                yPos -= i;
                if (!isEmpty(board, { rank: xPos, file: yPos })) { return false; }
            }

        }
        //eat check
        return isPieceWhite != destinationIsWhite;
    }
    return false;
    
}

/**
 * 
 * 
 * Checks whether a Rook can perform a given move.
 * An Rook can move any number of squares along a rank or file, 
 * but cannot leap over other pieces.
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
function rookMove(board: Chessboard, move: Move) : boolean {

    let rankDiff: number = move.to!.rank - move.from!.rank;
    let fileDiff: number = move.to!.file - move.from!.file;
    let absRankDiff: number = Math.abs(move.to!.rank - move.from!.rank);
    let absFileDiff: number = Math.abs(move.to!.file - move.from!.file);
    let isPieceWhite: boolean = squareAtPosition(board, move.from!).piece!.isWhite;
    let destination: Square = squareAtPosition(board, move.to!);
    let destinationIsWhite: boolean;

    //check if there is a piece on the square
    if (pieceAtPosition(board, move.to!) === undefined) {
        destinationIsWhite = !isPieceWhite;
    } else {
        destinationIsWhite = destination.piece!.isWhite;
    }

    if (absRankDiff == 0 || absFileDiff == 0) {

        let SquareNumber: number = absRankDiff == 0 ? absFileDiff : absRankDiff;

        for (let i = 1; i < SquareNumber; i++) {

            let xPos = move.from!.rank;
            let yPos = move.from!.file;

            //(+1,0)
            if (rankDiff > 0 && fileDiff == 0) {
                xPos += i;
                if (!isEmpty(board, { rank: xPos, file: yPos })) { return false; }
            }
            //(-1,0) 
            else if (rankDiff < 0 && fileDiff == 0) {
                xPos -= i;
                if (!isEmpty(board, { rank: xPos, file: yPos })) { return false; }
            }
            //(0,+1)
            else if (rankDiff == 0 && fileDiff > 0) {
                yPos += i;
                if (!isEmpty(board, { rank: xPos, file: yPos })) { return false; }
            }
            //(0,-1)
            else if (rankDiff == 0 && fileDiff < 0) {
                yPos -= i;
                if (!isEmpty(board, { rank: xPos, file: yPos })) { return false; }
            }


        }

        return isPieceWhite != destinationIsWhite;
    }
    return false;
}
