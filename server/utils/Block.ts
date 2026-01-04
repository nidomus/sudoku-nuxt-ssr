



export class Block {
    id: number;
    grid: Array<Array<Number>>;
    vertical_neighbors: Array<Block>;
    horizontal_neighbors: Array<Block>;



    constructor(id: number) {
        this.id = id;
        this.grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.vertical_neighbors = [];
        this.horizontal_neighbors = [];
    }

    fill_block() {
        while (this.verify_block(0)) {
            this.grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
            let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            numbers.sort(() => Math.random() - 0.5);
            for (let row = 0; row < 3; row++) {
                for (let column = 0; column < 3; column++) {
                    for (let num of numbers) {
                        if (!this.verify_neighbors(num, row, column)) {
                            this.grid[row][column] = num;
                            numbers.splice(numbers.indexOf(num), 1);
                            break;
                        }
                    }
                }
            }
            if (numbers.length > 0) {
                throw new Error("BlockedException");
            }
        }
    }

    get_remaining_numbers() {
        let numbers = [];
        for (let i of this.grid) {
            for (let j of i) {
                numbers.push(j);
            }
        }
        let full_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let remaing_list = [];
        for (let x of full_list) {
            if (numbers.indexOf(x) === -1) {
                remaing_list.push(x);
            }
        }
        return remaing_list;
    }

    private shuffle<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    verify_block(value: Number) {
        return this.grid.some(row => row.includes(value));
    }

    verify_neighbors(value: Number, row: number, column: number) {
        for (let neighbor of this.vertical_neighbors) {
            if (neighbor.verify_row(value, row) !== null) {
                return true;
            }
        }
        for (let neighbor of this.horizontal_neighbors) {
            if (neighbor.verify_column(value, column) !== null) {
                return true;
            }
        }
        return false;
    }

    verify_row(value: Number, row: number) {
        const columnIndex = this.grid[row].indexOf(value);

        if (columnIndex !== -1) {
            return [this.id, row, columnIndex];
        }
    
        return null;
    }

    verify_column(value: Number, column: number) {
        for (let i = 0; i < 3; i++) {
            if (value === this.grid[i][column]) {
                return true;
            }
        }
        return false;
    }

    set_horizontal_neighbors(neighbors: Array<Block>) {
        this.horizontal_neighbors = neighbors;
    }

    set_vertical_neighbors(neighbors: Array<Block>) {
        this.vertical_neighbors = neighbors;
    }

    count_value(value: Number) {
        let count = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.grid[i][j] === value) {
                    count++;
                }
            }
        }
        return count;
    }

    get_number_coordinate(i: number, j: number) {

        var aux = 0;
        if (this.id < 3) {
            aux = 0;
        } else if (this.id < 6) {
            aux = 3;
        } else {
            aux = 6;
        }

        let row = i + aux;
        let column = j + 3 * (this.id - aux);
        return [row, column];
    }


}
