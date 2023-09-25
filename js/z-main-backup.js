// Notes ///////////////////////////////////////////////////////////////////////
const notes = {
    // "pointerup" fires on sprite level before global level
    // Use space for background image?
}
// Config //////////////////////////////////////////////////////////////////////
function get_config() {
    let colors = {
        window: 0x203030,
        game_board: 0x404040,
        controller_grid: {
            disabled: 0x406040,
            enabled: 0x60a060,
            hover: 0x80ff80,
        },
        shop_board: {
            disabled: 0x404060,
            enabled: 0x6060a0,
            hover: 0x8080ff,
        },
        controller: 0x40ff40,
        player: 0x40ff40,
        command: {
            disabled: 0x000000,
            enabled: 0x000000,
            hover: 0xffffff,
        },
        command_drag: 0xa0ffff,
        turn_btn: {
            disabled: 0x606020,
            enabled: 0xffff60,
            hover: 0xff4020,
        },
        resources: {
            energy: "#4040ff",
            ultimate: "#a040ff",
            health: "#a03020",
            health_hurt: 0x600000,
        },
        enemy: 0xff4020,
    };
    let shared = {
        window: {
            width: 1750,
            height: 1000,
            color: colors.window,
        },
        commands: {
            state_map: {
                "disabled": {
                    scale: 1,
                    tint: colors.command.disabled,
                },
                "enabled": {
                    scale: 1,
                    tint: colors.command.enabled,
                },
                "hover": {
                    scale: 1.1,
                    tint: colors.command.hover,
                },
            },
            depth: 10,
            width: 60,
            time: {
                scale: 500,
                tint: 200,
            },
        },
        command_drags: {
            depth: 100,
            width: 80,
            tint: colors.command_drag,
            time: {
                scale: 500,
                fade: 500,
            },
        },
    };
    let config = {
        window: shared.window,
        game_board: {
            nrows: 8,
            ncols: 5,
            step: 105,
            tile: {
                img: "tile",
                width: 100,
                state_map: {
                    "disabled": {
                        scale: 1,
                        tint: colors.game_board,
                    },
                    "enabled": {
                        scale: 1,
                        tint: 0x404040,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: 0x808080,
                    },
                },
                init_state: "disabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
        },
        controller_board: {
            nrows: 5,
            ncols: 5,
            step:  105,
            tile: {
                img: "tile",
                width: 100,
                state_map: {
                    "disabled": {
                        scale: 1,
                        tint: colors.controller_grid.disabled,
                    },
                    "enabled": {
                        scale: 1,
                        tint: colors.controller_grid.enabled,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: colors.controller_grid.hover,
                    },
                },
                init_state: "disabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
        },
        shop_board: {
            nrows: 2,
            ncols: 6,
            step:  105,
            tile: {
                img: "tile",
                width: 100,
                state_map: {
                    "disabled": {
                        scale: 1,
                        tint: colors.shop_board.disabled,
                    },
                    "enabled": {
                        scale: 1,
                        tint: colors.shop_board.enabled,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: colors.shop_board.hover,
                    },
                },
                init_state: "disabled",
                time: {
                    scale: 500,
                    tint: 200,
                },
            },
            x: shared.window.width*0.25,
            y: shared.window.height*0.8,
        },
        controller: {
            img: "controller",
            width: 80,
            tint: colors.controller,
            time: {
                move: 500,
                fade: 1000,
            },
            hover: {
                alpha: 0.1,
                delay: 1000,
            },
            depth: 100,
        },
        player: {
            img: "player",
            width: 80,
            tint: colors.player,
            health_lift: 40,
            time: {
                move: 500,
                fade: 1000,
                wobble: 100,
            },
            depth: 10,
        },
        enemy: {
            img: "enemy",
            width: 80,
            tint: colors.enemy,
            health_lift: 40,
            time: {
                move: 500,
                fade: 1000,
                wobble: 100,
            },
            depth: 10,
        },
        wall: {
            img: "wall",
            width: 80,
            tint: 0x202020,
        },
        commands: {
            "step_forward": {
                img: "step_forward",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
                time: shared.commands.time,
            },
            "step_backward": {
                img: "step_backward",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
                time: shared.commands.time,
            },
            "step_right": {
                img: "step_right",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
                time: shared.commands.time,
            },
            "step_left": {
                img: "step_left",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
              time: shared.commands.time,
            },
            "turn_left": {
                img: "turn_left",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
              time: shared.commands.time,
            },
            "turn_right": {
                img: "turn_right",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
              time: shared.commands.time,
            },
            "hit_forward": {
                img: "hit_forward",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
              time: shared.commands.time,
            },
            "explode_self": {
                img: "explode_self",
                width: shared.commands.width,
                depth: shared.commands.depth,
                state_map: shared.commands.state_map,
                init_state: "enabled",
                time: shared.commands.time,
            },
        },
        command_drags: {
            "step_forward": {
                img: "step_forward_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "step_backward": {
                img: "step_backward_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "step_right": {
                img: "step_right_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "step_left": {
                img: "step_left_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "turn_left": {
                img: "turn_left_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "turn_right": {
                img: "turn_right_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "hit_forward": {
                img: "hit_forward_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
            "explode_self": {
                img: "explode_self_d",
                width: shared.command_drags.width,
                depth: shared.command_drags.depth,
                tint: shared.command_drags.tint,
                time: shared.command_drags.time,
            },
        },
        turn_btn: {
            img: "turn_btn",
            width: 161,
            state_map: {
                    "disabled": {
                        scale: 1,
                        tint: colors.turn_btn.disabled,
                    },
                    "enabled": {
                        scale: 1,
                        tint: colors.turn_btn.enabled,
                    },
                    "hover": {
                        scale: 1.1,
                        tint: colors.turn_btn.hover,
                    },
                },
            init_state: "enabled",
            time: {
                scale: 500,
                tint: 200,
            },
            x: shared.window.width*0.5,
            y: shared.window.height*0.15,
        },
        resources: {
            enemy_health: {
                color: colors.resources.health,
                font_size: 15,
                depth: 10,
            },
            player_health: {
                x: shared.window.width*0.5,
                y: shared.window.height*0.25,
                font_size_banner: 15,
                font_size: 25,
                color: colors.resources.health,                
                hurt: {
                    color: colors.resources.health_hurt,
                    time: 200,
                },
                depth: 10,
            },
            player_energy: {
                x: shared.window.width*0.5,
                y: shared.window.height*0.3,
                font_size: 25,
                color: colors.resources.energy,
                depth: 10,
            },
            player_ultimate: {
                x: shared.window.width*0.5,
                y: shared.window.height*0.35,
                font_size: 25,
                color: colors.resources.ultimate,
                depth: 10,
            },
        },
        screen_cover: {
            img: "screen_cover",
            width: shared.window.width,
            states: {
                death: {
                    tint: 0x400000,
                    alpha: 0.8,
                    time: 5000,
                },
            },
            depth: 1000,
        },
    };
    return config
}
// Helper functions ////////////////////////////////////////////////////////////
class ColorFunctions {
    static hexIntToRGB(hexInt) {
        const r = (hexInt >> 16) & 255;
        const g = (hexInt >> 8) & 255;
        const b = hexInt & 255;
        return {r:r, g:g, b:b};
    }
    static rgbToHexInt({r, g, b}) {
        return (r << 16) + (g << 8) + b;
    }
}
// Main ////////////////////////////////////////////////////////////////////////
class MainScene extends Phaser.Scene {
    preload() {
        this.load.image("tile", "assets/tile.svg");
        this.load.image("controller", "assets/controller.svg");
        this.load.image("player", "assets/player.svg");
        this.load.image("enemy", "assets/enemy.svg");
        this.load.image("wall", "assets/wall.svg");
        
        this.load.image("step_forward", "assets/commands/step_forward.svg");
        this.load.image("step_backward", "assets/commands/step_backward.svg");
        this.load.image("step_left", "assets/commands/step_left.svg");
        this.load.image("step_right", "assets/commands/step_right.svg");
        this.load.image("turn_left", "assets/commands/turn_left.svg");
        this.load.image("turn_right", "assets/commands/turn_right.svg");
        this.load.image("hit_forward", "assets/commands/hit_forward.svg");
        this.load.image("explode_self", "assets/commands/explode_self.svg");

        this.load.image("step_forward_d", "assets/commands/drags/step_forward.svg");
        this.load.image("step_backward_d", "assets/commands/drags/step_backward.svg");
        this.load.image("step_left_d", "assets/commands/drags/step_left.svg");
        this.load.image("step_right_d", "assets/commands/drags/step_right.svg");
        this.load.image("turn_left_d", "assets/commands/drags/turn_left.svg");
        this.load.image("turn_right_d", "assets/commands/drags/turn_right.svg");
        this.load.image("hit_forward_d", "assets/commands/drags/hit_forward.svg");
        this.load.image("explode_self_d", "assets/commands/drags/explode_self.svg");

        this.load.image("turn_btn", "assets/turn_btn.svg");

        this.load.image("screen_cover", "assets/screen_cover.svg");
    }
    create() {
        this.input.topOnly = false; // Just for prettiness of hovering over the controller
        
        let config = get_config()
                
        let controller_board = new ControllerBoard({
            board: new Board({
                scene: this,
                x: config.window.width*0.25,
                y: config.window.height*0.35,
                board_config: config.controller_board,
            }),
            controller: new Controller({
                scene: this,
                x: null,
                y: null,
                controller_config: config.controller,            
            }),
        });
        let game_board = new GameBoard({
            board: new Board({
                scene: this,
                x: config.window.width*0.75,
                y: config.window.height*0.5,
                board_config: config.game_board,
            }),
            player: new Agent({
                scene: this,
                x: null,
                y: null,
                X: null,
                Y: null,
                dir: 1,
                game_board: null,
                agent_config: config.player,
            }),
        });
        let turn_btn = new TurnButton({
            scene: this,
            x: config.turn_btn.x,
            y: config.turn_btn.y,
            btn_config: config.turn_btn,
        });        
        turn_btn.attach_game_board(game_board);
        let shop_board = new ShopBoard({
            board: new Board({
                scene: this,
                x: config.shop_board.x,
                y: config.shop_board.y,
                board_config: config.shop_board,
            }),
        });

        let screen_cover = new ScreenCover({
            scene: this,
            x: config.window.width/2,
            y: config.window.height/2,
            screen_cover_config: config.screen_cover,
        });

        game_board.player.new_resource(Resources.player_health({
            value: 3,
            max_value: 3,
            screen_cover: screen_cover,
            on_death: () => {
                console.log("Game over");

                // TODO: Ugly---------------------------------------------------
                screen_cover.setTint(config.screen_cover.states.death.tint);
                this.tweens.add({ 
                    targets: screen_cover,
                    alpha: config.screen_cover.states.death.alpha,
                    ease: "Quint.Out",
                    duration: config.screen_cover.states.death.time,
                });
                // -------------------------------------------------------------
                
                controller_board.disable_board();
                shop_board.disable_board();
                turn_btn.state.set("disabled");
            },
            health_config: config.resources.player_health,
        }));
        game_board.player.new_resource(Resources.player_energy({
            value: 5,
            max_value: Infinity,
            controller_board: controller_board,
            turn_btn: turn_btn,
            energy_config: config.resources.player_energy,
        }));
        game_board.player.new_resource(Resources.player_ultimate({
            value: 0,
            max_value: 20,
            controller_board: controller_board,
            turn_btn: turn_btn,
            ultimate_config: config.resources.player_ultimate,
        }));
        
        let place_command = ({X, Y, command_id}) => {
            shop_board.place_command({
                X: X,
                Y: Y,
                command: new Command({
                    scene: this,
                    game_board: game_board,
                    command_id: command_id,
                    command_config: config.commands[command_id],
                }),
                drag: new CommandDrag({
                    scene: this,
                    controller_board: controller_board,
                    command_config: config.command_drags[command_id],
                }),
            });
        };
        place_command({X: 0, Y: 0, command_id: "step_forward"});
        place_command({X: 1, Y: 0, command_id: "step_backward"});
        place_command({X: 2, Y: 0, command_id: "turn_left"});
        place_command({X: 3, Y: 0, command_id: "turn_right"});
        place_command({X: 4, Y: 0, command_id: "step_left"});
        place_command({X: 5, Y: 0, command_id: "step_right"});
        place_command({X: 0, Y: 1, command_id: "hit_forward"});
        place_command({X: 1, Y: 1, command_id: "explode_self"});        
        shop_board.reset_board();

        controller_board.place_command({
            X: 2,
            Y: 1,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "step_forward",
                command_config: config.commands["step_forward"],
            }),
        }); // step_forward
        controller_board.place_command({
            X: 2,
            Y: 2,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "step_forward",
                command_config: config.commands["step_forward"],
            }),
        }); // step_forward
        controller_board.place_command({
            X: 1,
            Y: 2,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "turn_left",
                command_config: config.commands["turn_left"],
            }),
        }); // turn_left
        controller_board.place_command({
            X: 1,
            Y: 1,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "turn_left",
                command_config: config.commands["turn_left"],
            }),
        }); // turn_left
        controller_board.place_command({
            X: 3,
            Y: 2,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "turn_right",
                command_config: config.commands["turn_right"],
            }),
        }); // turn_right
        controller_board.place_command({
            X: 3,
            Y: 1,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "turn_right",
                command_config: config.commands["turn_right"],
            }),
        }); // turn_right
        controller_board.place_command({
            X: 1,
            Y: 3,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
        controller_board.place_command({
            X: 2,
            Y: 3,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
        controller_board.place_command({
            X: 3,
            Y: 3,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
        controller_board.place_command({
            X: 1,
            Y: 0,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
        controller_board.place_command({
            X: 2,
            Y: 0,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
        controller_board.place_command({
            X: 3,
            Y: 0,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "hit_forward",
                command_config: config.commands["hit_forward"],
            }),
        }); // hit_forward
        controller_board.place_command({
            X: 0,
            Y: 0,
            command: new Command({
                scene: this,
                game_board: game_board,
                command_id: "explode_self",
                command_config: config.commands["explode_self"],
            }),
        }); // hit_forward
                
    }
}
// Basic board /////////////////////////////////////////////////////////////////
class Board {
    constructor({scene, x, y, board_config}) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.config = board_config;
        this.tiles = Array(board_config.nrows).fill().map((_,i) => 
             Array(board_config.ncols).fill().map((_,j) => new Tile({
                 scene: scene,
                 x: board_config.step*j + x - (board_config.ncols - 1)*board_config.step/2,
                 y: board_config.step*i + y - (board_config.nrows - 1)*board_config.step/2,
                 tile_config: board_config.tile,
             }))
        );
    }
    foreach(func) {
        for (let X = 0; X < this.config.ncols; X++) {
            for (let Y = 0; Y < this.config.nrows; Y++) {
                func(X,Y);
            }
        }
    }
    foreach_rev(func) {
        for (let X = this.config.ncols-1; X >= 0; X--) {
            for (let Y = this.config.nrows-1; Y >= 0; Y--) {
                func(X,Y);
            }
        }
    }
    contains({X,Y}) {
        return X >= 0 && Y >= 0 && X < this.config.ncols && Y < this.config.nrows;
    }    
}
class Tile extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, tile_config}) {
        super(scene, x, y, tile_config.img);
                
        //let config = get_config();                
        this.displayWidth = tile_config.width;
        this.scaleY = this.scaleX;
        this.state = new VisState({
            sprite: this,
            state_map: tile_config.state_map,
            init_state: tile_config.init_state,
            tint_time: tile_config.time.tint,
            scale_time: tile_config.time.scale,
        });

        scene.add.existing(this);

        this.setInteractive();
        this.on("pointerover", () => {
            if (this.state.get() == "disabled") {return;}
            this.state.set("hover");
        });
        this.on("pointerout", () => {
            if (this.state.get() == "disabled") {return;}
            this.state.set("enabled");
        });
    }
}
class VisState {
    constructor({sprite, state_map, init_state, scale_time, tint_time}) {
        this.sprite = sprite;
        this.state = init_state;
        this.tint = state_map[this.state].tint;
        this.state_map = state_map;
        this.scale_time = scale_time;
        this.tint_time = tint_time;
        
        this.original_scale = this.sprite.scale;

        this.sprite.setTint(this.tint);
    }
    get() {
        return this.state;
    }
    set(state) {
        // TODO: Move tweens into separate class/container?
        
        // Scale ---------------------------------------------------------------
        this.sprite.scene.tweens.add({
            targets: this.sprite,
            scale: this.original_scale*this.state_map[state].scale,
            ease: "Quint.Out",
            duration: this.scale_time,
        });
        
        // Tint ----------------------------------------------------------------
        let current_tint = ColorFunctions.hexIntToRGB(this.state_map[this.state].tint);
        let target_tint = ColorFunctions.hexIntToRGB(this.state_map[state].tint);

        this.sprite.scene.tweens.add({
            targets: current_tint,
            r: target_tint.r,
            g: target_tint.g,
            b: target_tint.b,
            duration: this.tint_time,
            onUpdate: (tween) => {
                let combined_tint = (current_tint.r << 16) | (current_tint.g << 8) | current_tint.b;
                this.sprite.setTint(combined_tint);
            }
        });

        // Update --------------------------------------------------------------
        this.state = state;
        this.tint = this.state_map[state];
    }
}
// Special boards //////////////////////////////////////////////////////////////
class ControllerBoard {
    constructor({board, controller}) {
        this.controller = controller;
        this.board = board;
        
        this.commands = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));

        // Centralize controller -------------------------------------------------
        let center = {
            X: Math.floor(0.5*this.board.config.nrows),
            Y: Math.floor(0.5*this.board.config.ncols),
        };
        this.controller.X = center.X;
        this.controller.Y = center.Y;        
        this.controller.x = this.board.tiles[center.Y][center.X].x;
        this.controller.y = this.board.tiles[center.Y][center.X].y;
        // ---------------------------------------------------------------------       

        this.event_emitter = new Phaser.Events.EventEmitter();

        this.setup_board();
    }
    setup_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            tile.on("pointerup", () => {
                this.on_click(X,Y);
            });
            tile.on("pointerover", () => {
                let command = this.commands[Y][X];
                if (command == null) {return;}
                command.state.set("hover");
            });
            tile.on("pointerout", () => {
                let command = this.commands[Y][X];
                if (command == null) {return};
                command.state.set("enabled");
            });
        });
        this.reset_board();
    }
    reset_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            if (this.dist_to_joistick(X,Y) == 1) {
                tile.state.set("enabled");                
            }
            else {
                tile.state.set("disabled");                    
            }
        });
    }
    disable_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            tile.state.set("disabled");
        });
    }
    dist_to_joistick(X,Y) {
        let delta = {X: Math.abs(X - this.controller.X), Y:Math.abs(Y - this.controller.Y)}
        return Math.max(delta.X, delta.Y)
        //return delta.X <= 1 && delta.Y <= 1 && (delta.X + delta.Y) > 0;
    }        
    place_command({X,Y, command}) {
        let tile = this.board.tiles[Y][X];
        command.x = tile.x;
        command.y = tile.y;
        this.commands[Y][X] = command;
    }
    remove_command(X,Y) {
        let command = this.commands[Y][X];
        this.commands[Y][X] = null;
        
        if (command == null) {return;}
        command.destroy(); // TODO: destroy outside of remove_command, instead return command
    }
    on_click(X,Y) {
        this.event_emitter.emit("click", X, Y);
        
        let tile = this.board.tiles[Y][X];
        if (tile.state.get() == "disabled") {return;}
        
        this.controller.X = X;
        this.controller.Y = Y;        
        this.controller.tween_pos({x:tile.x, y:tile.y});

        let command = this.commands[Y][X];
        if (command != null) { command.execute(); }
        
        //this.reset_board(); // TODO: Redundantly called twice because of event below (see Resources.energy)
        this.event_emitter.emit("execute", X, Y);
    }
    
}
class GameBoard {
    constructor({board, player}) {
        this.board = board;
        this.player = player;

        this.entities = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));

        this.insert({
            X: 2,
            Y: board.config.nrows - 1,
            entity: player,
        });
        
        //this.setup_board();
    }
    insert({X, Y, entity}) {
        this.entities[Y][X] = entity;
        entity.X = X;
        entity.Y = Y;
        entity.game_board = this;
        
        let tile = this.board.tiles[Y][X];
        entity.x = tile.x;
        entity.y = tile.y;
    }
    pop(X, Y) {
        let agent = this.entities[Y][X];
        this.entities[Y][X] = null;

        if (agent != null) {
            //agent.x = null;
            //agent.y = null;
            agent.X = null;
            agent.Y = null;
        }
        
        return agent;
    }
}
class ShopBoard {
    constructor({board}) {
        this.board = board;
        this.commands = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));

        this.drags = Array(board.config.nrows).fill().map((_,i) => 
            Array(board.config.ncols).fill().map((_,j) => null));
        
        this.setup_board();
    }
    setup_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            tile.on("pointerup", () => {
                this.on_click(X,Y);                
            });
            tile.on("pointerover", () => {
                let command = this.commands[Y][X];
                if (command == null) {return;}
                command.state.set("hover");
            });
            tile.on("pointerout", () => {
                let command = this.commands[Y][X];
                if (command == null) {return;}
                command.state.set("enabled");
            });
        });
    }
    reset_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            let command = this.commands[Y][X];
            if (command != null) {
                tile.state.set("enabled");                
            }
            else {
                tile.state.set("disabled");                    
            }
        });
    }    
    place_command({X,Y, command, drag}) {
        let tile = this.board.tiles[Y][X];
        
        command.x = tile.x;
        command.y = tile.y;
        this.commands[Y][X] = command;

        drag.x = tile.x;
        drag.y = tile.y;
        drag.alpha = 0;
        this.drags[Y][X] = drag;
        drag.shop_board = this;
        drag.X = X;
        drag.Y = Y;
    }
    on_click(X,Y) {
        let tile = this.board.tiles[Y][X];
        if (tile.state.get() == "disabled") {return;}
        let command = this.commands[Y][X];
        
        let drag = this.drags[Y][X];

        drag.appear_at(command);
    }    
}
const BoardMethods = {
    disable_board() {
        this.board.foreach((X, Y) => {
            let tile = this.board.tiles[Y][X];
            tile.state.set("disabled");
        });
    },
};
Object.assign(ControllerBoard.prototype, BoardMethods);
Object.assign(ShopBoard.prototype, BoardMethods);
// Entities ////////////////////////////////////////////////////////////////////
class Controller extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, controller_config}) {
        super(scene, x, y, controller_config.img);
        this.scene = scene;
                
