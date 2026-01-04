

export class Generator{

    block_1 : Block = new Block(0);
    block_2 : Block = new Block(1);
    block_3 : Block = new Block(2);
    block_4 : Block = new Block(3);
    block_5 : Block = new Block(4);
    block_6 : Block = new Block(5);
    block_7 : Block = new Block(6);
    block_8 : Block = new Block(7);
    block_9 : Block = new Block(8);
    blocks : Array<Block> = [this.block_1, this.block_2, this.block_3, this.block_4, this.block_5, this.block_6, this.block_7, this.block_8, this.block_9];
    
    constructor() {

        this.block_1.set_horizontal_neighbors([this.block_2, this.block_3])
        this.block_1.set_vertical_neighbors([this.block_4, this.block_7])

        this.block_2.set_horizontal_neighbors([this.block_1, this.block_3])
        this.block_2.set_vertical_neighbors([this.block_5, this.block_8])

        this.block_3.set_horizontal_neighbors([this.block_1, this.block_2])
        this.block_3.set_vertical_neighbors([this.block_6, this.block_9])

        this.block_4.set_horizontal_neighbors([this.block_5, this.block_6])
        this.block_4.set_vertical_neighbors([this.block_1, this.block_7])

        this.block_5.set_horizontal_neighbors([this.block_4, this.block_6])
        this.block_5.set_vertical_neighbors([this.block_2, this.block_8])

        this.block_6.set_horizontal_neighbors([this.block_4, this.block_5])
        this.block_6.set_vertical_neighbors([this.block_3, this.block_9])

        this.block_7.set_horizontal_neighbors([this.block_8, this.block_9])
        this.block_7.set_vertical_neighbors([this.block_1, this.block_4])

        this.block_8.set_horizontal_neighbors([this.block_7, this.block_9])
        this.block_8.set_vertical_neighbors([this.block_2, this.block_5])

        this.block_9.set_horizontal_neighbors([this.block_7, this.block_8])
        this.block_9.set_vertical_neighbors([this.block_3, this.block_6])

        this.generate_board();
    }

    generate_board(){
        var flag = false;
        
        while (flag == false){
            flag = true;
            for (let block of this.blocks){
                try {
                    block.fill_block();
                } catch (error) {
                    this.clear_blocks();
                    flag = false;
                }
            }
        }
    }

    generate_playable_board(max_empty_spaces: number){
        
        var empty_spaces : number = 0;
        while (empty_spaces <= max_empty_spaces){
            var block_id = Math.floor(Math.random() * 9);
            var i = Math.floor(Math.random() * 3);
            var j = Math.floor(Math.random() * 3);
            if (this.blocks[block_id].grid[i][j] != 0 && this.blocks[block_id].count_value(0) <= 7){
                this.blocks[block_id].grid[i][j] = -1;
                empty_spaces += 1;
            }
        }

    }

    clear_blocks(): void {
        for (let block of this.blocks) {
            block.grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        }
    }

    get_json(): any {
        const json: { data: { number: Number; row: number; column: number; block: number; }[] } = {
            "data": []
        }

        var blocks_range = 0
        while (blocks_range < 9) {
            blocks_range += 3
            for (let i = 0; i < 3; i++) {
                for (let j = blocks_range - 3; j < blocks_range; j++) {
                    for (let k = 0; k < 3; k++) {
                        const row = this.blocks[j].get_number_coordinate(i, k)[0]
                        const column = this.blocks[j].get_number_coordinate(i, k)[1]
                        const number = {
                            "number": this.blocks[j].grid[i][k],
                            "row": row,
                            "column": column,
                            "block": j
                        }
                        json['data'].push(number)
                    }
                }
            }
        }
        return json

    }


}