        this.config = controller_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;

        this.setTint(this.config.tint);
        this.X = null;
        this.Y = null;

        this.setInteractive();        
        this.lock_faded = false; // TODO: Unethical?
        this.setup_hover_fade();

        this.setDepth(this.config.depth);

        scene.add.existing(this);
    }
    setup_hover_fade() {
        this.on("pointerover", () => {
            this.scene.time.delayedCall(this.config.hover.delay, () => {
                const pointer = this.scene.input.activePointer;
                const bounds = this.getBounds();
                
                if (bounds.contains(pointer.x, pointer.y)) {
                    this.tween_alpha({from: this.alpha, to: this.config.hover.alpha});
                }
                
            }, [], this);
        });
        this.on("pointerout", () => {            
            this.scene.time.delayedCall(this.config.hover.delay, () => {
                if (this.lock_faded) {return;}
                this.tween_alpha({from: this.alpha, to: 1});                
            }, [], this);
        });
    }
}
class Resources {
    static enemy_health({value, max_value, health_config}) {
        return {
            name: "health",
            value: value,
            max_value: max_value,
            on_created: ({target}) => {
                let health_value = target._resources["health"].value;
                target._health_banner = target.scene.add.text(
                    target.x,
                    target.y,
                    ` ${health_value} `,
                    {
                        font: `bold ${health_config.font_size}px Monospace`,
                        fill: "#FFFFFF",
                        backgroundColor: health_config.color,
                    }
                ).setOrigin(0.5);
                target._health_banner.setDepth(health_config.depth);
                target.event_emitter.on("update", (time, delta) => {
                    target._health_banner.x = target.x;
                    target._health_banner.y = target.y-target.config.health_lift;
                    target._health_banner.alpha = target.alpha;
                });
            },
            on_modified: ({target, old_val}) => {
                let health_value = target.get_resource("health");
                target._health_banner.text = ` ${health_value} `;
                target.tween_wobble();                
                if (health_value > 0) {return;}
                target.game_board.entities[target.Y][target.X] = null;
                target.tween_alpha({
                    from: 1,
                    to: 0.0,
                    on_complete: () => {
                        target.destroy();
                        target._health_banner.destroy();
                    },
                });
            },
        };
    }
    static player_health({value, max_value, screen_cover, on_death, health_config}) {
        return {
            name: "health",
            value: value,
            max_value: max_value,
            on_created: ({target}) => {
                let health_value = target._resources["health"].value;
                target._health_banner = target.scene.add.text(
                    target.x,
                    target.y,
                    ` ${health_value} `,
                    {
                        font: `bold ${health_config.font_size_banner}px Monospace`,
                        fill: "#FFFFFF",
                        backgroundColor: health_config.color,
                    }
                ).setOrigin(0.5);
                target._health_banner.setDepth(health_config.depth);
                target.event_emitter.on("update", (time, delta) => {
                    target._health_banner.x = target.x;
                    target._health_banner.y = target.y-target.config.health_lift;
                    target._health_banner.alpha = target.alpha;
                });
                
                target._health_text = target.scene.add.text(
                    health_config.x,
                    health_config.y,
                    ` Health: ${health_value}/${value} `,
                    {
                        font: `bold ${health_config.font_size}px Monospace`,
                        fill: "#FFFFFF",
                        backgroundColor: health_config.color,
                    }
                ).setOrigin(0.5);
                target._health_text.setDepth(health_config.depth);                                
            },
            on_modified: ({target, old_val}) => {
                let health_value = target.get_resource("health");
                target._health_banner.text = ` ${health_value} `;
                target._health_text.text = ` Health: ${health_value} `;
                target.tween_wobble();

                if (health_value < old_val) {
                    screen_cover.setTint(health_config.hurt.color);
                    screen_cover.scene.tweens.add({ 
                        targets: screen_cover,
                        alpha: 0.5,
                        ease: "Sin",
                        duration: health_config.hurt.time,
                        yoyo: true,
                    });
                }
                
                if (health_value > 0) {return;}
                target.game_board.entities[target.Y][target.X] = null;
                on_death();
                target.tween_alpha({
                    from: 1,
                    to: 0.0,
                    on_complete: () => {
                        target.destroy();
                        target._health_banner.destroy();
                    },
                });
            },
        };
    }
    static player_energy({value, max_value, controller_board, turn_btn, energy_config}) {
        return {
            name: "energy",
            value: value,
            max_value: max_value,
            on_created: ({target}) => {
                let energy_value = target.get_resource("energy");
                target._energy_text = target.scene.add.text(
                    energy_config.x,
                    energy_config.y,
                    ` Energy: ${energy_value}/${value} `,
                    {
                        font: `bold ${energy_config.font_size}px Monospace`,
                        fill: "#FFFFFF",
                        backgroundColor: energy_config.color,
                    }
                ).setOrigin(0.5);
                target._energy_text.setDepth(energy_config.depth);

                controller_board.event_emitter.on("execute", (X, Y) => {
                    target.modify_resource("energy", -1);
                });
                turn_btn.event_emitter.on("click", () => {
                    if (target.get_resource("health") == 0) {return;} // TODO: Unethical?
                    target.set_resource("energy", value);
                });
            },
            on_modified: ({target, old_val}) => {
                let energy_value = target.get_resource("energy");
                target._energy_text.text = ` Energy: ${energy_value}/${value} `;
                if (energy_value == 0) {
                    controller_board.disable_board();
                }
                else {
                    controller_board.reset_board();
                }
            },
        }
    }
    static player_ultimate({value, max_value, controller_board, turn_btn, ultimate_config}) {
        return {
            name: "ultimate",
            value: value,
            max_value: max_value,
            on_created: ({target}) => {
                let ultimate_value = target.get_resource("ultimate");
                target._ultimate_text = target.scene.add.text(
                    ultimate_config.x,
                    ultimate_config.y,
                    ` Ultimate: ${ultimate_value}/${max_value} `,
                    {
                        font: `bold ${ultimate_config.font_size}px Monospace`,
                        fill: "#FFFFFF",
                        backgroundColor: ultimate_config.color,
                    }
                ).setOrigin(0.5);
                target._ultimate_text.setDepth(ultimate_config.depth);
            },
            on_modified: ({target, old_val}) => {
                let ultimate_value = target.get_resource("ultimate");
                target._ultimate_text.text = ` Ultimate: ${ultimate_value}/${max_value} `;
            },
        }
    }
}
class Agent extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, X, Y, dir, game_board, agent_config}) {
        super(scene, x, y, agent_config.img);        
        this.scene = scene;

        this.config = agent_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;

        this.setTint(this.config.tint);

        this.X = X;
        this.Y = Y;
        this.game_board = game_board;
        
        this.dir = dir; // *Math.PI/2
        this.angle = this.get_phaser_angle_deg(0);

        this.event_emitter = new Phaser.Events.EventEmitter();

        this.setDepth(this.config.depth);

        scene.add.existing(this);        
    }
    get_angle(rel_dir) {
        return (this.dir + rel_dir)*Math.PI/2
    }
    get_angle_deg(rel_dir) {
        return (this.dir + rel_dir)*90
    }
    get_phaser_angle_deg(rel_dir) {
        return -this.get_angle_deg(rel_dir) + 90;
    }    
    turn_to(dir) {
        // https://newdocs.phaser.io/docs/3.60.0/focus/Phaser.GameObjects.Sprite-angle
        this.dir = dir;        
        let angle = this.get_phaser_angle_deg(0);
        this.tween_angle(angle);
        this.dir = (this.dir + 4) % 4;
    }
    preUpdate(time, delta) {
        this.event_emitter.emit("update", time, delta);
    }
    FR2XY({F, R}) {
        let F_angle = this.get_angle(0);
        let R_angle = this.get_angle(-1);

        let F_vec = {
            X: Math.round(Math.cos(F_angle)),
            Y: -Math.round(Math.sin(F_angle)), // minus because Y points down
        };
        let R_vec = {
            X: Math.round(Math.cos(R_angle)),
            Y: -Math.round(Math.sin(R_angle)), // minus because Y points down
        };
        
        let XY_pos = {
            X: this.X + F*F_vec.X + R*R_vec.X,
            Y: this.Y + F*F_vec.Y + R*R_vec.Y,
        };

        return XY_pos;
    }
}
const TweenMethods = {
    tween_pos({x,y}) {
        this.scene.tweens.add({
            targets: this,
            x: x,
            y: y,
            ease: "Quint.Out",
            duration: this.config.time.move,
        });
    },
    tween_alpha({from, to, on_complete}) {
        this.alpha = from;        
        this.scene.tweens.add({
            targets: this,
            alpha: {from: from, to: to},
            ease: "Quint.Out",
            duration: this.config.time.fade,
            onComplete: on_complete,
        });
    },
    tween_angle(angle) {
        this.scene.tweens.add({
            targets: this,
            angle: angle,
            ease: "Quint.Out",
            duration: this.config.time.move,
        });
    },
    tween_wobble() {
        this.scene.tweens.add({
            targets: this,
            x: this.x + 10,
            ease: "Sin",
            duration: this.config.time.wobble,
            repeat: 0,
            yoyo: true,
            onComplete: () => {
                this.scene.tweens.add({
                    targets: this,
                    x: this.x - 10,
                    ease: "Sin",
                    duration: this.config.time.wobble,
                    repeat: 0,
                    yoyo: true,
                });
            },
        });
    },    
};
const ResourceMethods = {
    ensure_resources() {
        if (this._resources === undefined) {
            this._resources = {};
        }        
    },
    new_resource({name, value, max_value, on_created, on_modified}) {
        this.ensure_resources();
        this._resources[name] = {
            value: value,
            max_value: max_value,
            on_modified: on_modified,
        };
        on_created({target: this});
    },
    get_resource(name) {
        return this._resources[name].value;
    },
    set_resource(name, value) {
        let old_val = this._resources[name].value;
        let new_val = Math.min(Math.max(value, 0), this._resources[name].max_value);
        this._resources[name].value = new_val;
        this._resources[name].on_modified({
            target: this,
            old_val: old_val,    
        });
    },
    modify_resource(name, delta) {
        this.set_resource(name, this._resources[name].value + delta);
    },
};
const CommandMethods = {
    step({F, R}) {
        // F: Forward, R: Right        
        let target_pos = this.FR2XY({F:F, R:R});
        if (!this.game_board.board.contains(target_pos)) {return;}
        if (this.game_board.entities[target_pos.Y][target_pos.X] != null) {return;}
                
        let tile = this.game_board.board.tiles[target_pos.Y][target_pos.X];

        this.game_board.pop(this.X, this.Y)
        
        this.game_board.entities[target_pos.Y][target_pos.X] = this;
        this.X = target_pos.X;
        this.Y = target_pos.Y;
        this.tween_pos({x: tile.x, y: tile.y});
    },
    turn({dir}) {
        this.turn_to(this.dir + dir);
    },
    hit({F, R, dmg}) {
        // F: Forward, R: Right
        let target_pos = this.FR2XY({F:F, R:R});
        if (!this.game_board.board.contains(target_pos)) {return;}

        let target = this.game_board.entities[target_pos.Y][target_pos.X];

        if (target != null) {
            target.modify_resource("health", -dmg);
        }
    },
    explode({dmg}) {
        if (this.get_resource("ultimate") < 10) {return;}
        this.modify_resource("ultimate", -10);
        for (let X = -1; X <= 1; X++) {
            for (let Y = -1; Y <= 1; Y++) {
                let target_pos = {Y: this.Y + Y, X: this.X + X};
                if (!this.game_board.board.contains(target_pos)) {continue;}
                if (X==0 && Y==0) {continue;}
                let target = this.game_board.entities[this.Y + Y][this.X + X];
                if (target != null) {
                    target.modify_resource("health", -dmg);
                }
            }
        }
    },
};
Object.assign(Controller.prototype, TweenMethods);
Object.assign(Agent.prototype, TweenMethods, ResourceMethods, CommandMethods);
class Enemy1 extends Agent {
    act() {
        let target_XY = this.FR2XY({F:1, R:0});

        if (!this.game_board.board.contains(target_XY)) {return;}
        if (this.game_board.entities[target_XY.Y][target_XY.X] == this.game_board.player) {
            this.hit({F: 1, R: 0, dmg: 1});
        }
        else {
            this.step({F: 1, R: 0});
        }
    }
}
// UI //////////////////////////////////////////////////////////////////////////
class Button extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, btn_config}) {
        super(scene, x, y, btn_config.img);

        this.scene = scene;

        this.config = btn_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;
        
        this.state = new VisState({
            sprite: this,
            state_map: this.config.state_map,
            init_state: this.config.init_state,
            tint_time: btn_config.time.tint,
            scale_time: btn_config.time.scale,
        });

        this.event_emitter = new Phaser.Events.EventEmitter();

        scene.add.existing(this);

        this.setInteractive();
        this.on("pointerover", () => {
            if (this.state.get() == "disabled") {return;}
            this.state.set("hover");
        });
        this.on("pointerout", () => {
            if (this.state.get() == "disabled") {return;}
            this.state.set("enabled");
        });
        this.on("pointerup", () => {
            if (this.state.get() == "disabled") {return;}
            this.event_emitter.emit("click");
        });
    }
}
class TurnButton extends Button {
    attach_game_board(game_board) {
        this.event_emitter.on("click", () => {
            this.everybody_act(game_board);
            this.spawn_enemies(game_board);
        });
    }
    everybody_act(game_board) {
        game_board.board.foreach_rev((X,Y) => {
            let agent = game_board.entities[Y][X];
            if (agent == null || agent == game_board.player) {return;}
            agent.act();
        });
    }
    spawn_enemies(game_board) {
        let config = get_config(); // Move out?
        let Y = 0;
        for (let X = 0; X < game_board.board.config.ncols; X++) {
            if (game_board.entities[Y][X] != null) {continue;}
            if (Math.random() > 0.2) {continue;}
            let enemy = new Enemy1({
                scene: this.scene,
                x: null,
                y: null,
                X: null,
                Y: null,
                dir: -1,
                game_board: null,
                agent_config: config.enemy,
            });
            enemy.tween_alpha({
                from: 0.0,
                to: 1,
            });
            enemy.new_resource(Resources.enemy_health({
                value: 2,
                max_value: 2,
                health_config: config.resources.enemy_health, // TODO: separate config for enemy health?
            }));
            game_board.insert({
                X: X,
                Y: Y,
                entity: enemy,
            });
        }
    }
}
class ScreenCover extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, screen_cover_config}) {
        super(scene, x, y, screen_cover_config.img);
        
        this.config = screen_cover_config;

        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;
        
        this.alpha = 0;

        this.setDepth(this.config.depth);

        scene.add.existing(this);
    }
}
Object.assign(ScreenCover.prototype, TweenMethods);
// Commands ////////////////////////////////////////////////////////////////////
const PlayerCommands = {
    step_forward: (game_board) => () => {
        game_board.player.step({
            F: 1,
            R: 0,
        });
        game_board.player.modify_resource("ultimate", 1);
    },
    step_backward: (game_board) => () => {
        game_board.player.step({
            F: -1,
            R: 0,
        });
        game_board.player.modify_resource("ultimate", 1);
    },
    hit_forward: (game_board) => () => {
        game_board.player.hit({
            F: 1,
            R: 0,
            dmg: 1,
        });
        if (game_board.player.FR2XY({F:1, R: 0}) != null) {
            game_board.player.modify_resource("ultimate", 1);
        }
    },
    step_right: (game_board) => () => {
        game_board.player.step({
            F: 0,
            R: 1,
        });
        game_board.player.modify_resource("ultimate", 1);        
    },
    step_left: (game_board) => () => {
        game_board.player.step({
            F: 0,
            R: -1,
        });
        game_board.player.modify_resource("ultimate", 1);
    },
    turn_left: (game_board) => () => {
        game_board.player.turn({
            dir: 1,
        });
        game_board.player.modify_resource("ultimate", 1);
    },
    turn_right: (game_board) => () => {
        game_board.player.turn({
            dir: -1,
        });
        game_board.player.modify_resource("ultimate", 1);
    },
    explode_self: (game_board) => () => {
        game_board.player.explode({
            dmg: 2,
        });
    },
};
class Command extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, game_board, command_id, command_config}) {
        super(scene, x, y, command_config.img);
        this.scene = scene;
                
        this.config = command_config;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;
        this.state = new VisState({
            sprite: this,
            state_map: command_config.state_map,
            init_state: command_config.init_state,
            tint_time: command_config.time.tint,
            scale_time: command_config.time.scale,
        });

        this.game_board = game_board;
        this.command_id = command_id;

        this.execute = PlayerCommands[this.command_id](game_board);
                
        this.setDepth(this.config.depth);

        scene.add.existing(this);
    }
    execute() {
        
    }
    __deletable() {
        switch (command_id) {
        case "step_forward":
            this.execute = () => {
                let old_pos = {X: game_board.player.X, Y: game_board.player.Y};                
                game_board.player.step({
                    F: 1,
                    R: 0,
                });
                let new_pos = {X: game_board.player.X, Y: game_board.player.Y};
                if (new_pos.X != old_pos.X || new_pos.Y != old_pos.Y) {
                    game_board.player.modify_resource("ultimate", 1);
                }
            };
            break;
        case "step_backward":
            this.execute = () => {
                let old_pos = {X: game_board.player.X, Y: game_board.player.Y};                
                game_board.player.step({
                    F: -1,
                    R: 0,
                });
                let new_pos = {X: game_board.player.X, Y: game_board.player.Y};
                if (new_pos.X != old_pos.X || new_pos.Y != old_pos.Y) {
                    game_board.player.modify_resource("ultimate", 1);
                }
            };
            break;
        case "hit_forward":
            this.execute = () => {
                game_board.player.hit({
                    F: 1,
                    R: 0,
                    dmg: 1,
                });
            };
            break;
        case "step_right":
            this.execute = () => {
                game_board.player.step({
                    F: 0,
                    R: 1,
                });
                game_board.player.modify_resource("ultimate", 1);
            };
            break;
        case "step_left":
            this.execute = () => {
                game_board.player.step({
                    F: 0,
                    R: -1,
                });
                game_board.player.modify_resource("ultimate", 1);
            };
            break;            
        case "turn_left":
            this.execute = () => {
                game_board.player.turn({
                    dir: 1,
                });
                game_board.player.modify_resource("ultimate", 1);
            };
            break;
        case "turn_right":
            this.execute = () => {
                game_board.player.turn({
                    dir: -1,
                });
                game_board.player.modify_resource("ultimate", 1);
            };
            break;
        case "explode_self":
            this.execute = () => {
                game_board.player.explode({
                    dmg: 2,
                });
            };
            break;
        default:
            break
        }
    }
}
class CommandDrag extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, controller_board, command_config}) {
        super(scene, x, y, command_config.img);

        this.scene = scene;

        this.X = null;
        this.Y = null;
                
        this.config = command_config;
        this.controller_board = controller_board;
        this.shop_board = null;
        
        this.displayWidth = this.config.width;
        this.scaleY = this.scaleX;

        this.tint = this.config.tint;

        this.setDepth(this.config.depth);
        
        scene.add.existing(this);
    }
    appear_at(command) {
        this.shop_board.disable_board();
        this.controller_board.disable_board();
        
        let on_tile_click = (X,Y) => {this.on_tile_click(X,Y);} // Need closure!
        this.controller_board.event_emitter.once("click", on_tile_click);
        
        let controller = this.controller_board.controller;
        controller.tween_alpha({from: 1, to: controller.config.hover.alpha});        
        controller.lock_faded = true;        
        
        this.tween_alpha({from: 0, to: 1});

        // TODO: Move tweens into separate class/container?
        this.scene.tweens.add({
            targets: this,
            scale: {from: command.scale, to: this.scale},
            ease: "Quint.Out",
            duration: this.config.time.scale,
        }); // scale

        const t = { val: 0.0 };
        this.scene.tweens.add({
            targets: t,
            val: 1,
            duration: this.config.time.fade,
            ease: "Quint.Out",
            onUpdate: () => {
                this.x = (1-t.val)*command.x + t.val*this.scene.input.x;
                this.y = (1-t.val)*command.y + t.val*this.scene.input.y;                
            },
            onComplete: () => {
                const follow_mouse = (pointer) => {
                    this.x = pointer.x;
                    this.y = pointer.y;
                };
                this.scene.input.on("pointermove", follow_mouse);                
                this.scene.input.once("pointerup", (pointer) => {
                    this.shop_board.reset_board();
                    this.scene.input.off("pointermove", follow_mouse);
                    this.controller_board.event_emitter.off("click", on_tile_click);
                    this.tween_alpha({from: 1, to: 0});

                    controller.tween_alpha({from: controller.alpha, to: 1});
                    controller.lock_faded = false;                    
                    this.controller_board.reset_board();
                });
            }
        });
    }
    on_tile_click(X,Y) {
        this.controller_board.remove_command(X,Y);
        
        let command = this.shop_board.commands[this.Y][this.X];
        this.controller_board.place_command({
            X: X,
            Y: Y,
            command: new Command({
                scene: command.scene,
                game_board: command.game_board,
                command_id: command.command_id,
                command_config: command.config,
            }),
        });

        let tile = this.controller_board.board.tiles[Y][X];
        
        const t = { val: 0.0 };        
        let pos = {
            x: this.scene.input.x,
            y: this.scene.input.y,
        };
        this.scene.tweens.add({
            targets: t,
            val: 1,
            duration: this.config.time.fade,
            ease: "Quint.Out",
            onUpdate: () => {
                this.x = (1-t.val)*pos.x + t.val*tile.x;
                this.y = (1-t.val)*pos.y + t.val*tile.y;
            },
        }); // pos

        this.scene.tweens.add({
            targets: this,
            scale: {to: this.scale, to: command.scale},
            ease: "Quint.Out",
            duration: this.config.time.scale,
        }); // scale
    }
}
Object.assign(CommandDrag.prototype, TweenMethods);
// Run /////////////////////////////////////////////////////////////////////////
let config = get_config();
var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: config.window.width,
    height: config.window.height,
    backgroundColor: config.window.color,
    scene: MainScene,
});
